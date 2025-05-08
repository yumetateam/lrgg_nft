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
 * @title GenesisGod
 * @notice LoveRose NFT collection with royalty support and recovery functions
 */
contract GenesisGodNFT is ERC721, ERC721Enumerable, AccessControl, ERC721Royalty, ReentrancyGuard {
    using SafeERC20 for IERC20;
    using Strings for uint256;

    uint256 public constant MAX_SUPPLY      = 300;
    uint96 public constant DEFAULT_ROYALTY  = 500; // 500 = 5%
    uint256 public constant MIN_TOKEN_ID  = 100001; 
    uint256 public constant MAX_TOKEN_ID  = 999999; 
    
    bool public isLocked;
    string public baseTokenURI;
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    event ContractLocked();
    event ERC721Recovered(address indexed tokenAddress, uint256 tokenId);
    event ERC20Recovered(address indexed tokenAddress, uint256 amount);

    /**
     * @notice Constructor
     */
    constructor() ERC721("LoveRose Genesis God", "LRGG") {
        _setDefaultRoyalty(msg.sender, DEFAULT_ROYALTY);
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(ADMIN_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, msg.sender);
    }

    /**
     * @notice Locks the contract permanently to prevent further baseURI changes
     * @dev Callable by the contract owner only
     */
    function lockContract() external onlyRole(ADMIN_ROLE) {
        require(!isLocked, "GenesisGod: Contract is already locked");
        isLocked = true;
        emit ContractLocked();
    }

    /**
     * @notice Mints a specific token ID to a recipient address
     * @param recipient Recipient address
     * @param tokenId Token ID to mint
     * @dev Callable by the contract owner only
     */
    function mint(address recipient, uint256 tokenId) external onlyRole(MINTER_ROLE) {
        require(recipient != address(0), "GenesisGod: Invalid recipient");
        require(totalSupply() < MAX_SUPPLY, "GenesisGod: Max supply reached");
        require(tokenId >= MIN_TOKEN_ID && tokenId <= MAX_TOKEN_ID, "GenesisGod: Token ID out of range");
        require(_ownerOf(tokenId) == address(0), "GenesisGod: Token already minted");
        _mint(recipient, tokenId);
    }

    /**
     * @notice Safely mints a specific token ID to a recipient address
     * @param recipient Recipient address
     * @param tokenId Token ID to mint
     * @dev Callable by the contract owner only
     */
    function safeMint(address recipient, uint256 tokenId) external onlyRole(MINTER_ROLE)  {
        require(recipient != address(0), "GenesisGod: Invalid recipient");
        require(totalSupply() < MAX_SUPPLY, "GenesisGod: Max supply reached");
        require(tokenId >= MIN_TOKEN_ID && tokenId <= MAX_TOKEN_ID, "GenesisGod: Token ID out of range");
        require(_ownerOf(tokenId) == address(0), "GenesisGod: Token already minted");
        _safeMint(recipient, tokenId);
    }

    /**
     * @dev Internal override for token transfer and minting logic
     */
    function _update(
        address to,
        uint256 tokenId,
        address auth
    ) internal override(ERC721, ERC721Enumerable) returns (address) {
        return super._update(to, tokenId, auth);
    }

    /**
     * @dev Internal override to adjust token balance
     */
    function _increaseBalance(address account, uint128 value)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._increaseBalance(account, value);
    }

    /**
     * @notice Recovers ERC721 tokens mistakenly sent to this contract
     * @param tokenAddress Address of the NFT contract
     * @param tokenId ID of the token to recover
     * @dev Callable by the contract owner only
     */
    function recoverERC721(address tokenAddress, uint256 tokenId) external onlyRole(ADMIN_ROLE) nonReentrant {
        require(tokenAddress != address(this), "GenesisGod: Cannot recover own tokens");
        IERC721(tokenAddress).transferFrom(address(this), msg.sender, tokenId);
        emit ERC721Recovered(tokenAddress, tokenId);
    }

    /**
     * @notice Recovers ERC20 tokens mistakenly sent to this contract
     * @param tokenAddress Address of the ERC20 token
     * @dev Callable by the contract owner only
     */
    function recoverERC20(address tokenAddress) external onlyRole(ADMIN_ROLE) nonReentrant {
        uint256 balance = IERC20(tokenAddress).balanceOf(address(this));
        require(balance != 0, "GenesisGod: No tokens to recover");
        IERC20(tokenAddress).safeTransfer(msg.sender, balance);
        emit ERC20Recovered(tokenAddress, balance);
    }

    /**
     * @notice Sets the base URI for metadata
     * @param uri Base URI string
     * @dev Callable by the contract owner only
     */
    function setBaseTokenURI(string memory uri) external onlyRole(ADMIN_ROLE) {
        require(!isLocked, "GenesisGod: Contract is locked");
        baseTokenURI = uri;
    }

    /**
     * @notice Returns a paginated list of token IDs owned by a user
     * @param owner Address of the token holder
     * @param cursor Starting index in the token list
     * @param size Number of tokens to fetch
     * @return tokenIds Array of token IDs
     * @return newCursor Next cursor position
     */
    function tokensOfOwnerBySize(
        address owner,
        uint256 cursor,
        uint256 size
    ) external view returns (uint256[] memory tokenIds, uint256 newCursor) {
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
     * @notice Returns the token metadata URI
     * @param tokenId Token ID
     * @return URI string
     */
    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_ownerOf(tokenId) != address(0), "GenesisGod: Token does not exist");

        return bytes(baseTokenURI).length > 0
            ? string(abi.encodePacked(baseTokenURI, tokenId.toString(), ".json"))
            : "";
    }

    /**
     * @notice Returns true if the contract implements an interface
     * @param interfaceId Interface ID
     */
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable , ERC721Royalty, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    /**
     * @notice Grants the MINTER_ROLE to a specific account
     * @dev Can only be called by an account with the ADMIN_ROLE
     * @param account The address to be granted the MINTER_ROLE
     */
    function grantMinter(address account) external onlyRole(ADMIN_ROLE) {
        _grantRole(MINTER_ROLE, account);
    }

    /**
     * @notice Revokes the MINTER_ROLE from a specific account
     * @dev Can only be called by an account with the ADMIN_ROLE
     * @param account The address from which the MINTER_ROLE will be revoked
     */
    function revokeMinter(address account) external onlyRole(ADMIN_ROLE) {
        _revokeRole(MINTER_ROLE, account);
    }
}