// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/common/ERC2981.sol";

/**
 * @title GenesisGodNFT
 * @notice LoveRose NFT collection with royalty support, access control, USDT/USDC minting, and recovery features.
 */
contract GenesisGodNFT is ERC721A, AccessControl, ERC2981, ReentrancyGuard {
    using SafeERC20 for IERC20;
    using Strings for uint256;

    uint256 public constant MAX_SUPPLY = 300; // ✅ Maximum number of NFTs that can be minted
    uint96 public constant DEFAULT_ROYALTY = 1000; // ✅ Default royalty fee (1000 = 10%)
    uint256 public constant MIN_TOKEN_ID = 1001; // ✅ Token IDs start from 1001
    uint256 public constant MINT_PRICE = 100_000 * 1e18; // ✅ Mint price per token in USDT/USDC
    
    uint256 public maxMintPerTxn = 300;
    // `bytes4(keccak256('startTokenId'))`.
    uint256 private constant _START_TOKEN_ID_STORAGE_SLOT = 0x28f75032;

    mapping(address => bool) private allowedTokens;
    mapping(address => uint256) private whitelistQuota;
    mapping(address => uint256) private mintedCount;

    bool public isLocked; // ✅ Indicates whether contract settings are locked
    string public baseTokenURI = "ipfs://QmU63czsL944gxH5ME4wFCgYGPDsYrg7rBaGpn6BNWceNK/"; // ✅ Base URI for token metadata

    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE"); // ✅ Role allowed to manage admin-only action
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE"); // ✅ Role allowed to mint actions

    event ContractLocked(); // ✅ Emitted when the contract is permanently locked
    event ERC721Recovered(address indexed walletAddress, address indexed tokenAddress, uint256 tokenId); // ✅ Emitted when an ERC721 token is recovered
    event ERC20Withdrawn(address indexed token, address indexed to, uint256 amount);
    event MintWithToken(address indexed walletAddress, address indexed tokenAddress , uint256 startTokenId, uint256 quantity); // ✅ Emitted when minting with USDT
    event BaseTokenURIUpdated(string newURI); // ✅ Emitted when base URI is updated
    event RoyaltyUpdated(address indexed receiver, uint96 fee);
    event TokenAllowed(address indexed token);
    event WhitelistSet(address indexed user, uint256 quota);

    function _startTokenId() internal pure override returns (uint256) {
        return MIN_TOKEN_ID;
    }

    /**
     * @notice Contract constructor
     * @param _tokens Address of the Stable tokens
     */
    constructor(address[] memory _tokens) ERC721A("LoveRose Genesis God", "LRGG") {
        _setDefaultRoyalty(msg.sender, DEFAULT_ROYALTY);
        for (uint i = 0; i < _tokens.length; i++) {
            allowedTokens[_tokens[i]] = true;
        }
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(ADMIN_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, msg.sender);
    }

    function addAllowedToken(address token) external onlyRole(ADMIN_ROLE) {
        allowedTokens[token] = true;
        emit TokenAllowed(token);
    }

    /**
     * @notice Permanently locks the contract from being modified
     * @dev Prevents future updates to baseTokenURI or other mutable states
     */
    function lockContract() external onlyRole(ADMIN_ROLE) {
        require(!isLocked, "GenesisGod: Contract is already locked");
        isLocked = true;
        emit ContractLocked();
    }

    function setWhitelist(address[] calldata wallets, uint256[] calldata quotas) external onlyRole(ADMIN_ROLE) {
        require(!isLocked, "GenesisGod: Contract is locked");
        require(wallets.length == quotas.length, "GenesisGod: Mismatched lengths");
        for (uint256 i = 0; i < wallets.length; i++) {
            whitelistQuota[wallets[i]] = quotas[i];
            emit WhitelistSet(wallets[i], quotas[i]);
        }
    }

    /**
     * @notice Mints a new token to a specific recipient
     * @param recipient Address to receive the token
     * @param safe Is Safe call
     */
    function mint(address recipient, bool safe, uint256 quantity) external onlyRole(MINTER_ROLE) {
        require(recipient != address(0), "GenesisGod: Invalid recipient");
        require(safe || !isContract(recipient), "GenesisGod: Unsafe mint to contract not allowed");
        require(quantity > 0, "GenesisGod: Quantity must be greater than zero");
        require(quantity <= maxMintPerTxn, "GenesisGod: Quantity must be smaller than maxMintPerTxn");
        require((totalSupply() + quantity) <= MAX_SUPPLY, string.concat(
            "Quantity (",
            Strings.toString(quantity),
            ") exceeds totalSupply (",
            Strings.toString(totalSupply()),
            ")")
        );
        if (safe) {
           _safeMint(recipient, quantity);
        } else {
            _mint(recipient, quantity);
        }
    }

    function isContract(address account) internal view returns (bool) {
        return account.code.length > 0;
    }

    /**
     * @notice Mints a token using USDT as payment
     * @dev Only EOA callers can use this function
     */
    function publicMint(address paymentToken, uint256 quantity) external nonReentrant{
        require(!isLocked, "GenesisGod: Contract is locked");
        require(!isContract(msg.sender), "GenesisGod: Contracts not allowed");
        require(paymentToken != address(0), "GenesisGod: Invalid payment token");
        require(allowedTokens[paymentToken], "Unsupported token");
        require(quantity > 0, "GenesisGod: Quantity must be greater than zero");
        require(quantity <= maxMintPerTxn, "GenesisGod: Quantity must be smaller than maxMintPerTxn");
        require(totalSupply() + quantity <= MAX_SUPPLY, "GenesisGod: Max supply reached");
        require(mintedCount[msg.sender] + quantity <= whitelistQuota[msg.sender], "Quota exceeded");
        mintedCount[msg.sender] += quantity;
        IERC20(paymentToken).safeTransferFrom(msg.sender, address(this), MINT_PRICE * quantity);
        _mint(msg.sender, quantity);
        emit MintWithToken(msg.sender, paymentToken, _nextTokenId() - quantity, quantity);
    }

    /**
     * @notice Admin function to recover ERC721 tokens mistakenly sent to this contract
     */
    function recoverERC721(address tokenAddress, uint256 tokenId)
        external
        onlyRole(ADMIN_ROLE)
        nonReentrant
    {
        require(tokenAddress != address(this), "GenesisGod: Cannot recover own tokens");
        IERC721(tokenAddress).transferFrom(address(this), msg.sender, tokenId);
        emit ERC721Recovered(msg.sender, tokenAddress, tokenId);
    }

    /**
     * @notice Admin function to withdraw ERC20 tokens to a specific address
     * @param token Token address
     * @param recipient Recipient address
     * @param amount Amount to withdraw
     */
    function withdrawERC20(address token, address recipient, uint256 amount)
        external
        onlyRole(ADMIN_ROLE)
        nonReentrant
    {
        require(token != address(0), "Invalid token address");
        require(recipient != address(0), "Invalid recipient");
        require(amount > 0, "Amount must be greater than zero");
        IERC20(token).safeTransfer(recipient, amount);
        emit ERC20Withdrawn(token, recipient, amount);
    }

    function setmaxMintAmount(uint256 _newmaxMintPerTxn) external onlyRole(ADMIN_ROLE) {
        maxMintPerTxn = _newmaxMintPerTxn;
    }

    /**
     * @notice Sets the base URI for all tokens
     * @dev Cannot be changed after contract is locked
     */
    function setBaseTokenURI(string memory uri) external onlyRole(ADMIN_ROLE) {
        require(!isLocked, "GenesisGod: Contract is locked");
        baseTokenURI = uri;
        emit BaseTokenURIUpdated(uri);
    }

    /**
     * @notice Returns the metadata URI for a given token
     */
    function tokenURI(uint256 tokenId)
        public
        view
        override
        returns (string memory)
    {
        require(_exists(tokenId), "GenesisGod: Token does not exist");
        string memory baseURI = baseTokenURI;
        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId.toString(), ".json")) : "";
    }

    function setRoyalty(address receiver, uint96 feeNumerator) external onlyRole(ADMIN_ROLE) {
        require(!isLocked, "GenesisGod: Contract is locked");
        require(feeNumerator <= _feeDenominator(), "GenesisGod: Royalty fee too high");
        require(receiver != address(0), "GenesisGod: Invalid royalty receiver");
        _setDefaultRoyalty(receiver, feeNumerator);
        emit RoyaltyUpdated(receiver, feeNumerator);
    }

    /**
     * @notice Indicates whether a contract implements a specific interface
     */
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721A, ERC2981, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    /**
     * @notice Grants administrator permission to an address
     */
    function grantAdmin(address account) external onlyRole(ADMIN_ROLE) {
        _grantRole(ADMIN_ROLE, account);
    }

    /**
     * @notice Revokes administrator permission from an address
     */
    function revokeAdmin(address account) external onlyRole(ADMIN_ROLE) {
        _revokeRole(ADMIN_ROLE, account);
    }

        /**
     * @notice Grants administrator permission to an address
     */
    function grantMinter(address account) external onlyRole(ADMIN_ROLE) {
        _grantRole(MINTER_ROLE, account);
    }

    /**
     * @notice Revokes administrator permission from an address
     */
    function revokeMinter(address account) external onlyRole(ADMIN_ROLE) {
        _revokeRole(MINTER_ROLE, account);
    }

    function getWhitelistQuota(address wallet) external view returns (uint256) {
        return whitelistQuota[wallet];
    }

    function getMintedCount(address wallet) external view returns (uint256) {
        return mintedCount[wallet];
    }

    function isAllowedToken(address token) external view returns (bool) {
        return allowedTokens[token];
    }

    function totalMinted() external view returns (uint256) {
        return _totalMinted();
    }

    function mintProgress(address user) external view returns (uint256 minted, uint256 quota) {
        return (mintedCount[user], whitelistQuota[user]);
    }
}
