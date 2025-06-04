export const wagmiAbi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "AccessControlBadConfirmation",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "neededRole",
				"type": "bytes32"
			}
		],
		"name": "AccessControlUnauthorizedAccount",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "ApprovalCallerNotOwnerNorApproved",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "ApprovalQueryForNonexistentToken",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "BalanceQueryForZeroAddress",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "numerator",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "denominator",
				"type": "uint256"
			}
		],
		"name": "ERC2981InvalidDefaultRoyalty",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			}
		],
		"name": "ERC2981InvalidDefaultRoyaltyReceiver",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "numerator",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "denominator",
				"type": "uint256"
			}
		],
		"name": "ERC2981InvalidTokenRoyalty",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			}
		],
		"name": "ERC2981InvalidTokenRoyaltyReceiver",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "InvalidQueryRange",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "MintERC2309QuantityExceedsLimit",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "MintToZeroAddress",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "MintZeroQuantity",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "NotCompatibleWithSpotMints",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "OwnerQueryForNonexistentToken",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "OwnershipNotInitializedForExtraData",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			}
		],
		"name": "SafeERC20FailedOperation",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "SequentialMintExceedsLimit",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "SequentialUpToTooSmall",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "SpotMintTokenIdTooSmall",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "TokenAlreadyExists",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "TransferCallerNotOwnerNorApproved",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "TransferFromIncorrectOwner",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "TransferToNonERC721ReceiverImplementer",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "TransferToZeroAddress",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "URIQueryForNonexistentToken",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "newURI",
				"type": "string"
			}
		],
		"name": "BaseTokenURIUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "fromTokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "toTokenId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "ConsecutiveTransfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "ContractLocked",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "ERC20Withdrawn",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "walletAddress",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "tokenAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ERC721Recovered",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Paused",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "previousAdminRole",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "newAdminRole",
				"type": "bytes32"
			}
		],
		"name": "RoleAdminChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "RoleGranted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "RoleRevoked",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint96",
				"name": "fee",
				"type": "uint96"
			}
		],
		"name": "RoyaltyUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Unpaused",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "ADMIN_ROLE",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "DEFAULT_ADMIN_ROLE",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "MINTER_ROLE",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "baseTokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "explicitOwnershipOf",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "addr",
						"type": "address"
					},
					{
						"internalType": "uint64",
						"name": "startTimestamp",
						"type": "uint64"
					},
					{
						"internalType": "bool",
						"name": "burned",
						"type": "bool"
					},
					{
						"internalType": "uint24",
						"name": "extraData",
						"type": "uint24"
					}
				],
				"internalType": "struct IERC721A.TokenOwnership",
				"name": "ownership",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "tokenIds",
				"type": "uint256[]"
			}
		],
		"name": "explicitOwnershipsOf",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "addr",
						"type": "address"
					},
					{
						"internalType": "uint64",
						"name": "startTimestamp",
						"type": "uint64"
					},
					{
						"internalType": "bool",
						"name": "burned",
						"type": "bool"
					},
					{
						"internalType": "uint24",
						"name": "extraData",
						"type": "uint24"
					}
				],
				"internalType": "struct IERC721A.TokenOwnership[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			}
		],
		"name": "getRoleAdmin",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "grantAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "grantMinter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "grantRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "hasRole",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isLocked",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "lockContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxMintPerTxn",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "quantity",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "pause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "paused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "tokenAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "recoverERC721",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "renounceRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "revokeAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "revokeMinter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "revokeRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "salePrice",
				"type": "uint256"
			}
		],
		"name": "royaltyInfo",
		"outputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "uri",
				"type": "string"
			}
		],
		"name": "setBaseTokenURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_newmaxMintPerTxn",
				"type": "uint256"
			}
		],
		"name": "setMaxMintAmount",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			},
			{
				"internalType": "uint96",
				"name": "feeNumerator",
				"type": "uint96"
			}
		],
		"name": "setRoyalty",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "tokensOfOwner",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "start",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "stop",
				"type": "uint256"
			}
		],
		"name": "tokensOfOwnerIn",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "result",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "unpause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "withdrawERC20",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
] as const;

export const wagmiByteCode = '0x61012c600f55610100604052604360808181529061312260a039601190610026908261039b565b50348015610032575f5ffd5b50336040518060400160405280601681526020017f4c6f7665526f7365205072696d652043726561746f7200000000000000000000815250604051806040016040528060048152602001634c52504360e01b8152508160029081610096919061039b565b5060036100a3828261039b565b5060015f5550506001600160a01b0381166100d857604051631e4fbdf760e01b81525f60048201526024015b60405180910390fd5b6100e181610163565b506001600d55600e805460ff191690556100fd336101f46101b4565b6101075f33610256565b506101327fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177533610256565b5061015d7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633610256565b50610455565b600980546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b6127106001600160601b0382168110156101f357604051636f483d0960e01b81526001600160601b0383166004820152602481018290526044016100cf565b6001600160a01b03831661021c57604051635b6cc80560e11b81525f60048201526024016100cf565b50604080518082019091526001600160a01b039092168083526001600160601b039091166020909201829052600160a01b90910217600b55565b5f828152600a602090815260408083206001600160a01b038516845290915281205460ff166102fa575f838152600a602090815260408083206001600160a01b03861684529091529020805460ff191660011790556102b23390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016102fd565b505f5b92915050565b634e487b7160e01b5f52604160045260245ffd5b600181811c9082168061032b57607f821691505b60208210810361034957634e487b7160e01b5f52602260045260245ffd5b50919050565b601f82111561039657805f5260205f20601f840160051c810160208510156103745750805b601f840160051c820191505b81811015610393575f8155600101610380565b50505b505050565b81516001600160401b038111156103b4576103b4610303565b6103c8816103c28454610317565b8461034f565b6020601f8211600181146103fa575f83156103e35750848201515b5f19600385901b1c1916600184901b178455610393565b5f84815260208120601f198516915b828110156104295787850151825560209485019460019092019101610409565b508482101561044657868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b612cc0806104625f395ff3fe608060405260043610610280575f3560e01c8063715018a611610155578063a22cb465116100be578063cfbd488511610078578063cfbd48851461077f578063d53913931461079e578063d547741f146107be578063d547cfb7146107dd578063e985e9c5146107f1578063f2fde38b14610838575f5ffd5b8063a22cb465146106d4578063a4e2d634146106f3578063b88d4fde1461070c578063c23dc68f1461071f578063c87b56dd1461074b578063caa8078f1461076a575f5ffd5b80638da5cb5b1161010f5780638da5cb5b146106335780638f2fc60b1461065057806391d148541461066f57806395d89b411461068e57806399a2557a146106a2578063a217fddf146106c1575f5ffd5b8063715018a61461058c578063753868e3146105a057806375b238fc146105b4578063819d4cc6146105d45780638456cb59146105f35780638462151c14610607575f5ffd5b80632f2ff15d116101f757806342842e0e116101b157806342842e0e146104d957806344004cc1146104ec5780635bbb21771461050b5780635c975abb146105375780636352211e1461054e57806370a082311461056d575f5ffd5b80632f2ff15d1461042a57806330176e131461044957806335bb3e161461046857806336568abe146104875780633f4ba83a146104a657806340c10f19146104ba575f5ffd5b806318160ddd1161024857806318160ddd1461034457806323b872dd1461036d578063248a9ca314610380578063261707fa146103ae5780632a55205a146103cd5780632d3456701461040b575f5ffd5b806301ffc9a71461028457806306fdde03146102b8578063081812fc146102d9578063088a4ed014610310578063095ea7b314610331575b5f5ffd5b34801561028f575f5ffd5b506102a361029e366004612515565b610857565b60405190151581526020015b60405180910390f35b3480156102c3575f5ffd5b506102cc610885565b6040516102af919061255e565b3480156102e4575f5ffd5b506102f86102f3366004612570565b610915565b6040516001600160a01b0390911681526020016102af565b34801561031b575f5ffd5b5061032f61032a366004612570565b61094e565b005b61032f61033f36600461259d565b61096b565b34801561034f575f5ffd5b5061035f6001545f54035f190190565b6040519081526020016102af565b61032f61037b3660046125c5565b61097b565b34801561038b575f5ffd5b5061035f61039a366004612570565b5f908152600a602052604090206001015490565b3480156103b9575f5ffd5b5061032f6103c83660046125ff565b610ad5565b3480156103d8575f5ffd5b506103ec6103e7366004612618565b610af4565b604080516001600160a01b0390931683526020830191909152016102af565b348015610416575f5ffd5b5061032f6104253660046125ff565b610b77565b348015610435575f5ffd5b5061032f610444366004612638565b610b96565b348015610454575f5ffd5b5061032f6104633660046126ed565b610bc0565b348015610473575f5ffd5b5061032f6104823660046125ff565b610c4b565b348015610492575f5ffd5b5061032f6104a1366004612638565b610c6a565b3480156104b1575f5ffd5b5061032f610cf4565b3480156104c5575f5ffd5b5061032f6104d436600461259d565b610d16565b61032f6104e73660046125c5565b610ef3565b3480156104f7575f5ffd5b5061032f6105063660046125c5565b610f0d565b348015610516575f5ffd5b5061052a610525366004612732565b611141565b6040516102af91906127e0565b348015610542575f5ffd5b50600e5460ff166102a3565b348015610559575f5ffd5b506102f8610568366004612570565b61118c565b348015610578575f5ffd5b5061035f6105873660046125ff565b611196565b348015610597575f5ffd5b5061032f6111da565b3480156105ab575f5ffd5b5061032f6111ed565b3480156105bf575f5ffd5b5061035f5f516020612c6b5f395f51905f5281565b3480156105df575f5ffd5b5061032f6105ee36600461259d565b6112a3565b3480156105fe575f5ffd5b5061032f6113e0565b348015610612575f5ffd5b506106266106213660046125ff565b6113ff565b6040516102af919061282d565b34801561063e575f5ffd5b506009546001600160a01b03166102f8565b34801561065b575f5ffd5b5061032f61066a366004612864565b611425565b34801561067a575f5ffd5b506102a3610689366004612638565b611586565b348015610699575f5ffd5b506102cc6115b0565b3480156106ad575f5ffd5b506106266106bc3660046128a4565b6115bf565b3480156106cc575f5ffd5b5061035f5f81565b3480156106df575f5ffd5b5061032f6106ee3660046128d4565b6115cc565b3480156106fe575f5ffd5b506010546102a39060ff1681565b61032f61071a366004612902565b611637565b34801561072a575f5ffd5b5061073e610739366004612570565b611672565b6040516102af9190612979565b348015610756575f5ffd5b506102cc610765366004612570565b6116d2565b348015610775575f5ffd5b5061035f600f5481565b34801561078a575f5ffd5b5061032f6107993660046125ff565b611811565b3480156107a9575f5ffd5b5061035f5f516020612c4b5f395f51905f5281565b3480156107c9575f5ffd5b5061032f6107d8366004612638565b611830565b3480156107e8575f5ffd5b506102cc611854565b3480156107fc575f5ffd5b506102a361080b366004612987565b6001600160a01b039182165f90815260076020908152604080832093909416825291909152205460ff1690565b348015610843575f5ffd5b5061032f6108523660046125ff565b6118e0565b5f6108618261191a565b80610870575061087082611967565b8061087f575061087f82611987565b92915050565b606060028054610894906129af565b80601f01602080910402602001604051908101604052809291908181526020018280546108c0906129af565b801561090b5780601f106108e25761010080835404028352916020019161090b565b820191905f5260205f20905b8154815290600101906020018083116108ee57829003601f168201915b5050505050905090565b5f61091f826119bb565b610933576109336333d1c03960e21b611a03565b505f908152600660205260409020546001600160a01b031690565b5f516020612c6b5f395f51905f5261096581611a0b565b50600f55565b61097782826001611a15565b5050565b5f61098582611ab6565b6001600160a01b0394851694909150811684146109ab576109ab62a1148160e81b611a03565b5f8281526006602052604090208054338082146001600160a01b038816909114176109ee576109da863361080b565b6109ee576109ee632ce44b5f60e11b611a03565b80156109f8575f82555b6001600160a01b038681165f9081526005602052604080822080545f19019055918716808252919020805460010190554260a01b17600160e11b175f85815260046020526040812091909155600160e11b84169003610a8457600184015f818152600460205260408120549003610a82575f548114610a82575f8181526004602052604090208490555b505b6001600160a01b0385168481887fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f80a4805f03610acc57610acc633a954ecd60e21b611a03565b50505050505050565b610add611b4f565b6109775f516020612c4b5f395f51905f5282611b7c565b5f828152600c6020526040812080548291906001600160a01b03811690600160a01b90046001600160601b031681610b47575050600b546001600160a01b03811690600160a01b90046001600160601b03165b5f612710610b5e6001600160601b038416896129fb565b610b689190612a12565b92989297509195505050505050565b610b7f611b4f565b6109775f516020612c6b5f395f51905f5282611c0d565b5f828152600a6020526040902060010154610bb081611a0b565b610bba8383611b7c565b50505050565b5f516020612c6b5f395f51905f52610bd781611a0b565b60105460ff1615610c035760405162461bcd60e51b8152600401610bfa90612a31565b60405180910390fd5b6011610c0f8382612ab8565b507fe6e4cd5c2dc7d2c20519b41832cd550fd3ea1186bf299d108179bf71fb8e00e582604051610c3f919061255e565b60405180910390a15050565b610c53611b4f565b6109775f516020612c6b5f395f51905f5282611b7c565b8115801590610c8657505f516020612c6b5f395f51905f528214155b610cea5760405162461bcd60e51b815260206004820152602f60248201527f5072696d6543726561746f724e46543a2063616e6e6f742072656e6f756e636560448201526e20637269746963616c20726f6c657360881b6064820152608401610bfa565b6109778282611c78565b5f516020612c6b5f395f51905f52610d0b81611a0b565b610d13611cab565b50565b5f516020612c4b5f395f51905f52610d2d81611a0b565b610d35611cfd565b6001600160a01b038316610d965760405162461bcd60e51b815260206004820152602260248201527f5072696d6543726561746f724e46543a20496e76616c696420726563697069656044820152611b9d60f21b6064820152608401610bfa565b5f8211610e015760405162461bcd60e51b815260206004820152603360248201527f5072696d6543726561746f724e46543a205175616e74697479206d7573742062604482015272652067726561746572207468616e207a65726f60681b6064820152608401610bfa565b600f54821115610e795760405162461bcd60e51b815260206004820152603c60248201527f5072696d6543726561746f724e46543a205175616e74697479206d757374206260448201527f6520736d616c6c6572207468616e206d61784d696e7450657254786e000000006064820152608401610bfa565b61012c82610e8c6001545f54035f190190565b610e969190612b73565b1115610ee45760405162461bcd60e51b815260206004820152601c60248201527f5175616e74697479206578636565647320746f74616c537570706c79000000006044820152606401610bfa565b610eee8383611d43565b505050565b610eee83838360405180602001604052805f815250611637565b5f516020612c6b5f395f51905f52610f2481611a0b565b610f2c611d5c565b610f34611cfd565b6001600160a01b038416610f825760405162461bcd60e51b8152602060048201526015602482015274496e76616c696420746f6b656e206164647265737360581b6044820152606401610bfa565b6001600160a01b038316610fcc5760405162461bcd60e51b8152602060048201526011602482015270125b9d985b1a59081c9958da5c1a595b9d607a1b6044820152606401610bfa565b5f821161101b5760405162461bcd60e51b815260206004820181905260248201527f416d6f756e74206d7573742062652067726561746572207468616e207a65726f6044820152606401610bfa565b6040516370a0823160e01b81523060048201525f906001600160a01b038616906370a0823190602401602060405180830381865afa15801561105f573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906110839190612b86565b9050828110156110d55760405162461bcd60e51b815260206004820152601d60248201527f496e73756666696369656e7420636f6e74726163742062616c616e63650000006044820152606401610bfa565b6110e96001600160a01b0386168585611db5565b836001600160a01b0316856001600160a01b03167fbfed55bdcd242e3dd0f60ddd7d1e87c67f61c34cd9527b3e6455d841b10253628560405161112e91815260200190565b60405180910390a350610bba6001600d55565b60408051828152600583901b8082016020019092526060915b801561118457601f1980820191860101355f61117582611672565b848401602001525061115a9050565b509392505050565b5f61087f82611ab6565b5f6001600160a01b0382166111b5576111b56323d3ad8160e21b611a03565b506001600160a01b03165f9081526005602052604090205467ffffffffffffffff1690565b6111e2611b4f565b6111eb5f611e07565b565b5f516020612c6b5f395f51905f5261120481611a0b565b60105460ff161561126b5760405162461bcd60e51b815260206004820152602b60248201527f5072696d6543726561746f724e46543a20436f6e747261637420697320616c7260448201526a1958591e481b1bd8dad95960aa1b6064820152608401610bfa565b6010805460ff191660011790556040517f6f5ffb7e2a6656882126927a79e460ca27ab657927d593522b90dc28229f7dbc905f90a150565b5f516020612c6b5f395f51905f526112ba81611a0b565b6112c2611d5c565b6112ca611cfd565b306001600160a01b038416036113355760405162461bcd60e51b815260206004820152602a60248201527f5072696d6543726561746f724e46543a2043616e6e6f74207265636f766572206044820152696f776e20746f6b656e7360b01b6064820152608401610bfa565b604051632142170760e11b8152306004820152336024820152604481018390526001600160a01b038416906342842e0e906064015f604051808303815f87803b158015611380575f5ffd5b505af1158015611392573d5f5f3e3d5ffd5b50506040518481526001600160a01b03861692503391507f6a30e6784464f0d1f4158aa4cb65ae9239b0fa87c7f2c083ee6dde44ba97b5e69060200160405180910390a3610eee6001600d55565b5f516020612c6b5f395f51905f526113f781611a0b565b610d13611e58565b5f546060906001908282821461141d5761141a858484611e95565b90505b949350505050565b5f516020612c6b5f395f51905f5261143c81611a0b565b60105460ff161561145f5760405162461bcd60e51b8152600401610bfa90612a31565b6127106001600160601b03831611156114c85760405162461bcd60e51b815260206004820152602560248201527f5072696d6543726561746f724e46543a20526f79616c74792066656520746f6f604482015264040d0d2ced60db1b6064820152608401610bfa565b6001600160a01b0383166115305760405162461bcd60e51b815260206004820152602960248201527f5072696d6543726561746f724e46543a20496e76616c696420726f79616c7479604482015268103932b1b2b4bb32b960b91b6064820152608401610bfa565b61153a8383611f94565b6040516001600160601b03831681526001600160a01b038416907f8039bd6e4e7dba001c8840eb2e118d9d131246faa7d0d04335f7305127ec0b109060200160405180910390a2505050565b5f918252600a602090815260408084206001600160a01b0393909316845291905290205460ff1690565b606060038054610894906129af565b606061141d848484611e95565b335f8181526007602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b61164284848461097b565b6001600160a01b0383163b15610bba5761165e84848484612036565b610bba57610bba6368d2bf6b60e11b611a03565b604080516080810182525f808252602082018190529181018290526060810191909152600182106116cd575f548210156116cd575b5f828152600460205260409020546116c4575f19909101906116a7565b61087f82612114565b919050565b60606116dd826119bb565b6117375760405162461bcd60e51b815260206004820152602560248201527f5072696d6543726561746f724e46543a20546f6b656e20646f6573206e6f7420604482015264195e1a5cdd60da1b6064820152608401610bfa565b5f60118054611745906129af565b80601f0160208091040260200160405190810160405280929190818152602001828054611771906129af565b80156117bc5780601f10611793576101008083540402835291602001916117bc565b820191905f5260205f20905b81548152906001019060200180831161179f57829003601f168201915b505050505090505f8151116117df5760405180602001604052805f81525061180a565b806117e984612191565b6040516020016117fa929190612bb4565b6040516020818303038152906040525b9392505050565b611819611b4f565b6109775f516020612c4b5f395f51905f5282611c0d565b5f828152600a602052604090206001015461184a81611a0b565b610bba8383611c0d565b60118054611861906129af565b80601f016020809104026020016040519081016040528092919081815260200182805461188d906129af565b80156118d85780601f106118af576101008083540402835291602001916118d8565b820191905f5260205f20905b8154815290600101906020018083116118bb57829003601f168201915b505050505081565b6118e8611b4f565b6001600160a01b03811661191157604051631e4fbdf760e01b81525f6004820152602401610bfa565b610d1381611e07565b5f6301ffc9a760e01b6001600160e01b03198316148061194a57506380ac58cd60e01b6001600160e01b03198316145b8061087f5750506001600160e01b031916635b5e139f60e01b1490565b5f6001600160e01b0319821663152a902d60e11b148061087f575061087f825b5f6001600160e01b03198216637965db0b60e01b148061087f57506301ffc9a760e01b6001600160e01b031983161461087f565b5f816001116116cd575f548210156116cd575f5b505f82815260046020526040812054908190036119f6576119ef83612bde565b92506119cf565b600160e01b161592915050565b805f5260045ffd5b610d138133612221565b5f611a1f8361118c565b9050818015611a375750336001600160a01b03821614155b15611a5a57611a46813361080b565b611a5a57611a5a6367d9dca160e11b611a03565b5f8381526006602052604080822080546001600160a01b0319166001600160a01b0388811691821790925591518693918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a450505050565b5f81600111611b3f57505f81815260046020526040902054805f03611b2d575f548210611aed57611aed636f96cda160e11b611a03565b5b505f19015f818152600460205260409020548015611aee57600160e01b81165f03611b1857919050565b611b28636f96cda160e11b611a03565b611aee565b600160e01b81165f03611b3f57919050565b6116cd636f96cda160e11b611a03565b6009546001600160a01b031633146111eb5760405163118cdaa760e01b8152336004820152602401610bfa565b5f611b878383611586565b611c06575f838152600a602090815260408083206001600160a01b03861684529091529020805460ff19166001179055611bbe3390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a450600161087f565b505f61087f565b5f611c188383611586565b15611c06575f838152600a602090815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a450600161087f565b6001600160a01b0381163314611ca15760405163334bd91960e11b815260040160405180910390fd5b610eee8282611c0d565b611cb361225a565b600e805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b600e5460ff16156111eb5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610bfa565b610977828260405180602001604052805f8152506122a3565b6002600d5403611dae5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610bfa565b6002600d55565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610eee908490612303565b600980546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b611e60611cfd565b600e805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258611ce03390565b6060818310611eae57611eae631960ccad60e11b611a03565b6001831015611ebc57600192505b5f5480808410611eca578093505b5f611ed487611196565b9050848610611ee057505f5b8015611f8a578086860311611ef457508484035b604080516001830160051b81019182905294505f611f1188611672565b90505f8160400151611f21575080515b5f5b611f2c8a612114565b925060408301515f8114611f42575f9250611f67565b835115611f4e57835192505b8b831860601b611f67576001820191508a8260051b8a01525b5060018a01995083604052888a1480611f7f57508481145b15611f235787525050505b5050509392505050565b6127106001600160601b038216811015611fd357604051636f483d0960e01b81526001600160601b038316600482015260248101829052604401610bfa565b6001600160a01b038316611ffc57604051635b6cc80560e11b81525f6004820152602401610bfa565b50604080518082019091526001600160a01b039092168083526001600160601b039091166020909201829052600160a01b90910217600b55565b604051630a85bd0160e11b81525f906001600160a01b0385169063150b7a029061206a903390899088908890600401612bf3565b6020604051808303815f875af19250505080156120a4575060408051601f3d908101601f191682019092526120a191810190612c2f565b60015b6120f7573d8080156120d1576040519150601f19603f3d011682016040523d82523d5f602084013e6120d6565b606091505b5080515f036120ef576120ef6368d2bf6b60e11b611a03565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050949350505050565b604080516080810182525f8082526020820181905291810182905260608101919091525f8281526004602052604090205461087f90604080516080810182526001600160a01b038316815260a083901c67ffffffffffffffff166020820152600160e01b831615159181019190915260e89190911c606082015290565b60605f61219d8361236f565b60010190505f8167ffffffffffffffff8111156121bc576121bc612662565b6040519080825280601f01601f1916602001820160405280156121e6576020820181803683370190505b5090508181016020015b5f19016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a85049450846121f057509392505050565b61222b8282611586565b6109775760405163e2517d3f60e01b81526001600160a01b038216600482015260248101839052604401610bfa565b600e5460ff166111eb5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610bfa565b6122ad8383612446565b6001600160a01b0383163b15610eee575f548281035b6122d55f868380600101945086612036565b6122e9576122e96368d2bf6b60e11b611a03565b8181106122c357815f54146122fc575f5ffd5b5050505050565b5f5f60205f8451602086015f885af180612322576040513d5f823e3d81fd5b50505f513d91508115612339578060011415612346565b6001600160a01b0384163b155b15610bba57604051635274afe760e01b81526001600160a01b0385166004820152602401610bfa565b5f8072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b83106123ad5772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef810000000083106123d9576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106123f757662386f26fc10000830492506010015b6305f5e100831061240f576305f5e100830492506008015b612710831061242357612710830492506004015b60648310612435576064830492506002015b600a831061087f5760010192915050565b5f8054908290036124615761246163b562e8dd60e01b611a03565b5f8181526004602090815260408083206001600160a01b0387164260a01b6001881460e11b178117909155808452600590925282208054680100000000000000018602019055908190036124be576124be622e076360e81b611a03565b818301825b80835f7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f5fa48181600101915081036124c357505f5550505050565b6001600160e01b031981168114610d13575f5ffd5b5f60208284031215612525575f5ffd5b813561180a81612500565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f61180a6020830184612530565b5f60208284031215612580575f5ffd5b5035919050565b80356001600160a01b03811681146116cd575f5ffd5b5f5f604083850312156125ae575f5ffd5b6125b783612587565b946020939093013593505050565b5f5f5f606084860312156125d7575f5ffd5b6125e084612587565b92506125ee60208501612587565b929592945050506040919091013590565b5f6020828403121561260f575f5ffd5b61180a82612587565b5f5f60408385031215612629575f5ffd5b50508035926020909101359150565b5f5f60408385031215612649575f5ffd5b8235915061265960208401612587565b90509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f5f67ffffffffffffffff84111561269057612690612662565b50604051601f19601f85018116603f0116810181811067ffffffffffffffff821117156126bf576126bf612662565b6040528381529050808284018510156126d6575f5ffd5b838360208301375f60208583010152509392505050565b5f602082840312156126fd575f5ffd5b813567ffffffffffffffff811115612713575f5ffd5b8201601f81018413612723575f5ffd5b61141d84823560208401612676565b5f5f60208385031215612743575f5ffd5b823567ffffffffffffffff811115612759575f5ffd5b8301601f81018513612769575f5ffd5b803567ffffffffffffffff81111561277f575f5ffd5b8560208260051b8401011115612793575f5ffd5b6020919091019590945092505050565b80516001600160a01b0316825260208082015167ffffffffffffffff169083015260408082015115159083015260609081015162ffffff16910152565b602080825282518282018190525f918401906040840190835b818110156128225761280c8385516127a3565b60209390930192608092909201916001016127f9565b509095945050505050565b602080825282518282018190525f918401906040840190835b81811015612822578351835260209384019390920191600101612846565b5f5f60408385031215612875575f5ffd5b61287e83612587565b915060208301356001600160601b0381168114612899575f5ffd5b809150509250929050565b5f5f5f606084860312156128b6575f5ffd5b6128bf84612587565b95602085013595506040909401359392505050565b5f5f604083850312156128e5575f5ffd5b6128ee83612587565b915060208301358015158114612899575f5ffd5b5f5f5f5f60808587031215612915575f5ffd5b61291e85612587565b935061292c60208601612587565b925060408501359150606085013567ffffffffffffffff81111561294e575f5ffd5b8501601f8101871361295e575f5ffd5b61296d87823560208401612676565b91505092959194509250565b6080810161087f82846127a3565b5f5f60408385031215612998575f5ffd5b6129a183612587565b915061265960208401612587565b600181811c908216806129c357607f821691505b6020821081036129e157634e487b7160e01b5f52602260045260245ffd5b50919050565b634e487b7160e01b5f52601160045260245ffd5b808202811582820484141761087f5761087f6129e7565b5f82612a2c57634e487b7160e01b5f52601260045260245ffd5b500490565b60208082526023908201527f5072696d6543726561746f724e46543a20436f6e7472616374206973206c6f636040820152621ad95960ea1b606082015260800190565b601f821115610eee57805f5260205f20601f840160051c81016020851015612a995750805b601f840160051c820191505b818110156122fc575f8155600101612aa5565b815167ffffffffffffffff811115612ad257612ad2612662565b612ae681612ae084546129af565b84612a74565b6020601f821160018114612b18575f8315612b015750848201515b5f19600385901b1c1916600184901b1784556122fc565b5f84815260208120601f198516915b82811015612b475787850151825560209485019460019092019101612b27565b5084821015612b6457868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b8082018082111561087f5761087f6129e7565b5f60208284031215612b96575f5ffd5b5051919050565b5f81518060208401855e5f93019283525090919050565b5f612bc8612bc28386612b9d565b84612b9d565b64173539b7b760d91b8152600501949350505050565b5f81612bec57612bec6129e7565b505f190190565b6001600160a01b03858116825284166020820152604081018390526080606082018190525f90612c2590830184612530565b9695505050505050565b5f60208284031215612c3f575f5ffd5b815161180a8161250056fe9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6a49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775a2646970667358221220ac25c58e9372cd9ac123062c5b15ad83e2f4a73507ca39479b2a1dfb3eb2a0aa64736f6c634300081e0033697066733a2f2f62616679626569657632686c35676a34737264786e717978766b7734766c6c7a3564796b63766d326a6b766f657771713632627270696278767a712f' as const;