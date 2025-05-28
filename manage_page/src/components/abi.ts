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

export const wagmiByteCode = '0x608060405261012c600f55604051806060016040528060368152602001615eb960369139601190816100319190610888565b5034801561003d575f5ffd5b50336040518060400160405280601681526020017f4c6f7665526f7365205072696d652043726561746f72000000000000000000008152506040518060400160405280600481526020017f4c5250430000000000000000000000000000000000000000000000000000000081525081600290816100ba9190610888565b5080600390816100ca9190610888565b506100d961024660201b60201c565b5f819055506100ec61024660201b60201c565b6100fa61024e60201b60201c565b10156101175761011663fed8210f60e01b61027560201b60201c565b5b50505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610189575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016101809190610996565b60405180910390fd5b6101988161027d60201b60201c565b506001600d819055505f600e5f6101000a81548160ff0219169083151502179055506101cc336101f461034060201b60201c565b6101de5f5f1b336104e160201b60201c565b5061020f7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775336104e160201b60201c565b506102407f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6336104e160201b60201c565b50610a2c565b5f6001905090565b5f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff905090565b805f5260045ffd5b5f60095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160095f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f61034f6105d760201b60201c565b6bffffffffffffffffffffffff16905080826bffffffffffffffffffffffff1611156103b45781816040517f6f483d090000000000000000000000000000000000000000000000000000000081526004016103ab929190610a05565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610424575f6040517fb6d9900a00000000000000000000000000000000000000000000000000000000815260040161041b9190610996565b60405180910390fd5b60405180604001604052808473ffffffffffffffffffffffffffffffffffffffff168152602001836bffffffffffffffffffffffff16815250600b5f820151815f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151815f0160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550905050505050565b5f6104f283836105e060201b60201c565b6105cd576001600a5f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff02191690831515021790555061056a61064460201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4600190506105d1565b5f90505b92915050565b5f612710905090565b5f600a5f8481526020019081526020015f205f015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b5f33905090565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806106c657607f821691505b6020821081036106d9576106d8610682565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f6008830261073b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610700565b6107458683610700565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f61078961078461077f8461075d565b610766565b61075d565b9050919050565b5f819050919050565b6107a28361076f565b6107b66107ae82610790565b84845461070c565b825550505050565b5f5f905090565b6107cd6107be565b6107d8818484610799565b505050565b5b818110156107fb576107f05f826107c5565b6001810190506107de565b5050565b601f82111561084057610811816106df565b61081a846106f1565b81016020851015610829578190505b61083d610835856106f1565b8301826107dd565b50505b505050565b5f82821c905092915050565b5f6108605f1984600802610845565b1980831691505092915050565b5f6108788383610851565b9150826002028217905092915050565b6108918261064b565b67ffffffffffffffff8111156108aa576108a9610655565b5b6108b482546106af565b6108bf8282856107ff565b5f60209050601f8311600181146108f0575f84156108de578287015190505b6108e8858261086d565b86555061094f565b601f1984166108fe866106df565b5f5b8281101561092557848901518255600182019150602085019450602081019050610900565b86831015610942578489015161093e601f891682610851565b8355505b6001600288020188555050505b505050505050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61098082610957565b9050919050565b61099081610976565b82525050565b5f6020820190506109a95f830184610987565b92915050565b5f6bffffffffffffffffffffffff82169050919050565b5f6109e06109db6109d6846109af565b610766565b61075d565b9050919050565b6109f0816109c6565b82525050565b6109ff8161075d565b82525050565b5f604082019050610a185f8301856109e7565b610a2560208301846109f6565b9392505050565b61548080610a395f395ff3fe608060405260043610610287575f3560e01c8063715018a611610159578063a22cb465116100c0578063cfbd488511610079578063cfbd48851461097e578063d5391393146109a6578063d547741f146109d0578063d547cfb7146109f8578063e985e9c514610a22578063f2fde38b14610a5e57610287565b8063a22cb4651461086e578063a4e2d63414610896578063b88d4fde146108c0578063c23dc68f146108dc578063c87b56dd14610918578063caa8078f1461095457610287565b80638da5cb5b116101125780638da5cb5b146107505780638f2fc60b1461077a57806391d14854146107a257806395d89b41146107de57806399a2557a14610808578063a217fddf1461084457610287565b8063715018a614610680578063753868e31461069657806375b238fc146106ac578063819d4cc6146106d65780638456cb59146106fe5780638462151c1461071457610287565b80632f2ff15d116101fd57806342842e0e116101b657806342842e0e1461055e57806344004cc11461057a5780635bbb2177146105a25780635c975abb146105de5780636352211e1461060857806370a082311461064457610287565b80632f2ff15d1461048057806330176e13146104a857806335bb3e16146104d057806336568abe146104f85780633f4ba83a1461052057806340c10f191461053657610287565b806318160ddd1161024f57806318160ddd1461037157806323b872dd1461039b578063248a9ca3146103b7578063261707fa146103f35780632a55205a1461041b5780632d3456701461045857610287565b806301ffc9a71461028b57806306fdde03146102c7578063081812fc146102f1578063088a4ed01461032d578063095ea7b314610355575b5f5ffd5b348015610296575f5ffd5b506102b160048036038101906102ac9190613a3d565b610a86565b6040516102be9190613a82565b60405180910390f35b3480156102d2575f5ffd5b506102db610ab7565b6040516102e89190613b0b565b60405180910390f35b3480156102fc575f5ffd5b5061031760048036038101906103129190613b5e565b610b47565b6040516103249190613bc8565b60405180910390f35b348015610338575f5ffd5b50610353600480360381019061034e9190613b5e565b610ba0565b005b61036f600480360381019061036a9190613c0b565b610bd5565b005b34801561037c575f5ffd5b50610385610be5565b6040516103929190613c58565b60405180910390f35b6103b560048036038101906103b09190613c71565b610c30565b005b3480156103c2575f5ffd5b506103dd60048036038101906103d89190613cf4565b610edb565b6040516103ea9190613d2e565b60405180910390f35b3480156103fe575f5ffd5b5061041960048036038101906104149190613d47565b610ef8565b005b348015610426575f5ffd5b50610441600480360381019061043c9190613d72565b610f2e565b60405161044f929190613db0565b60405180910390f35b348015610463575f5ffd5b5061047e60048036038101906104799190613d47565b611050565b005b34801561048b575f5ffd5b506104a660048036038101906104a19190613dd7565b611086565b005b3480156104b3575f5ffd5b506104ce60048036038101906104c99190613f41565b6110a8565b005b3480156104db575f5ffd5b506104f660048036038101906104f19190613d47565b61116c565b005b348015610503575f5ffd5b5061051e60048036038101906105199190613dd7565b6111a2565b005b34801561052b575f5ffd5b50610534611221565b005b348015610541575f5ffd5b5061055c60048036038101906105579190613c0b565b611256565b005b61057860048036038101906105739190613c71565b6113e3565b005b348015610585575f5ffd5b506105a0600480360381019061059b9190613c71565b611402565b005b3480156105ad575f5ffd5b506105c860048036038101906105c39190613fe5565b6116b7565b6040516105d59190614188565b60405180910390f35b3480156105e9575f5ffd5b506105f2611713565b6040516105ff9190613a82565b60405180910390f35b348015610613575f5ffd5b5061062e60048036038101906106299190613b5e565b611728565b60405161063b9190613bc8565b60405180910390f35b34801561064f575f5ffd5b5061066a60048036038101906106659190613d47565b611739565b6040516106779190613c58565b60405180910390f35b34801561068b575f5ffd5b506106946117cd565b005b3480156106a1575f5ffd5b506106aa6117e0565b005b3480156106b7575f5ffd5b506106c06118a2565b6040516106cd9190613d2e565b60405180910390f35b3480156106e1575f5ffd5b506106fc60048036038101906106f79190613c0b565b6118c6565b005b348015610709575f5ffd5b50610712611a4a565b005b34801561071f575f5ffd5b5061073a60048036038101906107359190613d47565b611a7f565b604051610747919061425f565b60405180910390f35b34801561075b575f5ffd5b50610764611af8565b6040516107719190613bc8565b60405180910390f35b348015610785575f5ffd5b506107a0600480360381019061079b91906142c0565b611b20565b005b3480156107ad575f5ffd5b506107c860048036038101906107c39190613dd7565b611cca565b6040516107d59190613a82565b60405180910390f35b3480156107e9575f5ffd5b506107f2611d2e565b6040516107ff9190613b0b565b60405180910390f35b348015610813575f5ffd5b5061082e600480360381019061082991906142fe565b611dbe565b60405161083b919061425f565b60405180910390f35b34801561084f575f5ffd5b50610858611dd4565b6040516108659190613d2e565b60405180910390f35b348015610879575f5ffd5b50610894600480360381019061088f9190614378565b611dda565b005b3480156108a1575f5ffd5b506108aa611ee0565b6040516108b79190613a82565b60405180910390f35b6108da60048036038101906108d59190614454565b611ef2565b005b3480156108e7575f5ffd5b5061090260048036038101906108fd9190613b5e565b611f43565b60405161090f9190614527565b60405180910390f35b348015610923575f5ffd5b5061093e60048036038101906109399190613b5e565b611fb8565b60405161094b9190613b0b565b60405180910390f35b34801561095f575f5ffd5b506109686120dd565b6040516109759190613c58565b60405180910390f35b348015610989575f5ffd5b506109a4600480360381019061099f9190613d47565b6120e3565b005b3480156109b1575f5ffd5b506109ba612119565b6040516109c79190613d2e565b60405180910390f35b3480156109db575f5ffd5b506109f660048036038101906109f19190613dd7565b61213d565b005b348015610a03575f5ffd5b50610a0c61215f565b604051610a199190613b0b565b60405180910390f35b348015610a2d575f5ffd5b50610a486004803603810190610a439190614540565b6121eb565b604051610a559190613a82565b60405180910390f35b348015610a69575f5ffd5b50610a846004803603810190610a7f9190613d47565b612279565b005b5f610a90826122fd565b80610aa05750610a9f8261238e565b5b80610ab05750610aaf82612407565b5b9050919050565b606060028054610ac6906145ab565b80601f0160208091040260200160405190810160405280929190818152602001828054610af2906145ab565b8015610b3d5780601f10610b1457610100808354040283529160200191610b3d565b820191905f5260205f20905b815481529060010190602001808311610b2057829003601f168201915b5050505050905090565b5f610b5182612480565b610b6657610b6563cf4700e460e01b612523565b5b60065f8381526020019081526020015f205f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775610bca8161252b565b81600f819055505050565b610be18282600161253f565b5050565b5f610bee612669565b6001545f54030390507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610c20612671565b14610c2d57600854810190505b90565b5f610c3a82612698565b905073ffffffffffffffffffffffffffffffffffffffff8473ffffffffffffffffffffffffffffffffffffffff161693508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610caf57610cae63a114810060e01b612523565b5b5f5f610cba846127a7565b91509150610cd08187610ccb6127ca565b6127d1565b610cfb57610ce586610ce06127ca565b6121eb565b610cfa57610cf96359c896be60e01b612523565b5b5b610d088686866001612814565b8015610d12575f82555b60055f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8154600190039190508190555060055f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f815460010191905081905550610dda85610db688888761281a565b7c020000000000000000000000000000000000000000000000000000000017612841565b60045f8681526020019081526020015f20819055505f7c0200000000000000000000000000000000000000000000000000000000841603610e56575f6001850190505f60045f8381526020019081526020015f205403610e54575f548114610e53578360045f8381526020019081526020015f20819055505b5b505b5f73ffffffffffffffffffffffffffffffffffffffff8673ffffffffffffffffffffffffffffffffffffffff161690508481887fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f5fa45f8103610ec557610ec463ea553b3460e01b612523565b5b610ed2878787600161286b565b50505050505050565b5f600a5f8381526020019081526020015f20600101549050919050565b610f00612871565b610f2a7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6826128f8565b5050565b5f5f5f600c5f8681526020019081526020015f2090505f815f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690505f825f0160149054906101000a90046bffffffffffffffffffffffff1690505f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361100257600b5f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169150600b5f0160149054906101000a90046bffffffffffffffffffffffff1690505b5f61100b6129e2565b6bffffffffffffffffffffffff16826bffffffffffffffffffffffff16886110339190614608565b61103d9190614676565b9050828195509550505050509250929050565b611058612871565b6110827fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775826129eb565b5050565b61108f82610edb565b6110988161252b565b6110a283836128f8565b50505050565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c217756110d28161252b565b60105f9054906101000a900460ff1615611121576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611118906146f0565b60405180910390fd5b816011908161113091906148ae565b507fe6e4cd5c2dc7d2c20519b41832cd550fd3ea1186bf299d108179bf71fb8e00e5826040516111609190613b0b565b60405180910390a15050565b611174612871565b61119e7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775826128f8565b5050565b5f5f1b82141580156111d457507fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c217758214155b611213576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161120a906149ed565b60405180910390fd5b61121d8282612ad5565b5050565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177561124b8161252b565b611253612b50565b50565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a66112808161252b565b611288612bb1565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036112f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112ed90614a55565b60405180910390fd5b5f8211611338576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161132f90614ae3565b60405180910390fd5b600f5482111561137d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161137490614b71565b60405180910390fd5b61012c82611389610be5565b6113939190614b8f565b11156113d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113cb90614c0c565b60405180910390fd5b6113de8383612bfb565b505050565b6113fd83838360405180602001604052805f815250611ef2565b505050565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177561142c8161252b565b611434612c18565b61143c612bb1565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036114aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114a190614c74565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611518576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161150f90614cdc565b60405180910390fd5b5f821161155a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161155190614d44565b60405180910390fd5b5f8473ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016115949190613bc8565b602060405180830381865afa1580156115af573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906115d39190614d76565b905082811015611618576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161160f90614deb565b60405180910390fd5b61164384848773ffffffffffffffffffffffffffffffffffffffff16612c679092919063ffffffff16565b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fbfed55bdcd242e3dd0f60ddd7d1e87c67f61c34cd9527b3e6455d841b1025362856040516116a09190613c58565b60405180910390a3506116b1612ce6565b50505050565b6060805f84849050905060405191508082528060051b90508060208301016040525b5f8114611708575f6020820391508186013590505f6116f782611f43565b9050808360208601015250506116d9565b819250505092915050565b5f600e5f9054906101000a900460ff16905090565b5f61173282612698565b9050919050565b5f5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361177e5761177d638f4eb60460e01b612523565b5b67ffffffffffffffff60055f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054169050919050565b6117d5612871565b6117de5f612cf0565b565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177561180a8161252b565b60105f9054906101000a900460ff1615611859576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161185090614e79565b60405180910390fd5b600160105f6101000a81548160ff0219169083151502179055507f6f5ffb7e2a6656882126927a79e460ca27ab657927d593522b90dc28229f7dbc60405160405180910390a150565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177581565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c217756118f08161252b565b6118f8612c18565b611900612bb1565b3073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361196e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161196590614f07565b60405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff166342842e0e3033856040518463ffffffff1660e01b81526004016119ab93929190614f25565b5f604051808303815f87803b1580156119c2575f5ffd5b505af11580156119d4573d5f5f3e3d5ffd5b505050508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f6a30e6784464f0d1f4158aa4cb65ae9239b0fa87c7f2c083ee6dde44ba97b5e684604051611a359190613c58565b60405180910390a3611a45612ce6565b505050565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775611a748161252b565b611a7c612db3565b50565b60607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611aaa612671565b14611ac057611abf63bdba09d760e01b612523565b5b5f611ac9612669565b90505f611ad4612e15565b90506060818314611aed57611aea858484612e1d565b90505b809350505050919050565b5f60095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775611b4a8161252b565b60105f9054906101000a900460ff1615611b99576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b90906146f0565b60405180910390fd5b611ba16129e2565b6bffffffffffffffffffffffff16826bffffffffffffffffffffffff161115611bff576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bf690614fa4565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611c6d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c6490615032565b60405180910390fd5b611c778383612fcc565b8273ffffffffffffffffffffffffffffffffffffffff167f8039bd6e4e7dba001c8840eb2e118d9d131246faa7d0d04335f7305127ec0b1083604051611cbd919061505f565b60405180910390a2505050565b5f600a5f8481526020019081526020015f205f015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b606060038054611d3d906145ab565b80601f0160208091040260200160405190810160405280929190818152602001828054611d69906145ab565b8015611db45780601f10611d8b57610100808354040283529160200191611db4565b820191905f5260205f20905b815481529060010190602001808311611d9757829003601f168201915b5050505050905090565b6060611dcb848484612e1d565b90509392505050565b5f5f1b81565b8060075f611de66127ca565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16611e8f6127ca565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051611ed49190613a82565b60405180910390a35050565b60105f9054906101000a900460ff1681565b611efd848484610c30565b5f8373ffffffffffffffffffffffffffffffffffffffff163b14611f3d57611f2784848484613167565b611f3c57611f3b63d1a57ed660e01b612523565b5b5b50505050565b611f4b61398c565b611f53612669565b8210611fb257611f61612671565b821115611f7857611f7182613291565b9050611fb3565b611f80612e15565b821015611fb1575b611f91826132ba565b611fa15781600190039150611f88565b611faa82613291565b9050611fb3565b5b5b919050565b6060611fc382612480565b612002576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ff9906150c2565b60405180910390fd5b5f60118054612010906145ab565b80601f016020809104026020016040519081016040528092919081815260200182805461203c906145ab565b80156120875780601f1061205e57610100808354040283529160200191612087565b820191905f5260205f20905b81548152906001019060200180831161206a57829003601f168201915b505050505090505f8151116120aa5760405180602001604052805f8152506120d5565b806120b4846132d7565b6040516020016120c5929190615164565b6040516020818303038152906040525b915050919050565b600f5481565b6120eb612871565b6121157f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6826129eb565b5050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b61214682610edb565b61214f8161252b565b61215983836129eb565b50505050565b6011805461216c906145ab565b80601f0160208091040260200160405190810160405280929190818152602001828054612198906145ab565b80156121e35780601f106121ba576101008083540402835291602001916121e3565b820191905f5260205f20905b8154815290600101906020018083116121c657829003601f168201915b505050505081565b5f60075f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b612281612871565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036122f1575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016122e89190613bc8565b60405180910390fd5b6122fa81612cf0565b50565b5f6301ffc9a760e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061235757506380ac58cd60e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806123875750635b5e139f60e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050919050565b5f7f2a55205a000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061240057506123ff82612407565b5b9050919050565b5f7f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806124795750612478826133a1565b5b9050919050565b5f8161248a612669565b1161251d57612497612671565b8211156124bf576124b860045f8481526020019081526020015f205461340a565b905061251e565b5f5482101561251c575f5b5f60045f8581526020019081526020015f2054915081036124f657826124ef90615192565b92506124ca565b5f7c01000000000000000000000000000000000000000000000000000000008216149150505b5b5b919050565b805f5260045ffd5b61253c8161253761344a565b613451565b50565b5f61254983611728565b905081801561258b57508073ffffffffffffffffffffffffffffffffffffffff166125726127ca565b73ffffffffffffffffffffffffffffffffffffffff1614155b156125b7576125a18161259c6127ca565b6121eb565b6125b6576125b563cfb3b94260e01b612523565b5b5b8360065f8581526020019081526020015f205f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828473ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a450505050565b5f6001905090565b5f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff905090565b5f816126a2612669565b116127915760045f8381526020019081526020015f205490506126c3612671565b8211156126e8576126d38161340a565b6127a2576126e763df2d9b4260e01b612523565b5b5f8103612769575f5482106127085761270763df2d9b4260e01b612523565b5b5b60045f836001900393508381526020019081526020015f205490505f810315612764575f7c0100000000000000000000000000000000000000000000000000000000821603156127a25761276363df2d9b4260e01b612523565b5b612709565b5f7c0100000000000000000000000000000000000000000000000000000000821603156127a2575b6127a163df2d9b4260e01b612523565b5b919050565b5f5f5f60065f8581526020019081526020015f2090508092508254915050915091565b5f33905090565b5f73ffffffffffffffffffffffffffffffffffffffff8316925073ffffffffffffffffffffffffffffffffffffffff821691508382148383141790509392505050565b50505050565b5f5f60e883901c905060e86128308686846134a2565b62ffffff16901b9150509392505050565b5f73ffffffffffffffffffffffffffffffffffffffff83169250814260a01b178317905092915050565b50505050565b61287961344a565b73ffffffffffffffffffffffffffffffffffffffff16612897611af8565b73ffffffffffffffffffffffffffffffffffffffff16146128f6576128ba61344a565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016128ed9190613bc8565b60405180910390fd5b565b5f6129038383611cca565b6129d8576001600a5f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff02191690831515021790555061297561344a565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4600190506129dc565b5f90505b92915050565b5f612710905090565b5f6129f68383611cca565b15612acb575f600a5f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff021916908315150217905550612a6861344a565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a460019050612acf565b5f90505b92915050565b612add61344a565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614612b41576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b612b4b82826129eb565b505050565b612b586134aa565b5f600e5f6101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa612b9a61344a565b604051612ba79190613bc8565b60405180910390a1565b612bb9611713565b15612bf9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612bf090615203565b60405180910390fd5b565b612c14828260405180602001604052805f8152506134f3565b5050565b6002600d5403612c5d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612c549061526b565b60405180910390fd5b6002600d81905550565b612ce1838473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8585604051602401612c9a929190613db0565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050613569565b505050565b6001600d81905550565b5f60095f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160095f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b612dbb612bb1565b6001600e5f6101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258612dfe61344a565b604051612e0b9190613bc8565b60405180910390a1565b5f5f54905090565b6060818310612e3757612e366332c1995a60e01b612523565b5b612e3f612669565b831015612e5157612e4e612669565b92505b5f612e5a612e15565b90505f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff612e86612671565b03612e915781612e93565b835b9050808410612ea0578093505b5f612eaa87611739565b9050848610612eb7575f90505b5f8114612fc2578086860311612ecd5785850390505b5f60405194506001820160051b85019050806040525f612eec88611f43565b90505f8160400151612eff57815f015190505b5f5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff612f2a612671565b14612f5857868a03612f44576001612f40612671565b0199505b612f4c612671565b8a1115612f57575f91505b5b612f618a613291565b925060408301515f8114612f77575f9250612f9d565b835115612f8357835192505b8b831860601b612f9c576001820191508a8260051b8a01525b5b5060018a01995083604052888a1480612fb557508481145b15612f0157808852505050505b5050509392505050565b5f612fd56129e2565b6bffffffffffffffffffffffff16905080826bffffffffffffffffffffffff16111561303a5781816040517f6f483d090000000000000000000000000000000000000000000000000000000081526004016130319291906152b9565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036130aa575f6040517fb6d9900a0000000000000000000000000000000000000000000000000000000081526004016130a19190613bc8565b60405180910390fd5b60405180604001604052808473ffffffffffffffffffffffffffffffffffffffff168152602001836bffffffffffffffffffffffff16815250600b5f820151815f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151815f0160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550905050505050565b5f8373ffffffffffffffffffffffffffffffffffffffff1663150b7a0261318c6127ca565b8786866040518563ffffffff1660e01b81526004016131ae9493929190615332565b6020604051808303815f875af19250505080156131e957506040513d601f19601f820116820180604052508101906131e69190615390565b60015b61323e573d805f8114613217576040519150601f19603f3d011682016040523d82523d5f602084013e61321c565b606091505b505f8151036132365761323563d1a57ed660e01b612523565b5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050949350505050565b61329961398c565b6132b360045f8481526020019081526020015f2054613604565b9050919050565b5f5f60045f8481526020019081526020015f205414159050919050565b60605f60016132e5846136b8565b0190505f8167ffffffffffffffff81111561330357613302613e1d565b5b6040519080825280601f01601f1916602001820160405280156133355781602001600182028036833780820191505090505b5090505f82602001820190505b600115613396578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a858161338b5761338a614649565b5b0494505f8503613342575b819350505050919050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b5f7c0100000000000000000000000000000000000000000000000000000000821673ffffffffffffffffffffffffffffffffffffffff8316119050919050565b5f33905090565b61345b8282611cca565b61349e5780826040517fe2517d3f0000000000000000000000000000000000000000000000000000000081526004016134959291906153bb565b60405180910390fd5b5050565b5f9392505050565b6134b2611713565b6134f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016134e89061542c565b60405180910390fd5b565b6134fd8383613809565b5f8373ffffffffffffffffffffffffffffffffffffffff163b14613564575f5f5490505f83820390505b6135395f868380600101945086613167565b61354e5761354d63d1a57ed660e01b612523565b5b81811061352757815f5414613561575f5ffd5b50505b505050565b5f5f60205f8451602086015f885af180613588576040513d5f823e3d81fd5b3d92505f519150505f82146135a15760018114156135bc565b5f8473ffffffffffffffffffffffffffffffffffffffff163b145b156135fe57836040517f5274afe70000000000000000000000000000000000000000000000000000000081526004016135f59190613bc8565b60405180910390fd5b50505050565b61360c61398c565b81815f019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505060a082901c816020019067ffffffffffffffff16908167ffffffffffffffff16815250505f7c01000000000000000000000000000000000000000000000000000000008316141581604001901515908115158152505060e882901c816060019062ffffff16908162ffffff1681525050919050565b5f5f5f90507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310613714577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000838161370a57613709614649565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310613751576d04ee2d6d415b85acef8100000000838161374757613746614649565b5b0492506020810190505b662386f26fc10000831061378057662386f26fc10000838161377657613775614649565b5b0492506010810190505b6305f5e10083106137a9576305f5e100838161379f5761379e614649565b5b0492506008810190505b61271083106137ce5761271083816137c4576137c3614649565b5b0492506004810190505b606483106137f157606483816137e7576137e6614649565b5b0492506002810190505b600a8310613800576001810190505b80915050919050565b5f5f5490505f82036138265761382563b562e8dd60e01b612523565b5b6138325f848385612814565b613850836138415f865f61281a565b61384a8561397d565b17612841565b60045f8381526020019081526020015f2081905550600160406001901b17820260055f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505f73ffffffffffffffffffffffffffffffffffffffff8473ffffffffffffffffffffffffffffffffffffffff161690505f810361390157613900632e07630060e01b612523565b5b5f83830190505f839050613913612671565b60018303111561392e5761392d6381647e3a60e01b612523565b5b5b80835f7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f5fa481816001019150810361392f57815f819055505050506139785f84838561286b565b505050565b5f6001821460e11b9050919050565b60405180608001604052805f73ffffffffffffffffffffffffffffffffffffffff1681526020015f67ffffffffffffffff1681526020015f151581526020015f62ffffff1681525090565b5f604051905090565b5f5ffd5b5f5ffd5b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b613a1c816139e8565b8114613a26575f5ffd5b50565b5f81359050613a3781613a13565b92915050565b5f60208284031215613a5257613a516139e0565b5b5f613a5f84828501613a29565b91505092915050565b5f8115159050919050565b613a7c81613a68565b82525050565b5f602082019050613a955f830184613a73565b92915050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f613add82613a9b565b613ae78185613aa5565b9350613af7818560208601613ab5565b613b0081613ac3565b840191505092915050565b5f6020820190508181035f830152613b238184613ad3565b905092915050565b5f819050919050565b613b3d81613b2b565b8114613b47575f5ffd5b50565b5f81359050613b5881613b34565b92915050565b5f60208284031215613b7357613b726139e0565b5b5f613b8084828501613b4a565b91505092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f613bb282613b89565b9050919050565b613bc281613ba8565b82525050565b5f602082019050613bdb5f830184613bb9565b92915050565b613bea81613ba8565b8114613bf4575f5ffd5b50565b5f81359050613c0581613be1565b92915050565b5f5f60408385031215613c2157613c206139e0565b5b5f613c2e85828601613bf7565b9250506020613c3f85828601613b4a565b9150509250929050565b613c5281613b2b565b82525050565b5f602082019050613c6b5f830184613c49565b92915050565b5f5f5f60608486031215613c8857613c876139e0565b5b5f613c9586828701613bf7565b9350506020613ca686828701613bf7565b9250506040613cb786828701613b4a565b9150509250925092565b5f819050919050565b613cd381613cc1565b8114613cdd575f5ffd5b50565b5f81359050613cee81613cca565b92915050565b5f60208284031215613d0957613d086139e0565b5b5f613d1684828501613ce0565b91505092915050565b613d2881613cc1565b82525050565b5f602082019050613d415f830184613d1f565b92915050565b5f60208284031215613d5c57613d5b6139e0565b5b5f613d6984828501613bf7565b91505092915050565b5f5f60408385031215613d8857613d876139e0565b5b5f613d9585828601613b4a565b9250506020613da685828601613b4a565b9150509250929050565b5f604082019050613dc35f830185613bb9565b613dd06020830184613c49565b9392505050565b5f5f60408385031215613ded57613dec6139e0565b5b5f613dfa85828601613ce0565b9250506020613e0b85828601613bf7565b9150509250929050565b5f5ffd5b5f5ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b613e5382613ac3565b810181811067ffffffffffffffff82111715613e7257613e71613e1d565b5b80604052505050565b5f613e846139d7565b9050613e908282613e4a565b919050565b5f67ffffffffffffffff821115613eaf57613eae613e1d565b5b613eb882613ac3565b9050602081019050919050565b828183375f83830152505050565b5f613ee5613ee084613e95565b613e7b565b905082815260208101848484011115613f0157613f00613e19565b5b613f0c848285613ec5565b509392505050565b5f82601f830112613f2857613f27613e15565b5b8135613f38848260208601613ed3565b91505092915050565b5f60208284031215613f5657613f556139e0565b5b5f82013567ffffffffffffffff811115613f7357613f726139e4565b5b613f7f84828501613f14565b91505092915050565b5f5ffd5b5f5ffd5b5f5f83601f840112613fa557613fa4613e15565b5b8235905067ffffffffffffffff811115613fc257613fc1613f88565b5b602083019150836020820283011115613fde57613fdd613f8c565b5b9250929050565b5f5f60208385031215613ffb57613ffa6139e0565b5b5f83013567ffffffffffffffff811115614018576140176139e4565b5b61402485828601613f90565b92509250509250929050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b61406281613ba8565b82525050565b5f67ffffffffffffffff82169050919050565b61408481614068565b82525050565b61409381613a68565b82525050565b5f62ffffff82169050919050565b6140b081614099565b82525050565b608082015f8201516140ca5f850182614059565b5060208201516140dd602085018261407b565b5060408201516140f0604085018261408a565b50606082015161410360608501826140a7565b50505050565b5f61411483836140b6565b60808301905092915050565b5f602082019050919050565b5f61413682614030565b614140818561403a565b935061414b8361404a565b805f5b8381101561417b5781516141628882614109565b975061416d83614120565b92505060018101905061414e565b5085935050505092915050565b5f6020820190508181035f8301526141a0818461412c565b905092915050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b6141da81613b2b565b82525050565b5f6141eb83836141d1565b60208301905092915050565b5f602082019050919050565b5f61420d826141a8565b61421781856141b2565b9350614222836141c2565b805f5b8381101561425257815161423988826141e0565b9750614244836141f7565b925050600181019050614225565b5085935050505092915050565b5f6020820190508181035f8301526142778184614203565b905092915050565b5f6bffffffffffffffffffffffff82169050919050565b61429f8161427f565b81146142a9575f5ffd5b50565b5f813590506142ba81614296565b92915050565b5f5f604083850312156142d6576142d56139e0565b5b5f6142e385828601613bf7565b92505060206142f4858286016142ac565b9150509250929050565b5f5f5f60608486031215614315576143146139e0565b5b5f61432286828701613bf7565b935050602061433386828701613b4a565b925050604061434486828701613b4a565b9150509250925092565b61435781613a68565b8114614361575f5ffd5b50565b5f813590506143728161434e565b92915050565b5f5f6040838503121561438e5761438d6139e0565b5b5f61439b85828601613bf7565b92505060206143ac85828601614364565b9150509250929050565b5f67ffffffffffffffff8211156143d0576143cf613e1d565b5b6143d982613ac3565b9050602081019050919050565b5f6143f86143f3846143b6565b613e7b565b90508281526020810184848401111561441457614413613e19565b5b61441f848285613ec5565b509392505050565b5f82601f83011261443b5761443a613e15565b5b813561444b8482602086016143e6565b91505092915050565b5f5f5f5f6080858703121561446c5761446b6139e0565b5b5f61447987828801613bf7565b945050602061448a87828801613bf7565b935050604061449b87828801613b4a565b925050606085013567ffffffffffffffff8111156144bc576144bb6139e4565b5b6144c887828801614427565b91505092959194509250565b608082015f8201516144e85f850182614059565b5060208201516144fb602085018261407b565b50604082015161450e604085018261408a565b50606082015161452160608501826140a7565b50505050565b5f60808201905061453a5f8301846144d4565b92915050565b5f5f60408385031215614556576145556139e0565b5b5f61456385828601613bf7565b925050602061457485828601613bf7565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806145c257607f821691505b6020821081036145d5576145d461457e565b5b50919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f61461282613b2b565b915061461d83613b2b565b925082820261462b81613b2b565b91508282048414831517614642576146416145db565b5b5092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f61468082613b2b565b915061468b83613b2b565b92508261469b5761469a614649565b5b828204905092915050565b7f47656e65736973476f643a20436f6e7472616374206973206c6f636b656400005f82015250565b5f6146da601e83613aa5565b91506146e5826146a6565b602082019050919050565b5f6020820190508181035f830152614707816146ce565b9050919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f6008830261476a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261472f565b614774868361472f565b95508019841693508086168417925050509392505050565b5f819050919050565b5f6147af6147aa6147a584613b2b565b61478c565b613b2b565b9050919050565b5f819050919050565b6147c883614795565b6147dc6147d4826147b6565b84845461473b565b825550505050565b5f5f905090565b6147f36147e4565b6147fe8184846147bf565b505050565b5b81811015614821576148165f826147eb565b600181019050614804565b5050565b601f821115614866576148378161470e565b61484084614720565b8101602085101561484f578190505b61486361485b85614720565b830182614803565b50505b505050565b5f82821c905092915050565b5f6148865f198460080261486b565b1980831691505092915050565b5f61489e8383614877565b9150826002028217905092915050565b6148b782613a9b565b67ffffffffffffffff8111156148d0576148cf613e1d565b5b6148da82546145ab565b6148e5828285614825565b5f60209050601f831160018114614916575f8415614904578287015190505b61490e8582614893565b865550614975565b601f1984166149248661470e565b5f5b8281101561494b57848901518255600182019150602085019450602081019050614926565b868310156149685784890151614964601f891682614877565b8355505b6001600288020188555050505b505050505050565b7f47656e65736973476f643a2063616e6e6f742072656e6f756e636520637269745f8201527f6963616c20726f6c657300000000000000000000000000000000000000000000602082015250565b5f6149d7602a83613aa5565b91506149e28261497d565b604082019050919050565b5f6020820190508181035f830152614a04816149cb565b9050919050565b7f47656e65736973476f643a20496e76616c696420726563697069656e740000005f82015250565b5f614a3f601d83613aa5565b9150614a4a82614a0b565b602082019050919050565b5f6020820190508181035f830152614a6c81614a33565b9050919050565b7f47656e65736973476f643a205175616e74697479206d757374206265206772655f8201527f61746572207468616e207a65726f000000000000000000000000000000000000602082015250565b5f614acd602e83613aa5565b9150614ad882614a73565b604082019050919050565b5f6020820190508181035f830152614afa81614ac1565b9050919050565b7f47656e65736973476f643a205175616e74697479206d75737420626520736d615f8201527f6c6c6572207468616e206d61784d696e7450657254786e000000000000000000602082015250565b5f614b5b603783613aa5565b9150614b6682614b01565b604082019050919050565b5f6020820190508181035f830152614b8881614b4f565b9050919050565b5f614b9982613b2b565b9150614ba483613b2b565b9250828201905080821115614bbc57614bbb6145db565b5b92915050565b7f5175616e74697479206578636565647320746f74616c537570706c79000000005f82015250565b5f614bf6601c83613aa5565b9150614c0182614bc2565b602082019050919050565b5f6020820190508181035f830152614c2381614bea565b9050919050565b7f496e76616c696420746f6b656e206164647265737300000000000000000000005f82015250565b5f614c5e601583613aa5565b9150614c6982614c2a565b602082019050919050565b5f6020820190508181035f830152614c8b81614c52565b9050919050565b7f496e76616c696420726563697069656e740000000000000000000000000000005f82015250565b5f614cc6601183613aa5565b9150614cd182614c92565b602082019050919050565b5f6020820190508181035f830152614cf381614cba565b9050919050565b7f416d6f756e74206d7573742062652067726561746572207468616e207a65726f5f82015250565b5f614d2e602083613aa5565b9150614d3982614cfa565b602082019050919050565b5f6020820190508181035f830152614d5b81614d22565b9050919050565b5f81519050614d7081613b34565b92915050565b5f60208284031215614d8b57614d8a6139e0565b5b5f614d9884828501614d62565b91505092915050565b7f496e73756666696369656e7420636f6e74726163742062616c616e63650000005f82015250565b5f614dd5601d83613aa5565b9150614de082614da1565b602082019050919050565b5f6020820190508181035f830152614e0281614dc9565b9050919050565b7f47656e65736973476f643a20436f6e747261637420697320616c7265616479205f8201527f6c6f636b65640000000000000000000000000000000000000000000000000000602082015250565b5f614e63602683613aa5565b9150614e6e82614e09565b604082019050919050565b5f6020820190508181035f830152614e9081614e57565b9050919050565b7f47656e65736973476f643a2043616e6e6f74207265636f766572206f776e20745f8201527f6f6b656e73000000000000000000000000000000000000000000000000000000602082015250565b5f614ef1602583613aa5565b9150614efc82614e97565b604082019050919050565b5f6020820190508181035f830152614f1e81614ee5565b9050919050565b5f606082019050614f385f830186613bb9565b614f456020830185613bb9565b614f526040830184613c49565b949350505050565b7f47656e65736973476f643a20526f79616c74792066656520746f6f20686967685f82015250565b5f614f8e602083613aa5565b9150614f9982614f5a565b602082019050919050565b5f6020820190508181035f830152614fbb81614f82565b9050919050565b7f47656e65736973476f643a20496e76616c696420726f79616c747920726563655f8201527f6976657200000000000000000000000000000000000000000000000000000000602082015250565b5f61501c602483613aa5565b915061502782614fc2565b604082019050919050565b5f6020820190508181035f83015261504981615010565b9050919050565b6150598161427f565b82525050565b5f6020820190506150725f830184615050565b92915050565b7f47656e65736973476f643a20546f6b656e20646f6573206e6f742065786973745f82015250565b5f6150ac602083613aa5565b91506150b782615078565b602082019050919050565b5f6020820190508181035f8301526150d9816150a0565b9050919050565b5f81905092915050565b5f6150f482613a9b565b6150fe81856150e0565b935061510e818560208601613ab5565b80840191505092915050565b7f2e6a736f6e0000000000000000000000000000000000000000000000000000005f82015250565b5f61514e6005836150e0565b91506151598261511a565b600582019050919050565b5f61516f82856150ea565b915061517b82846150ea565b915061518682615142565b91508190509392505050565b5f61519c82613b2b565b91505f82036151ae576151ad6145db565b5b600182039050919050565b7f5061757361626c653a20706175736564000000000000000000000000000000005f82015250565b5f6151ed601083613aa5565b91506151f8826151b9565b602082019050919050565b5f6020820190508181035f83015261521a816151e1565b9050919050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c005f82015250565b5f615255601f83613aa5565b915061526082615221565b602082019050919050565b5f6020820190508181035f83015261528281615249565b9050919050565b5f6152a361529e6152998461427f565b61478c565b613b2b565b9050919050565b6152b381615289565b82525050565b5f6040820190506152cc5f8301856152aa565b6152d96020830184613c49565b9392505050565b5f81519050919050565b5f82825260208201905092915050565b5f615304826152e0565b61530e81856152ea565b935061531e818560208601613ab5565b61532781613ac3565b840191505092915050565b5f6080820190506153455f830187613bb9565b6153526020830186613bb9565b61535f6040830185613c49565b818103606083015261537181846152fa565b905095945050505050565b5f8151905061538a81613a13565b92915050565b5f602082840312156153a5576153a46139e0565b5b5f6153b28482850161537c565b91505092915050565b5f6040820190506153ce5f830185613bb9565b6153db6020830184613d1f565b9392505050565b7f5061757361626c653a206e6f74207061757365640000000000000000000000005f82015250565b5f615416601483613aa5565b9150615421826153e2565b602082019050919050565b5f6020820190508181035f8301526154438161540a565b905091905056fea26469706673582212205db94d06d621941589009904cb5c2b485a634d379fbaded880df43420dece06e64736f6c634300081e0033697066733a2f2f516d64427959693935356f6434414741375a4a72535a486d693862626851326a6f5a6733456f566a7a524c31385a2f' as const;