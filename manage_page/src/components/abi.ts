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
				"name": "targetAddress",
				"type": "address"
			}
		],
		"name": "AdminGranted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "targetAddress",
				"type": "address"
			}
		],
		"name": "AdminRevoked",
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
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "ContractPaused",
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
		"name": "ContractUnpaused",
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
				"indexed": false,
				"internalType": "uint256",
				"name": "newLimit",
				"type": "uint256"
			}
		],
		"name": "MaxMintPerTxnSet",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "targetAddress",
				"type": "address"
			}
		],
		"name": "MinterGranted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "targetAddress",
				"type": "address"
			}
		],
		"name": "MinterRevoked",
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
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "quantity",
				"type": "uint256"
			}
		],
		"name": "TokensMinted",
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

export const wagmiByteCode = '0x61012c600f5561010060405260436080818152906132d560a039601190610026908261039b565b50348015610032575f5ffd5b50336040518060400160405280601481526020017f4c6f7665526f73652047656e6573697320476f64000000000000000000000000815250604051806040016040528060048152602001634c52474760e01b8152508160029081610096919061039b565b5060036100a3828261039b565b5060015f5550506001600160a01b0381166100d857604051631e4fbdf760e01b81525f60048201526024015b60405180910390fd5b6100e181610163565b506001600d55600e805460ff191690556100fd336101f46101b4565b6101075f33610256565b506101327fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177533610256565b5061015d7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633610256565b50610455565b600980546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b6127106001600160601b0382168110156101f357604051636f483d0960e01b81526001600160601b0383166004820152602481018290526044016100cf565b6001600160a01b03831661021c57604051635b6cc80560e11b81525f60048201526024016100cf565b50604080518082019091526001600160a01b039092168083526001600160601b039091166020909201829052600160a01b90910217600b55565b5f828152600a602090815260408083206001600160a01b038516845290915281205460ff166102fa575f838152600a602090815260408083206001600160a01b03861684529091529020805460ff191660011790556102b23390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016102fd565b505f5b92915050565b634e487b7160e01b5f52604160045260245ffd5b600181811c9082168061032b57607f821691505b60208210810361034957634e487b7160e01b5f52602260045260245ffd5b50919050565b601f82111561039657805f5260205f20601f840160051c810160208510156103745750805b601f840160051c820191505b81811015610393575f8155600101610380565b50505b505050565b81516001600160401b038111156103b4576103b4610303565b6103c8816103c28454610317565b8461034f565b6020601f8211600181146103fa575f83156103e35750848201515b5f19600385901b1c1916600184901b178455610393565b5f84815260208120601f198516915b828110156104295787850151825560209485019460019092019101610409565b508482101561044657868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b612e73806104625f395ff3fe608060405260043610610280575f3560e01c8063715018a611610155578063a22cb465116100be578063cfbd488511610078578063cfbd48851461077f578063d53913931461079e578063d547741f146107be578063d547cfb7146107dd578063e985e9c5146107f1578063f2fde38b14610838575f5ffd5b8063a22cb465146106d4578063a4e2d634146106f3578063b88d4fde1461070c578063c23dc68f1461071f578063c87b56dd1461074b578063caa8078f1461076a575f5ffd5b80638da5cb5b1161010f5780638da5cb5b146106335780638f2fc60b1461065057806391d148541461066f57806395d89b411461068e57806399a2557a146106a2578063a217fddf146106c1575f5ffd5b8063715018a61461058c578063753868e3146105a057806375b238fc146105b4578063819d4cc6146105d45780638456cb59146105f35780638462151c14610607575f5ffd5b80632f2ff15d116101f757806342842e0e116101b157806342842e0e146104d957806344004cc1146104ec5780635bbb21771461050b5780635c975abb146105375780636352211e1461054e57806370a082311461056d575f5ffd5b80632f2ff15d1461042a57806330176e131461044957806335bb3e161461046857806336568abe146104875780633f4ba83a146104a657806340c10f19146104ba575f5ffd5b806318160ddd1161024857806318160ddd1461034457806323b872dd1461036d578063248a9ca314610380578063261707fa146103ae5780632a55205a146103cd5780632d3456701461040b575f5ffd5b806301ffc9a71461028457806306fdde03146102b8578063081812fc146102d9578063088a4ed014610310578063095ea7b314610331575b5f5ffd5b34801561028f575f5ffd5b506102a361029e3660046126c8565b610857565b60405190151581526020015b60405180910390f35b3480156102c3575f5ffd5b506102cc610885565b6040516102af9190612711565b3480156102e4575f5ffd5b506102f86102f3366004612723565b610915565b6040516001600160a01b0390911681526020016102af565b34801561031b575f5ffd5b5061032f61032a366004612723565b61094e565b005b61032f61033f366004612750565b6109a2565b34801561034f575f5ffd5b5061035f6001545f54035f190190565b6040519081526020016102af565b61032f61037b366004612778565b6109b2565b34801561038b575f5ffd5b5061035f61039a366004612723565b5f908152600a602052604090206001015490565b3480156103b9575f5ffd5b5061032f6103c83660046127b2565b610b0c565b3480156103d8575f5ffd5b506103ec6103e73660046127cb565b610b62565b604080516001600160a01b0390931683526020830191909152016102af565b348015610416575f5ffd5b5061032f6104253660046127b2565b610be5565b348015610435575f5ffd5b5061032f6104443660046127eb565b610c3b565b348015610454575f5ffd5b5061032f6104633660046128a0565b610c65565b348015610473575f5ffd5b5061032f6104823660046127b2565b610ce4565b348015610492575f5ffd5b5061032f6104a13660046127eb565b610d3a565b3480156104b1575f5ffd5b5061032f610dc4565b3480156104c5575f5ffd5b5061032f6104d4366004612750565b610e1a565b61032f6104e7366004612778565b611037565b3480156104f7575f5ffd5b5061032f610506366004612778565b611056565b348015610516575f5ffd5b5061052a6105253660046128e5565b61128a565b6040516102af9190612993565b348015610542575f5ffd5b50600e5460ff166102a3565b348015610559575f5ffd5b506102f8610568366004612723565b6112d5565b348015610578575f5ffd5b5061035f6105873660046127b2565b6112df565b348015610597575f5ffd5b5061032f611323565b3480156105ab575f5ffd5b5061032f611336565b3480156105bf575f5ffd5b5061035f5f516020612e1e5f395f51905f5281565b3480156105df575f5ffd5b5061032f6105ee366004612750565b6113ec565b3480156105fe575f5ffd5b5061032f611529565b348015610612575f5ffd5b506106266106213660046127b2565b611578565b6040516102af91906129e0565b34801561063e575f5ffd5b506009546001600160a01b03166102f8565b34801561065b575f5ffd5b5061032f61066a366004612a17565b61159e565b34801561067a575f5ffd5b506102a36106893660046127eb565b6116ff565b348015610699575f5ffd5b506102cc611729565b3480156106ad575f5ffd5b506106266106bc366004612a57565b611738565b3480156106cc575f5ffd5b5061035f5f81565b3480156106df575f5ffd5b5061032f6106ee366004612a87565b611745565b3480156106fe575f5ffd5b506010546102a39060ff1681565b61032f61071a366004612ab5565b6117b0565b34801561072a575f5ffd5b5061073e610739366004612723565b6117eb565b6040516102af9190612b2c565b348015610756575f5ffd5b506102cc610765366004612723565b61184b565b348015610775575f5ffd5b5061035f600f5481565b34801561078a575f5ffd5b5061032f6107993660046127b2565b61198a565b3480156107a9575f5ffd5b5061035f5f516020612dfe5f395f51905f5281565b3480156107c9575f5ffd5b5061032f6107d83660046127eb565b6119e0565b3480156107e8575f5ffd5b506102cc611a04565b3480156107fc575f5ffd5b506102a361080b366004612b3a565b6001600160a01b039182165f90815260076020908152604080832093909416825291909152205460ff1690565b348015610843575f5ffd5b5061032f6108523660046127b2565b611a90565b5f61086182611acd565b80610870575061087082611b1a565b8061087f575061087f82611b3a565b92915050565b60606002805461089490612b62565b80601f01602080910402602001604051908101604052809291908181526020018280546108c090612b62565b801561090b5780601f106108e25761010080835404028352916020019161090b565b820191905f5260205f20905b8154815290600101906020018083116108ee57829003601f168201915b5050505050905090565b5f61091f82611b6e565b610933576109336333d1c03960e21b611bb6565b505f908152600660205260409020546001600160a01b031690565b5f516020612e1e5f395f51905f5261096581611bbe565b600f8290556040518281527fdcb08c392824172c990d3b36066bc883db72d562c43867214fe6028c28e13f77906020015b60405180910390a15050565b6109ae82826001611bc8565b5050565b5f6109bc82611c69565b6001600160a01b0394851694909150811684146109e2576109e262a1148160e81b611bb6565b5f8281526006602052604090208054338082146001600160a01b03881690911417610a2557610a11863361080b565b610a2557610a25632ce44b5f60e11b611bb6565b8015610a2f575f82555b6001600160a01b038681165f9081526005602052604080822080545f19019055918716808252919020805460010190554260a01b17600160e11b175f85815260046020526040812091909155600160e11b84169003610abb57600184015f818152600460205260408120549003610ab9575f548114610ab9575f8181526004602052604090208490555b505b6001600160a01b0385168481887fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f80a4805f03610b0357610b03633a954ecd60e21b611bb6565b50505050505050565b610b14611d02565b610b2b5f516020612dfe5f395f51905f5282611d2f565b506040516001600160a01b038216907f93e15a6550ecfc8e6edd98132363907de724eed6c5d89ce96917f4d4ff4da1f3905f90a250565b5f828152600c6020526040812080548291906001600160a01b03811690600160a01b90046001600160601b031681610bb5575050600b546001600160a01b03811690600160a01b90046001600160601b03165b5f612710610bcc6001600160601b03841689612bae565b610bd69190612bc5565b92989297509195505050505050565b610bed611d02565b610c045f516020612e1e5f395f51905f5282611dc0565b506040516001600160a01b038216907f631ff1c4e1a02c54b480a34b810e03bcee61fe38efcb243930a7f820914923e2905f90a250565b5f828152600a6020526040902060010154610c5581611bbe565b610c5f8383611d2f565b50505050565b5f516020612e1e5f395f51905f52610c7c81611bbe565b60105460ff1615610ca85760405162461bcd60e51b8152600401610c9f90612be4565b60405180910390fd5b6011610cb48382612c6b565b507fe6e4cd5c2dc7d2c20519b41832cd550fd3ea1186bf299d108179bf71fb8e00e5826040516109969190612711565b610cec611d02565b610d035f516020612e1e5f395f51905f5282611d2f565b506040516001600160a01b038216907f1c4e23de8d72c94b22992bd4d7b6786b215ba876af214ff63e6a0ca38fc97af4905f90a250565b8115801590610d5657505f516020612e1e5f395f51905f528214155b610dba5760405162461bcd60e51b815260206004820152602f60248201527f5072696d6543726561746f724e46543a2063616e6e6f742072656e6f756e636560448201526e20637269746963616c20726f6c657360881b6064820152608401610c9f565b6109ae8282611e2b565b5f516020612e1e5f395f51905f52610ddb81611bbe565b610de3611e5e565b6040513381527f5b65b0c1363b3003db9bcc5e1fd8805a6d6bf5bf6dc9d3431ee4494cd7d11766906020015b60405180910390a150565b5f516020612dfe5f395f51905f52610e3181611bbe565b610e39611eb0565b6001600160a01b038316610e9a5760405162461bcd60e51b815260206004820152602260248201527f5072696d6543726561746f724e46543a20496e76616c696420726563697069656044820152611b9d60f21b6064820152608401610c9f565b5f8211610f055760405162461bcd60e51b815260206004820152603360248201527f5072696d6543726561746f724e46543a205175616e74697479206d7573742062604482015272652067726561746572207468616e207a65726f60681b6064820152608401610c9f565b600f54821115610f7d5760405162461bcd60e51b815260206004820152603c60248201527f5072696d6543726561746f724e46543a205175616e74697479206d757374206260448201527f6520736d616c6c6572207468616e206d61784d696e7450657254786e000000006064820152608401610c9f565b61012c82610f906001545f54035f190190565b610f9a9190612d26565b1115610fe85760405162461bcd60e51b815260206004820152601c60248201527f5175616e74697479206578636565647320746f74616c537570706c79000000006044820152606401610c9f565b610ff28383611ef6565b6040518281526001600160a01b0384169033907fbf67ec129007be07f346d9d2933215293a6612ce7ff17d6b479a5a5cae72890c9060200160405180910390a3505050565b61105183838360405180602001604052805f8152506117b0565b505050565b5f516020612e1e5f395f51905f5261106d81611bbe565b611075611f0f565b61107d611eb0565b6001600160a01b0384166110cb5760405162461bcd60e51b8152602060048201526015602482015274496e76616c696420746f6b656e206164647265737360581b6044820152606401610c9f565b6001600160a01b0383166111155760405162461bcd60e51b8152602060048201526011602482015270125b9d985b1a59081c9958da5c1a595b9d607a1b6044820152606401610c9f565b5f82116111645760405162461bcd60e51b815260206004820181905260248201527f416d6f756e74206d7573742062652067726561746572207468616e207a65726f6044820152606401610c9f565b6040516370a0823160e01b81523060048201525f906001600160a01b038616906370a0823190602401602060405180830381865afa1580156111a8573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906111cc9190612d39565b90508281101561121e5760405162461bcd60e51b815260206004820152601d60248201527f496e73756666696369656e7420636f6e74726163742062616c616e63650000006044820152606401610c9f565b6112326001600160a01b0386168585611f68565b836001600160a01b0316856001600160a01b03167fbfed55bdcd242e3dd0f60ddd7d1e87c67f61c34cd9527b3e6455d841b10253628560405161127791815260200190565b60405180910390a350610c5f6001600d55565b60408051828152600583901b8082016020019092526060915b80156112cd57601f1980820191860101355f6112be826117eb565b84840160200152506112a39050565b509392505050565b5f61087f82611c69565b5f6001600160a01b0382166112fe576112fe6323d3ad8160e21b611bb6565b506001600160a01b03165f9081526005602052604090205467ffffffffffffffff1690565b61132b611d02565b6113345f611fba565b565b5f516020612e1e5f395f51905f5261134d81611bbe565b60105460ff16156113b45760405162461bcd60e51b815260206004820152602b60248201527f5072696d6543726561746f724e46543a20436f6e747261637420697320616c7260448201526a1958591e481b1bd8dad95960aa1b6064820152608401610c9f565b6010805460ff191660011790556040517f6f5ffb7e2a6656882126927a79e460ca27ab657927d593522b90dc28229f7dbc905f90a150565b5f516020612e1e5f395f51905f5261140381611bbe565b61140b611f0f565b611413611eb0565b306001600160a01b0384160361147e5760405162461bcd60e51b815260206004820152602a60248201527f5072696d6543726561746f724e46543a2043616e6e6f74207265636f766572206044820152696f776e20746f6b656e7360b01b6064820152608401610c9f565b604051632142170760e11b8152306004820152336024820152604481018390526001600160a01b038416906342842e0e906064015f604051808303815f87803b1580156114c9575f5ffd5b505af11580156114db573d5f5f3e3d5ffd5b50506040518481526001600160a01b03861692503391507f6a30e6784464f0d1f4158aa4cb65ae9239b0fa87c7f2c083ee6dde44ba97b5e69060200160405180910390a36110516001600d55565b5f516020612e1e5f395f51905f5261154081611bbe565b61154861200b565b6040513381527f81990fd9a5c552b8e3677917d8a03c07678f0d2cb68f88b634aca2022e9bd19f90602001610e0f565b5f546060906001908282821461159657611593858484612048565b90505b949350505050565b5f516020612e1e5f395f51905f526115b581611bbe565b60105460ff16156115d85760405162461bcd60e51b8152600401610c9f90612be4565b6127106001600160601b03831611156116415760405162461bcd60e51b815260206004820152602560248201527f5072696d6543726561746f724e46543a20526f79616c74792066656520746f6f604482015264040d0d2ced60db1b6064820152608401610c9f565b6001600160a01b0383166116a95760405162461bcd60e51b815260206004820152602960248201527f5072696d6543726561746f724e46543a20496e76616c696420726f79616c7479604482015268103932b1b2b4bb32b960b91b6064820152608401610c9f565b6116b38383612147565b6040516001600160601b03831681526001600160a01b038416907f8039bd6e4e7dba001c8840eb2e118d9d131246faa7d0d04335f7305127ec0b109060200160405180910390a2505050565b5f918252600a602090815260408084206001600160a01b0393909316845291905290205460ff1690565b60606003805461089490612b62565b6060611596848484612048565b335f8181526007602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6117bb8484846109b2565b6001600160a01b0383163b15610c5f576117d7848484846121e9565b610c5f57610c5f6368d2bf6b60e11b611bb6565b604080516080810182525f80825260208201819052918101829052606081019190915260018210611846575f54821015611846575b5f8281526004602052604090205461183d575f1990910190611820565b61087f826122c7565b919050565b606061185682611b6e565b6118b05760405162461bcd60e51b815260206004820152602560248201527f5072696d6543726561746f724e46543a20546f6b656e20646f6573206e6f7420604482015264195e1a5cdd60da1b6064820152608401610c9f565b5f601180546118be90612b62565b80601f01602080910402602001604051908101604052809291908181526020018280546118ea90612b62565b80156119355780601f1061190c57610100808354040283529160200191611935565b820191905f5260205f20905b81548152906001019060200180831161191857829003601f168201915b505050505090505f8151116119585760405180602001604052805f815250611983565b8061196284612344565b604051602001611973929190612d67565b6040516020818303038152906040525b9392505050565b611992611d02565b6119a95f516020612dfe5f395f51905f5282611dc0565b506040516001600160a01b038216907f44f4322f8daa225d5f4877ad0f7d3dfba248a774396f3ca99405ed40a044fe81905f90a250565b5f828152600a60205260409020600101546119fa81611bbe565b610c5f8383611dc0565b60118054611a1190612b62565b80601f0160208091040260200160405190810160405280929190818152602001828054611a3d90612b62565b8015611a885780601f10611a5f57610100808354040283529160200191611a88565b820191905f5260205f20905b815481529060010190602001808311611a6b57829003601f168201915b505050505081565b611a98611d02565b6001600160a01b038116611ac157604051631e4fbdf760e01b81525f6004820152602401610c9f565b611aca81611fba565b50565b5f6301ffc9a760e01b6001600160e01b031983161480611afd57506380ac58cd60e01b6001600160e01b03198316145b8061087f5750506001600160e01b031916635b5e139f60e01b1490565b5f6001600160e01b0319821663152a902d60e11b148061087f575061087f825b5f6001600160e01b03198216637965db0b60e01b148061087f57506301ffc9a760e01b6001600160e01b031983161461087f565b5f81600111611846575f54821015611846575f5b505f8281526004602052604081205490819003611ba957611ba283612d91565b9250611b82565b600160e01b161592915050565b805f5260045ffd5b611aca81336123d4565b5f611bd2836112d5565b9050818015611bea5750336001600160a01b03821614155b15611c0d57611bf9813361080b565b611c0d57611c0d6367d9dca160e11b611bb6565b5f8381526006602052604080822080546001600160a01b0319166001600160a01b0388811691821790925591518693918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a450505050565b5f81600111611cf257505f81815260046020526040902054805f03611ce0575f548210611ca057611ca0636f96cda160e11b611bb6565b5b505f19015f818152600460205260409020548015611ca157600160e01b81165f03611ccb57919050565b611cdb636f96cda160e11b611bb6565b611ca1565b600160e01b81165f03611cf257919050565b611846636f96cda160e11b611bb6565b6009546001600160a01b031633146113345760405163118cdaa760e01b8152336004820152602401610c9f565b5f611d3a83836116ff565b611db9575f838152600a602090815260408083206001600160a01b03861684529091529020805460ff19166001179055611d713390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a450600161087f565b505f61087f565b5f611dcb83836116ff565b15611db9575f838152600a602090815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a450600161087f565b6001600160a01b0381163314611e545760405163334bd91960e11b815260040160405180910390fd5b6110518282611dc0565b611e6661240d565b600e805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b600e5460ff16156113345760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610c9f565b6109ae828260405180602001604052805f815250612456565b6002600d5403611f615760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610c9f565b6002600d55565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526110519084906124b6565b600980546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b612013611eb0565b600e805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258611e933390565b606081831061206157612061631960ccad60e11b611bb6565b600183101561206f57600192505b5f548080841061207d578093505b5f612087876112df565b905084861061209357505f5b801561213d5780868603116120a757508484035b604080516001830160051b81019182905294505f6120c4886117eb565b90505f81604001516120d4575080515b5f5b6120df8a6122c7565b925060408301515f81146120f5575f925061211a565b83511561210157835192505b8b831860601b61211a576001820191508a8260051b8a01525b5060018a01995083604052888a148061213257508481145b156120d65787525050505b5050509392505050565b6127106001600160601b03821681101561218657604051636f483d0960e01b81526001600160601b038316600482015260248101829052604401610c9f565b6001600160a01b0383166121af57604051635b6cc80560e11b81525f6004820152602401610c9f565b50604080518082019091526001600160a01b039092168083526001600160601b039091166020909201829052600160a01b90910217600b55565b604051630a85bd0160e11b81525f906001600160a01b0385169063150b7a029061221d903390899088908890600401612da6565b6020604051808303815f875af1925050508015612257575060408051601f3d908101601f1916820190925261225491810190612de2565b60015b6122aa573d808015612284576040519150601f19603f3d011682016040523d82523d5f602084013e612289565b606091505b5080515f036122a2576122a26368d2bf6b60e11b611bb6565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050949350505050565b604080516080810182525f8082526020820181905291810182905260608101919091525f8281526004602052604090205461087f90604080516080810182526001600160a01b038316815260a083901c67ffffffffffffffff166020820152600160e01b831615159181019190915260e89190911c606082015290565b60605f61235083612522565b60010190505f8167ffffffffffffffff81111561236f5761236f612815565b6040519080825280601f01601f191660200182016040528015612399576020820181803683370190505b5090508181016020015b5f19016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a85049450846123a357509392505050565b6123de82826116ff565b6109ae5760405163e2517d3f60e01b81526001600160a01b038216600482015260248101839052604401610c9f565b600e5460ff166113345760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610c9f565b61246083836125f9565b6001600160a01b0383163b15611051575f548281035b6124885f8683806001019450866121e9565b61249c5761249c6368d2bf6b60e11b611bb6565b81811061247657815f54146124af575f5ffd5b5050505050565b5f5f60205f8451602086015f885af1806124d5576040513d5f823e3d81fd5b50505f513d915081156124ec5780600114156124f9565b6001600160a01b0384163b155b15610c5f57604051635274afe760e01b81526001600160a01b0385166004820152602401610c9f565b5f8072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b83106125605772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef8100000000831061258c576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106125aa57662386f26fc10000830492506010015b6305f5e10083106125c2576305f5e100830492506008015b61271083106125d657612710830492506004015b606483106125e8576064830492506002015b600a831061087f5760010192915050565b5f8054908290036126145761261463b562e8dd60e01b611bb6565b5f8181526004602090815260408083206001600160a01b0387164260a01b6001881460e11b1781179091558084526005909252822080546801000000000000000186020190559081900361267157612671622e076360e81b611bb6565b818301825b80835f7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f5fa481816001019150810361267657505f5550505050565b6001600160e01b031981168114611aca575f5ffd5b5f602082840312156126d8575f5ffd5b8135611983816126b3565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f61198360208301846126e3565b5f60208284031215612733575f5ffd5b5035919050565b80356001600160a01b0381168114611846575f5ffd5b5f5f60408385031215612761575f5ffd5b61276a8361273a565b946020939093013593505050565b5f5f5f6060848603121561278a575f5ffd5b6127938461273a565b92506127a16020850161273a565b929592945050506040919091013590565b5f602082840312156127c2575f5ffd5b6119838261273a565b5f5f604083850312156127dc575f5ffd5b50508035926020909101359150565b5f5f604083850312156127fc575f5ffd5b8235915061280c6020840161273a565b90509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f5f67ffffffffffffffff84111561284357612843612815565b50604051601f19601f85018116603f0116810181811067ffffffffffffffff8211171561287257612872612815565b604052838152905080828401851015612889575f5ffd5b838360208301375f60208583010152509392505050565b5f602082840312156128b0575f5ffd5b813567ffffffffffffffff8111156128c6575f5ffd5b8201601f810184136128d6575f5ffd5b61159684823560208401612829565b5f5f602083850312156128f6575f5ffd5b823567ffffffffffffffff81111561290c575f5ffd5b8301601f8101851361291c575f5ffd5b803567ffffffffffffffff811115612932575f5ffd5b8560208260051b8401011115612946575f5ffd5b6020919091019590945092505050565b80516001600160a01b0316825260208082015167ffffffffffffffff169083015260408082015115159083015260609081015162ffffff16910152565b602080825282518282018190525f918401906040840190835b818110156129d5576129bf838551612956565b60209390930192608092909201916001016129ac565b509095945050505050565b602080825282518282018190525f918401906040840190835b818110156129d55783518352602093840193909201916001016129f9565b5f5f60408385031215612a28575f5ffd5b612a318361273a565b915060208301356001600160601b0381168114612a4c575f5ffd5b809150509250929050565b5f5f5f60608486031215612a69575f5ffd5b612a728461273a565b95602085013595506040909401359392505050565b5f5f60408385031215612a98575f5ffd5b612aa18361273a565b915060208301358015158114612a4c575f5ffd5b5f5f5f5f60808587031215612ac8575f5ffd5b612ad18561273a565b9350612adf6020860161273a565b925060408501359150606085013567ffffffffffffffff811115612b01575f5ffd5b8501601f81018713612b11575f5ffd5b612b2087823560208401612829565b91505092959194509250565b6080810161087f8284612956565b5f5f60408385031215612b4b575f5ffd5b612b548361273a565b915061280c6020840161273a565b600181811c90821680612b7657607f821691505b602082108103612b9457634e487b7160e01b5f52602260045260245ffd5b50919050565b634e487b7160e01b5f52601160045260245ffd5b808202811582820484141761087f5761087f612b9a565b5f82612bdf57634e487b7160e01b5f52601260045260245ffd5b500490565b60208082526023908201527f5072696d6543726561746f724e46543a20436f6e7472616374206973206c6f636040820152621ad95960ea1b606082015260800190565b601f82111561105157805f5260205f20601f840160051c81016020851015612c4c5750805b601f840160051c820191505b818110156124af575f8155600101612c58565b815167ffffffffffffffff811115612c8557612c85612815565b612c9981612c938454612b62565b84612c27565b6020601f821160018114612ccb575f8315612cb45750848201515b5f19600385901b1c1916600184901b1784556124af565b5f84815260208120601f198516915b82811015612cfa5787850151825560209485019460019092019101612cda565b5084821015612d1757868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b8082018082111561087f5761087f612b9a565b5f60208284031215612d49575f5ffd5b5051919050565b5f81518060208401855e5f93019283525090919050565b5f612d7b612d758386612d50565b84612d50565b64173539b7b760d91b8152600501949350505050565b5f81612d9f57612d9f612b9a565b505f190190565b6001600160a01b03858116825284166020820152604081018390526080606082018190525f90612dd8908301846126e3565b9695505050505050565b5f60208284031215612df2575f5ffd5b8151611983816126b356fe9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6a49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775a26469706673582212203c53d6942566441ed53a63a45cfa0b9ee6acc8221f2599e8cd1c048e6429578464736f6c634300081e0033697066733a2f2f6261667962656967733470347636746337753435697476616a376c666579656635617534646f6e6967776b6b6a797332716a646a6479776c6970752f' as const;