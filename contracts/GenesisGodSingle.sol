// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "erc721a/contracts/IERC721A.sol";
import "erc721a/contracts/extensions/ERC721AQueryable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/common/ERC2981.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

/**
 * @title PrimeCreatorNFT
 * @notice ERC721A-based NFT contract with built-in royalty support, role-based access control, and token recovery features.
 */
contract PrimeCreatorNFT is ERC721AQueryable, Ownable, AccessControl, ERC2981, ReentrancyGuard, Pausable {
    using SafeERC20 for IERC20;
    using Strings for uint256;

    uint256 constant MAX_SUPPLY = 300; // Maximum number of NFTs that can be minted
    uint96 constant DEFAULT_ROYALTY = 500; // Default royalty fee (in basis points, 500 = 5%)
    uint256 constant MIN_TOKEN_ID = 1; // Token IDs start from 1
    string constant TOKEN_SYMBOL = "LRGG"; // Token symbol
    string constant TOKEN_NAME = "LoveRose Genesis God"; // Token name
    uint256 public maxMintPerTxn = 300; // Maximum NFTs allowed to mint per transaction

    bool public isLocked; // Indicates whether contract settings are locked
    string public baseTokenURI = "ipfs://bafybeigs4p4v6tc7u45itvaj7lfeyef5au4donigwkkjys2qjdjdywlipu/"; // Base URI for token metadata

    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE"); // Role identifier for admin access
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE"); // Role identifier for minter access

    event ContractLocked(); // Emitted when the contract is permanently locked
    event ERC721Recovered(address indexed walletAddress, address indexed tokenAddress, uint256 tokenId); // Emitted when an ERC721 token is recovered
    event ERC20Withdrawn(address indexed token, address indexed to, uint256 amount); // Emitted when ERC20 tokens are withdrawn
    event BaseTokenURIUpdated(string newURI); // Emitted when base URI is updated
    event RoyaltyUpdated(address indexed receiver, uint96 fee); // Emitted when royalty info is updated
    event TokensMinted(address indexed operator, address indexed recipient, uint256 quantity); // Emitted when tokens are minted
    event MaxMintPerTxnSet(uint256 newLimit); // Emitted when maxMintPerTxn is updated
    event AdminGranted(address indexed targetAddress); // Emitted when a new admin address is granted
    event AdminRevoked(address indexed targetAddress); // Emitted when an admin address is revoked
    event MinterGranted(address indexed targetAddress); // Emitted when a minter role is granted
    event MinterRevoked(address indexed targetAddress); // Emitted when a minter role is revoked
    event ContractPaused(address account); // Emitted when contract paused
    event ContractUnpaused(address account); // Emitted when contract unpaused
    /**
     * @notice Returns the starting token ID (overridden from ERC721A)
     * @return Starting token ID
     */
    function _startTokenId() internal pure override returns (uint256) {
        return MIN_TOKEN_ID;
    }

    /**
     * @notice Contract constructor
     */
    constructor() ERC721A(TOKEN_NAME, TOKEN_SYMBOL) Ownable(msg.sender) {
        _setDefaultRoyalty(msg.sender, DEFAULT_ROYALTY);
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(ADMIN_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, msg.sender);
    }

    /**
     * @notice Permanently locks the contract from being modified
     * @dev Prevents future updates to baseTokenURI or other mutable states
     */
    function lockContract() external onlyRole(ADMIN_ROLE) {
        require(!isLocked, "PrimeCreatorNFT: Contract is already locked");
        isLocked = true;
        emit ContractLocked();
    }

    /**
     * @notice Mints new NFTs to a specified recipient
     * @param recipient Address to receive the NFTs
     * @param quantity Number of NFTs to mint
     */
    function mint(address recipient, uint256 quantity) external onlyRole(MINTER_ROLE) whenNotPaused{
        require(recipient != address(0), "PrimeCreatorNFT: Invalid recipient");
        require(quantity > 0, "PrimeCreatorNFT: Quantity must be greater than zero");
        require(quantity <= maxMintPerTxn, "PrimeCreatorNFT: Quantity must be smaller than maxMintPerTxn");
        require((totalSupply() + quantity) <= MAX_SUPPLY, "Quantity exceeds totalSupply");
        _safeMint(recipient, quantity);
        emit TokensMinted(msg.sender, recipient, quantity);
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
        whenNotPaused
    {
        require(tokenAddress != address(this), "PrimeCreatorNFT: Cannot recover own tokens");
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
        whenNotPaused
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
    function setMaxMintAmount(uint256 _newmaxMintPerTxn) external onlyRole(ADMIN_ROLE) {
        maxMintPerTxn = _newmaxMintPerTxn;
        emit MaxMintPerTxnSet(maxMintPerTxn);
    }

    /**
     * @notice Sets the base URI for all token metadata
     * @param uri New base token URI
     */
    function setBaseTokenURI(string memory uri) external onlyRole(ADMIN_ROLE) {
        require(!isLocked, "PrimeCreatorNFT: Contract is locked");
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
        override(ERC721A, IERC721A)
        returns (string memory)
    {
        require(_exists(tokenId), "PrimeCreatorNFT: Token does not exist");
        string memory baseURI = baseTokenURI;
        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId.toString(), ".json")) : "";
    }

    /**
     * @notice Sets the default royalty receiver and fee
     * @param receiver Address to receive royalty
     * @param feeNumerator Royalty fee in basis points
     */
    function setRoyalty(address receiver, uint96 feeNumerator) external onlyRole(ADMIN_ROLE) {
        require(!isLocked, "PrimeCreatorNFT: Contract is locked");
        require(feeNumerator <= _feeDenominator(), "PrimeCreatorNFT: Royalty fee too high");
        require(receiver != address(0), "PrimeCreatorNFT: Invalid royalty receiver");
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
        override(ERC721A, IERC721A, ERC2981, AccessControl)
        returns (bool)
    {
        return ERC721A.supportsInterface(interfaceId) || ERC2981.supportsInterface(interfaceId) ||AccessControl.supportsInterface(interfaceId);
    }

    /**
     * @notice Grants ADMIN_ROLE to a given account
     * @param account Address to grant role to
     */
    function grantAdmin(address account) external onlyOwner {
        _grantRole(ADMIN_ROLE, account);
        emit AdminGranted(account);
    }

    /**
     * @notice Revokes ADMIN_ROLE from a given account
     * @param account Address to revoke role from
     */
    function revokeAdmin(address account) external onlyOwner {
        _revokeRole(ADMIN_ROLE, account);
        emit AdminRevoked(account);
    }

    /**
     * @notice Grants MINTER_ROLE to a given account
     * @param account Address to grant role to
     */
    function grantMinter(address account) external onlyOwner {
        _grantRole(MINTER_ROLE, account);
        emit MinterGranted(account);
    }

    /**
     * @notice Revokes MINTER_ROLE from a given account
     * @param account Address to revoke role from
     */
    function revokeMinter(address account) external onlyOwner {
        _revokeRole(MINTER_ROLE, account);
        emit MinterRevoked(account);
    }

    /**
     * @notice Pauses contract operations
     */
    function pause() external onlyRole(ADMIN_ROLE) {
        _pause();
        emit ContractPaused(msg.sender);
    }

    /**
     * @notice Resumes contract operations
     */
    function unpause() external onlyRole(ADMIN_ROLE) {
        _unpause();
        emit ContractUnpaused(msg.sender);
    }

    /**
    * @notice Allows an account to renounce (give up) a role it holds
    * @dev Overrides AccessControl's renounceRole to prevent renouncing critical roles
    *      such as DEFAULT_ADMIN_ROLE and ADMIN_ROLE to avoid losing essential permissions
    * @param role The role identifier to renounce
    * @param account The address of the account renouncing the role
    *
    * Requirements:
    * - The role cannot be DEFAULT_ADMIN_ROLE or ADMIN_ROLE, as these are critical roles
    */
    function renounceRole(bytes32 role, address account) public override {
        require(
            role != DEFAULT_ADMIN_ROLE && role != ADMIN_ROLE,
            "PrimeCreatorNFT: cannot renounce critical roles"
        );
        super.renounceRole(role, account);
    }
}
