// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Royalty.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

/**
 * @title GenesisGodNFT
 * @notice LoveRose NFT collection with royalty support, access control, USDT/USDC minting, and recovery features.
 */
contract GenesisGodNFT is ERC721, ERC721Enumerable, AccessControl, ERC721Royalty, ReentrancyGuard {
    using SafeERC20 for IERC20;
    using Strings for uint256;

    uint256 public constant MAX_SUPPLY = 300; // ✅ Maximum number of NFTs that can be minted
    uint96 public constant DEFAULT_ROYALTY = 1000; // ✅ Default royalty fee (1000 = 10%)
    uint256 public constant MIN_TOKEN_ID = 1001; // ✅ Token IDs start from 1001
    uint256 public constant MINT_PRICE = 100_000 * 1e18; // ✅ Mint price per token in USDT/USDC
    uint256 private _nextTokenId = MIN_TOKEN_ID;

    mapping(address => bool) public allowedTokens;

    bool public isLocked; // ✅ Indicates whether contract settings are locked
    string public baseTokenURI = "ipfs://QmU63czsL944gxH5ME4wFCgYGPDsYrg7rBaGpn6BNWceNK/"; // ✅ Base URI for token metadata

    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE"); // ✅ Role allowed to manage admin-only actions
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE"); // ✅ Role allowed to mint NFTs

    event ContractLocked(); // ✅ Emitted when the contract is permanently locked
    event ERC721Recovered(address indexed walletAddress, address indexed tokenAddress, uint256 tokenId); // ✅ Emitted when an ERC721 token is recovered
    event ERC20Withdrawn(address indexed token, address indexed to, uint256 amount);
    event MintWithToken(address indexed walletAddress, address indexed tokenAddress , uint256 tokenId); // ✅ Emitted when minting with USDT
    event BaseTokenURIUpdated(string newURI); // ✅ Emitted when base URI is updated
    event RoyaltyUpdated(address indexed receiver, uint96 fee);

    /**
     * @notice Contract constructor
     * @param _tokens Address of the Stable tokens
     */
    constructor(address[] memory _tokens) ERC721("LoveRose Genesis God", "LRGG") {
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

    /**
     * @notice Mints a new token to a specific recipient
     * @param recipient Address to receive the token
     * @param safe Is Safe call
     */
    function mint(address recipient, bool safe) external onlyRole(MINTER_ROLE) {
        require(recipient != address(0), "GenesisGod: Invalid recipient");
        require(totalSupply() < MAX_SUPPLY, "GenesisGod: Max supply reached");

        uint256 tokenId = _nextTokenId++;
        if (safe) {
            _safeMint(recipient, tokenId);
        } else {
            _mint(recipient, tokenId);
        }
    }

    function isContract(address account) internal view returns (bool) {
        return account.code.length > 0;
    }

    /**
     * @notice Mints a token using USDT as payment
     * @dev Only EOA callers can use this function
     */
    function publicMint(address paymentToken) external nonReentrant{
        require(!isLocked, "GenesisGod: Contract is locked");
        require(!isContract(msg.sender), "GenesisGod: Contracts not allowed");
        require(allowedTokens[paymentToken], "Unsupported token");
        require(totalSupply() < MAX_SUPPLY, "GenesisGod: Max supply reached");
        IERC20(paymentToken).safeTransferFrom(msg.sender, address(this), MINT_PRICE);
        uint256 tokenId = _nextTokenId++;
        _safeMint(msg.sender, tokenId);
        emit MintWithToken(msg.sender, paymentToken, tokenId);
    }

    /**
     * @dev Hook to update ownership state
     */
    function _update(address to, uint256 tokenId, address auth)
        internal
        override(ERC721, ERC721Enumerable)
        returns (address)
    {
        return super._update(to, tokenId, auth);
    }

    /**
     * @dev Hook to update balances during mint or transfer
     */
    function _increaseBalance(address account, uint128 value)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._increaseBalance(account, value);
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
     * @notice Returns a paginated list of token IDs owned by a given address
     * @param owner Address to query
     * @param cursor Starting index for pagination
     * @param size Number of tokens to return
     * @return tokenIds Array of token IDs
     * @return newCursor Updated cursor after pagination
     */
    function tokensOfOwnerBySize(address owner, uint256 cursor, uint256 size)
        external
        view
        returns (uint256[] memory tokenIds, uint256 newCursor)
    {
        require(owner != address(0), "GenesisGod: Invalid owner address");
        uint256 length = size;
        uint256 balance = balanceOf(owner);
        if (cursor + length > balance) {
            length = balance - cursor;
        }

        tokenIds = new uint256[](length);
        for (uint256 i = 0; i < length; i++) {
            tokenIds[i] = tokenOfOwnerByIndex(owner, cursor + i);
        }

        return (tokenIds, cursor + length);
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
        require(_ownerOf(tokenId) != address(0), "GenesisGod: Token does not exist");

        return bytes(baseTokenURI).length > 0
            ? string(abi.encodePacked(baseTokenURI, tokenId.toString(), ".json"))
            : "";
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
        override(ERC721, ERC721Enumerable, ERC721Royalty, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    /**
     * @notice Grants minting permission to an address
     */
    function grantMinter(address account) external onlyRole(ADMIN_ROLE) {
        _grantRole(MINTER_ROLE, account);
    }

    /**
     * @notice Revokes minting permission from an address
     */
    function revokeMinter(address account) external onlyRole(ADMIN_ROLE) {
        _revokeRole(MINTER_ROLE, account);
    }
}
