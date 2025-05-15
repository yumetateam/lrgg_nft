// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";
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

    uint256 constant MAX_SUPPLY = 300; // Maximum number of NFTs that can be minted
    uint96 constant DEFAULT_ROYALTY = 1000; // Default royalty fee (in basis points, 1000 = 10%)
    uint256 constant MIN_TOKEN_ID = 1001; // Token IDs start from 1001
    string constant TOKEN_SYMBOL = "LRGG"; // Token symbol
    string constant TOKEN_NAME = "LoveRose Genesis God"; // Token name

    uint256 public mintPrice = 100_000; // Mint price per token in USDT/USDC
    uint256 public maxMintPerTxn = 300; // Maximum NFTs allowed to mint per transaction

    mapping(address => bool) public allowedTokens; // Whitelisted ERC20 tokens allowed for minting
    mapping(address => uint8) public tokenDecimals; // Whitelisted ERC20 tokenDecimals
    mapping(address => uint256) private whitelistQuota; // Minting quota per user
    mapping(address => uint256) private mintedCount; // Total minted count per user

    bool public isLocked; // Indicates whether contract settings are locked
    string public baseTokenURI = "ipfs://QmU63czsL944gxH5ME4wFCgYGPDsYrg7rBaGpn6BNWceNK/"; // Base URI for token metadata

    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE"); // Role identifier for admin access
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE"); // Role identifier for minter access

    event ContractLocked(); // Emitted when the contract is permanently locked
    event ERC721Recovered(address indexed walletAddress, address indexed tokenAddress, uint256 tokenId); // Emitted when an ERC721 token is recovered
    event ERC20Withdrawn(address indexed token, address indexed to, uint256 amount); // Emitted when ERC20 tokens are withdrawn
    event MintWithToken(address indexed walletAddress, address indexed tokenAddress , uint256 startTokenId, uint256 quantity); // Emitted when minting with ERC20 token
    event BaseTokenURIUpdated(string newURI); // Emitted when base URI is updated
    event RoyaltyUpdated(address indexed receiver, uint96 fee); // Emitted when royalty info is updated
    event TokenAllowed(address indexed token); // Emitted when a new token is allowed
    event WhitelistSet(address indexed user, uint256 quota); // Emitted when a whitelist quota is set
    event MintPriceUpdated(uint256 newPrice); // Emitted when a mintPrice is set

    /**
     * @notice Returns the starting token ID (overridden from ERC721A)
     * @return Starting token ID
     */
    function _startTokenId() internal pure override returns (uint256) {
        return MIN_TOKEN_ID;
    }

    /**
     * @notice Contract constructor
     * @param _tokens Array of ERC20 token addresses allowed for minting
     */
    constructor(address[] memory _tokens) ERC721A(TOKEN_NAME, TOKEN_SYMBOL) {
        _setDefaultRoyalty(msg.sender, DEFAULT_ROYALTY);
        for (uint i = 0; i < _tokens.length; i++) {
            if (_tokens[i] == address(0)) {
                revert("GenesisGod: Invalid token address");
            }
            if (!_isValidERC20(_tokens[i])) {
                revert("GenesisGod: Invalid erc20 token address");
            }
            allowedTokens[_tokens[i]]= true;
            try IERC20Metadata(_tokens[i]).decimals() returns (uint8 decimals) {
                tokenDecimals[_tokens[i]] = decimals;
            } catch {
                revert("GenesisGod: Token does not support decimals()");
            }
        }
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(ADMIN_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, msg.sender);
    }

    /**
     * @notice Sets a new mint price for Genesis God NFTs.
     * @dev Only callable by accounts with ADMIN_ROLE and when the contract is not locked.
     *      The new mint price must be greater than zero.
     * @param newPrice The new mint price in payment token's smallest unit (e.g., 1e6 for USDT/USDC).
     */
    function setMintPrice(uint256 newPrice) external onlyRole(ADMIN_ROLE) {
        require(!isLocked, "GenesisGod: Contract is locked");
        require(newPrice > 0, "GenesisGod: Invalid mint price");
        mintPrice = newPrice;
        emit MintPriceUpdated(newPrice);
    }

    /** 
     * @notice Checks whether a given address is a valid ERC20 token contract
     * @dev Attempts to call `totalSupply()` on the address; if the call succeeds, it is considered a valid ERC20
     * @param token The address to check for ERC20 validity
     * @return True if the address is a valid ERC20 token contract, false otherwise
     */
    function _isValidERC20(address token) internal view returns (bool) {
        try IERC20(token).totalSupply() returns (uint256) {
            return true;
        } catch {
            return false;
        }
    }

    /**
     * @notice Adds a new ERC20 token address as an accepted payment token
     * @param token Address of the ERC20 token to allow
     */
    function addAllowedToken(address token) external onlyRole(ADMIN_ROLE) {
        require(token != address(0), "GenesisGod: Invalid token address");
        require(_isValidERC20(token), "GenesisGod: Invalid erc20 token address");
        allowedTokens[token] = true;
        try IERC20Metadata(token).decimals() returns (uint8 decimals) {
            tokenDecimals[token] = decimals;
        } catch {
            revert("GenesisGod: Token does not support decimals()");
        }
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

    /**
     * @notice Sets the whitelist quota for each address
     * @param wallets Array of user addresses
     * @param quotas Corresponding array of mint quotas
     */
    function setWhitelist(address[] calldata wallets, uint256[] calldata quotas) external onlyRole(ADMIN_ROLE) {
        require(!isLocked, "GenesisGod: Contract is locked");
        require(wallets.length == quotas.length, "GenesisGod: Mismatched lengths");
        for (uint256 i = 0; i < wallets.length; i++) {
            whitelistQuota[wallets[i]] = quotas[i];
            emit WhitelistSet(wallets[i], quotas[i]);
        }
    }

    /**
    * @notice Sets the whitelist quota for a single user
    * @dev This function allows the admin to specify how many NFTs a specific address can mint
    * @param wallet Address of the user to whitelist
    * @param quota Number of NFTs the user is allowed to mint
    */
    function setWhitelistSingle(address wallet, uint256 quota) external onlyRole(ADMIN_ROLE) {
        require(!isLocked, "Contract is locked");
        whitelistQuota[wallet] = quota;
        emit WhitelistSet(wallet, quota);
    }

    /**
     * @notice Mints new NFTs to a specified recipient
     * @param recipient Address to receive the NFTs
     * @param safe If true, use _safeMint (checks for ERC721Receiver), else use _mint
     * @param quantity Number of NFTs to mint
     */
    function mint(address recipient, bool safe, uint256 quantity) external onlyRole(MINTER_ROLE) {
        require(recipient != address(0), "GenesisGod: Invalid recipient");
        require(safe || !_isContract(recipient), "GenesisGod: Unsafe mint to contract not allowed");
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

    /**
     * @notice Checks if an address is a contract
     * @param account Address to check
     * @return True if the address is a contract, false otherwise
     */
    function _isContract(address account) internal view returns (bool) {
        return account.code.length > 0;
    }

    /**
     * @notice Public mint function that allows users to mint NFTs by paying with allowed ERC20 tokens
     * @param paymentToken ERC20 token used for payment
     * @param quantity Number of NFTs to mint
     */
    function publicMint(address paymentToken, uint256 quantity) external nonReentrant { 
        require(!isLocked, "Contract is locked");
        require(!_isContract(msg.sender), "Contract mint not allowed");
        require(paymentToken != address(0) && allowedTokens[paymentToken], "Unsupported token");
        require(quantity > 0 && quantity <= maxMintPerTxn, "Invalid mint quantity");
        require(totalSupply() + quantity <= MAX_SUPPLY, "Exceeds max supply");

        uint256 minted = mintedCount[msg.sender];
        uint256 quota = whitelistQuota[msg.sender];
        require(minted + quantity <= quota, "Quota exceeded");
        
        mintedCount[msg.sender] = minted + quantity;

        uint8 decimals = tokenDecimals[paymentToken];
        uint256 adjustedPrice = mintPrice * (10 ** decimals);
        IERC20(paymentToken).transferFrom(msg.sender, address(this), adjustedPrice * quantity);

        _mint(msg.sender, quantity);
        emit MintWithToken(msg.sender, paymentToken, _nextTokenId() - quantity, quantity);
    }

    /**
     * @notice Admin function to recover ERC721 tokens mistakenly sent to this contract
     * @param tokenAddress Address of the ERC721 token
     * @param tokenId Token ID to recover
     */
    function recoverERC721(address tokenAddress, uint256 tokenId)
        external
        onlyRole(ADMIN_ROLE)
        nonReentrant
    {
        require(tokenAddress != address(this), "GenesisGod: Cannot recover own tokens");
        IERC721(tokenAddress).safeTransferFrom(address(this), msg.sender, tokenId);
        emit ERC721Recovered(msg.sender, tokenAddress, tokenId);
    }

    /**
     * @notice Admin function to withdraw ERC20 tokens from the contract
     * @param token ERC20 token address
     * @param recipient Address to receive the tokens
     * @param amount Amount of tokens to withdraw
     */
    function withdrawERC20(address token, address recipient, uint256 amount)
        external
        onlyRole(ADMIN_ROLE)
        nonReentrant
    {
        require(token != address(0), "Invalid token address");
        require(recipient != address(0), "Invalid recipient");
        require(amount > 0, "Amount must be greater than zero");
        uint256 balance = IERC20(token).balanceOf(address(this));
        require(balance >= amount, "Insufficient contract balance");

        IERC20(token).safeTransfer(recipient, amount);
        emit ERC20Withdrawn(token, recipient, amount);
    }

    /**
     * @notice Sets the maximum number of NFTs that can be minted in one transaction
     * @param _newmaxMintPerTxn New minting limit per transaction
     */
    function setmaxMintAmount(uint256 _newmaxMintPerTxn) external onlyRole(ADMIN_ROLE) {
        maxMintPerTxn = _newmaxMintPerTxn;
    }

    /**
     * @notice Sets the base URI for all token metadata
     * @param uri New base token URI
     */
    function setBaseTokenURI(string memory uri) external onlyRole(ADMIN_ROLE) {
        require(!isLocked, "GenesisGod: Contract is locked");
        baseTokenURI = uri;
        emit BaseTokenURIUpdated(uri);
    }

    /**
     * @notice Returns the metadata URI for a given token
     * @param tokenId Token ID
     * @return Metadata URI
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

    /**
     * @notice Sets the default royalty receiver and fee
     * @param receiver Address to receive royalty
     * @param feeNumerator Royalty fee in basis points
     */
    function setRoyalty(address receiver, uint96 feeNumerator) external onlyRole(ADMIN_ROLE) {
        require(!isLocked, "GenesisGod: Contract is locked");
        require(feeNumerator <= _feeDenominator(), "GenesisGod: Royalty fee too high");
        require(receiver != address(0), "GenesisGod: Invalid royalty receiver");
        _setDefaultRoyalty(receiver, feeNumerator);
        emit RoyaltyUpdated(receiver, feeNumerator);
    }

    /**
     * @notice Indicates whether a contract implements a specific interface
     * @param interfaceId Interface identifier
     * @return True if interface is supported
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
     * @notice Grants ADMIN_ROLE to a given account
     * @param account Address to grant role to
     */
    function grantAdmin(address account) external onlyRole(DEFAULT_ADMIN_ROLE) {
        _grantRole(ADMIN_ROLE, account);
    }

    /**
     * @notice Revokes ADMIN_ROLE from a given account
     * @param account Address to revoke role from
     */
    function revokeAdmin(address account) external onlyRole(DEFAULT_ADMIN_ROLE) {
        _revokeRole(ADMIN_ROLE, account);
    }

    /**
     * @notice Grants MINTER_ROLE to a given account
     * @param account Address to grant role to
     */
    function grantMinter(address account) external onlyRole(DEFAULT_ADMIN_ROLE) {
        _grantRole(MINTER_ROLE, account);
    }

    /**
     * @notice Revokes MINTER_ROLE from a given account
     * @param account Address to revoke role from
     */
    function revokeMinter(address account) external onlyRole(DEFAULT_ADMIN_ROLE) {
        _revokeRole(MINTER_ROLE, account);
    }

    /**
     * @notice Returns the whitelist quota for a given wallet
     * @param wallet Address of the user
     * @return Whitelist mint quota for the wallet
     */
    function getWhitelistQuota(address wallet) external view returns (uint256) {
        return whitelistQuota[wallet];
    }

    /**
     * @notice Returns the number of NFTs minted by a given wallet
     * @param wallet Address of the user
     * @return Number of NFTs minted
     */
    function getMintedCount(address wallet) external view returns (uint256) {
        return mintedCount[wallet];
    }

    /**
     * @notice Checks if a token is allowed for minting
     * @param token Address of the token
     * @return True if the token is allowed, false otherwise
     */
    function isAllowedToken(address token) external view returns (bool) {
        return allowedTokens[token];
    }

    /**
     * @notice Returns the total number of tokens minted
     * @return Total minted count
     */
    function totalMinted() external view returns (uint256) {
        return _totalMinted();
    }

    /**
     * @notice Returns the mint progress of a user
     * @param user Address of the user
     * @return minted Number of tokens minted
     * @return quota Maximum mint quota allowed
     */
    function mintProgress(address user) external view returns (uint256 minted, uint256 quota) {
        return (mintedCount[user], whitelistQuota[user]);
    }
}
