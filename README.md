# GenesisGodNFT Contract Specification

## Overview
**GenesisGodNFT** is an ERC721A-based NFT contract for the "LoveRose Genesis God" collection. It supports royalty payments (ERC2981), access control, minting via allowed ERC20 tokens (USDT/USDC), whitelist quotas, contract locking, and token recovery features.

---

## Constants
| Name           | Value               | Description                            |
|----------------|---------------------|------------------------------------|
| MAX_SUPPLY     | 300                 | Maximum number of NFTs minted       |
| DEFAULT_ROYALTY| 1000 (10%)          | Default royalty fee in basis points |
| MIN_TOKEN_ID   | 1001                | Starting token ID                   |
| TOKEN_SYMBOL   | LRGG                |                                     |
| TOKEN_NAME     | LoveRose Genesis God|                                     |

---

## State Variables
| Variable         | Type         | Description                             |
|------------------|--------------|---------------------------------------|
| mintPrice        | uint256      | Mint price per token in payment token smallest unit |
| maxMintPerTxn    | uint256      | Max NFTs mintable per transaction     |
| allowedTokens    | mapping      | Allowed ERC20 tokens for minting      |
| tokenDecimals    | mapping      | Decimals for allowed ERC20 tokens     |
| whitelistQuota   | mapping      | Mint quota per whitelist address      |
| mintedCount      | mapping      | Number of NFTs minted per address     |
| isLocked         | bool         | Contract lock flag                     |
| baseTokenURI     | string       | Base URI for token metadata            |

---

## Roles
| Role          | Description                   |
|---------------|-------------------------------|
| DEFAULT_ADMIN_ROLE | Default admin role for contract control |
| ADMIN_ROLE    | Admin role for configuration    |
| MINTER_ROLE   | Minter role for minting tokens  |

---

## Events
| Event                  | Description                                   |
|------------------------|-----------------------------------------------|
| ContractLocked         | Emitted when contract is permanently locked   |
| ERC721Recovered        | Emitted when ERC721 tokens are recovered       |
| ERC20Withdrawn         | Emitted when ERC20 tokens are withdrawn        |
| MintWithToken          | Emitted when minting occurs with ERC20 payment |
| BaseTokenURIUpdated    | Emitted when base token URI is updated          |
| RoyaltyUpdated         | Emitted when royalty info is updated            |
| TokenAllowed           | Emitted when a new payment token is allowed     |
| WhitelistSet           | Emitted when whitelist quota is set             |
| MintPriceUpdated       | Emitted when mint price is updated              |

---

## Key Functions

### _startTokenId()
- Returns starting token ID (`1001`).

### setMintPrice(uint256 newPrice)
- Sets new mint price.
- Requires ADMIN_ROLE.
- Contract must not be locked.

### addAllowedToken(address token)
- Adds an ERC20 token to allowed tokens.
- Requires ADMIN_ROLE.
- Validates token supports ERC20 interface.

### lockContract()
- Locks contract to prevent further mutable changes.
- Requires ADMIN_ROLE.

### setWhitelist(address[] wallets, uint256[] quotas)
- Sets minting quotas for multiple addresses.
- Requires ADMIN_ROLE.
- Contract must not be locked.

### mint(address recipient, bool safe, uint256 quantity)
- Mints NFTs to recipient.
- Requires MINTER_ROLE.
- Supports safe mint (with ERC721Receiver check).

### publicMint(address paymentToken, uint256 quantity)
- Public minting by paying with allowed ERC20 tokens.
- Enforces whitelist quota and mint limits.
- Requires contract unlocked.

### recoverERC721(address tokenAddress, uint256 tokenId)
- Recovers ERC721 tokens sent to contract by mistake.
- Requires ADMIN_ROLE.

### withdrawERC20(address token, address recipient, uint256 amount)
- Withdraw ERC20 tokens from contract.
- Requires ADMIN_ROLE.

### setBaseTokenURI(string uri)
- Sets base URI for token metadata.
- Requires ADMIN_ROLE.
- Contract must not be locked.

### setRoyalty(address receiver, uint96 feeNumerator)
- Sets default royalty receiver and fee.
- Requires ADMIN_ROLE.
- Contract must not be locked.

### Role Management
- `grantAdmin(address account)` / `revokeAdmin(address account)`
- `grantMinter(address account)` / `revokeMinter(address account)`

### View Functions
- `getWhitelistQuota(address wallet)`
- `getMintedCount(address wallet)`
- `isAllowedToken(address token)`
- `totalMinted()`
- `mintProgress(address user)` - returns minted count and quota

---

## Notes
- Mint price and max mint per txn are adjustable by admins.
- Contract can be locked to prevent changes.
- Supports minting with multiple ERC20 tokens approved by admin.
- Minting respects whitelist quotas.
- Uses OpenZeppelin AccessControl and ReentrancyGuard for security.

---

This document is generated based on the source Solidity contract `GenesisGodNFT`.
