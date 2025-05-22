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

export const wagmiByteCode = '0x608060405261012c600e55604051806060016040528060368152602001615a4660369139601090816100319190610744565b5034801561003d575f5ffd5b506040518060400160405280601681526020017f4c6f7665526f7365205072696d652043726561746f72000000000000000000008152506040518060400160405280600481526020017f4c5250430000000000000000000000000000000000000000000000000000000081525081600290816100b99190610744565b5080600390816100c99190610744565b506100d86101c560201b60201c565b5f819055506100eb6101c560201b60201c565b6100f96101cd60201b60201c565b10156101165761011563fed8210f60e01b6101f460201b60201c565b5b50506001600c819055505f600d5f6101000a81548160ff02191690831515021790555061014b336101f46101fc60201b60201c565b61015d5f5f1b3361039d60201b60201c565b5061018e7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c217753361039d60201b60201c565b506101bf7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a63361039d60201b60201c565b506108e8565b5f6001905090565b5f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff905090565b805f5260045ffd5b5f61020b61049360201b60201c565b6bffffffffffffffffffffffff16905080826bffffffffffffffffffffffff1611156102705781816040517f6f483d09000000000000000000000000000000000000000000000000000000008152600401610267929190610869565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036102e0575f6040517fb6d9900a0000000000000000000000000000000000000000000000000000000081526004016102d791906108cf565b60405180910390fd5b60405180604001604052808473ffffffffffffffffffffffffffffffffffffffff168152602001836bffffffffffffffffffffffff16815250600a5f820151815f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151815f0160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550905050505050565b5f6103ae838361049c60201b60201c565b61048957600160095f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff02191690831515021790555061042661050060201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a46001905061048d565b5f90505b92915050565b5f612710905090565b5f60095f8481526020019081526020015f205f015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b5f33905090565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061058257607f821691505b6020821081036105955761059461053e565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026105f77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826105bc565b61060186836105bc565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f61064561064061063b84610619565b610622565b610619565b9050919050565b5f819050919050565b61065e8361062b565b61067261066a8261064c565b8484546105c8565b825550505050565b5f5f905090565b61068961067a565b610694818484610655565b505050565b5b818110156106b7576106ac5f82610681565b60018101905061069a565b5050565b601f8211156106fc576106cd8161059b565b6106d6846105ad565b810160208510156106e5578190505b6106f96106f1856105ad565b830182610699565b50505b505050565b5f82821c905092915050565b5f61071c5f1984600802610701565b1980831691505092915050565b5f610734838361070d565b9150826002028217905092915050565b61074d82610507565b67ffffffffffffffff81111561076657610765610511565b5b610770825461056b565b61077b8282856106bb565b5f60209050601f8311600181146107ac575f841561079a578287015190505b6107a48582610729565b86555061080b565b601f1984166107ba8661059b565b5f5b828110156107e1578489015182556001820191506020850194506020810190506107bc565b868310156107fe57848901516107fa601f89168261070d565b8355505b6001600288020188555050505b505050505050565b5f6bffffffffffffffffffffffff82169050919050565b5f61084461083f61083a84610813565b610622565b610619565b9050919050565b6108548161082a565b82525050565b61086381610619565b82525050565b5f60408201905061087c5f83018561084b565b610889602083018461085a565b9392505050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6108b982610890565b9050919050565b6108c9816108af565b82525050565b5f6020820190506108e25f8301846108c0565b92915050565b615151806108f55f395ff3fe608060405260043610610266575f3560e01c806370a0823111610143578063a22cb465116100b5578063caa8078f11610079578063caa8078f146108f3578063cfbd48851461091d578063d539139314610945578063d547741f1461096f578063d547cfb714610997578063e985e9c5146109c157610266565b8063a22cb4651461080d578063a4e2d63414610835578063b88d4fde1461085f578063c23dc68f1461087b578063c87b56dd146108b757610266565b80638462151c116101075780638462151c146106dd5780638f2fc60b1461071957806391d148541461074157806395d89b411461077d57806399a2557a146107a7578063a217fddf146107e357610266565b806370a0823114610623578063753868e31461065f57806375b238fc14610675578063819d4cc61461069f5780638456cb59146106c757610266565b80632f2ff15d116101dc57806340c10f19116101a057806340c10f191461051557806342842e0e1461053d57806344004cc1146105595780635bbb2177146105815780635c975abb146105bd5780636352211e146105e757610266565b80632f2ff15d1461045f57806330176e131461048757806335bb3e16146104af57806336568abe146104d75780633f4ba83a146104ff57610266565b806318160ddd1161022e57806318160ddd1461035057806323b872dd1461037a578063248a9ca314610396578063261707fa146103d25780632a55205a146103fa5780632d3456701461043757610266565b806301ffc9a71461026a57806306fdde03146102a6578063081812fc146102d0578063088a4ed01461030c578063095ea7b314610334575b5f5ffd5b348015610275575f5ffd5b50610290600480360381019061028b919061370e565b6109fd565b60405161029d9190613753565b60405180910390f35b3480156102b1575f5ffd5b506102ba610a0e565b6040516102c791906137dc565b60405180910390f35b3480156102db575f5ffd5b506102f660048036038101906102f1919061382f565b610a9e565b6040516103039190613899565b60405180910390f35b348015610317575f5ffd5b50610332600480360381019061032d919061382f565b610af7565b005b61034e600480360381019061034991906138dc565b610b2c565b005b34801561035b575f5ffd5b50610364610b3c565b6040516103719190613929565b60405180910390f35b610394600480360381019061038f9190613942565b610b87565b005b3480156103a1575f5ffd5b506103bc60048036038101906103b791906139c5565b610e32565b6040516103c991906139ff565b60405180910390f35b3480156103dd575f5ffd5b506103f860048036038101906103f39190613a18565b610e4f565b005b348015610405575f5ffd5b50610420600480360381019061041b9190613a43565b610e8a565b60405161042e929190613a81565b60405180910390f35b348015610442575f5ffd5b5061045d60048036038101906104589190613a18565b610fac565b005b34801561046a575f5ffd5b5061048560048036038101906104809190613aa8565b610fe7565b005b348015610492575f5ffd5b506104ad60048036038101906104a89190613c12565b611009565b005b3480156104ba575f5ffd5b506104d560048036038101906104d09190613a18565b6110cd565b005b3480156104e2575f5ffd5b506104fd60048036038101906104f89190613aa8565b611108565b005b34801561050a575f5ffd5b50610513611187565b005b348015610520575f5ffd5b5061053b600480360381019061053691906138dc565b6111bc565b005b61055760048036038101906105529190613942565b611349565b005b348015610564575f5ffd5b5061057f600480360381019061057a9190613942565b611368565b005b34801561058c575f5ffd5b506105a760048036038101906105a29190613cb6565b61161d565b6040516105b49190613e59565b60405180910390f35b3480156105c8575f5ffd5b506105d1611679565b6040516105de9190613753565b60405180910390f35b3480156105f2575f5ffd5b5061060d6004803603810190610608919061382f565b61168e565b60405161061a9190613899565b60405180910390f35b34801561062e575f5ffd5b5061064960048036038101906106449190613a18565b61169f565b6040516106569190613929565b60405180910390f35b34801561066a575f5ffd5b50610673611733565b005b348015610680575f5ffd5b506106896117f5565b60405161069691906139ff565b60405180910390f35b3480156106aa575f5ffd5b506106c560048036038101906106c091906138dc565b611819565b005b3480156106d2575f5ffd5b506106db61199d565b005b3480156106e8575f5ffd5b5061070360048036038101906106fe9190613a18565b6119d2565b6040516107109190613f30565b60405180910390f35b348015610724575f5ffd5b5061073f600480360381019061073a9190613f91565b611a4b565b005b34801561074c575f5ffd5b5061076760048036038101906107629190613aa8565b611bf5565b6040516107749190613753565b60405180910390f35b348015610788575f5ffd5b50610791611c59565b60405161079e91906137dc565b60405180910390f35b3480156107b2575f5ffd5b506107cd60048036038101906107c89190613fcf565b611ce9565b6040516107da9190613f30565b60405180910390f35b3480156107ee575f5ffd5b506107f7611cff565b60405161080491906139ff565b60405180910390f35b348015610818575f5ffd5b50610833600480360381019061082e9190614049565b611d05565b005b348015610840575f5ffd5b50610849611e0b565b6040516108569190613753565b60405180910390f35b61087960048036038101906108749190614125565b611e1d565b005b348015610886575f5ffd5b506108a1600480360381019061089c919061382f565b611e6e565b6040516108ae91906141f8565b60405180910390f35b3480156108c2575f5ffd5b506108dd60048036038101906108d8919061382f565b611ee3565b6040516108ea91906137dc565b60405180910390f35b3480156108fe575f5ffd5b50610907612008565b6040516109149190613929565b60405180910390f35b348015610928575f5ffd5b50610943600480360381019061093e9190613a18565b61200e565b005b348015610950575f5ffd5b50610959612049565b60405161096691906139ff565b60405180910390f35b34801561097a575f5ffd5b5061099560048036038101906109909190613aa8565b61206d565b005b3480156109a2575f5ffd5b506109ab61208f565b6040516109b891906137dc565b60405180910390f35b3480156109cc575f5ffd5b506109e760048036038101906109e29190614211565b61211b565b6040516109f49190613753565b60405180910390f35b5f610a07826121a9565b9050919050565b606060028054610a1d9061427c565b80601f0160208091040260200160405190810160405280929190818152602001828054610a499061427c565b8015610a945780601f10610a6b57610100808354040283529160200191610a94565b820191905f5260205f20905b815481529060010190602001808311610a7757829003601f168201915b5050505050905090565b5f610aa882612222565b610abd57610abc63cf4700e460e01b6122c5565b5b60065f8381526020019081526020015f205f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775610b21816122cd565b81600e819055505050565b610b38828260016122e1565b5050565b5f610b4561240b565b6001545f54030390507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610b77612413565b14610b8457600854810190505b90565b5f610b918261243a565b905073ffffffffffffffffffffffffffffffffffffffff8473ffffffffffffffffffffffffffffffffffffffff161693508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610c0657610c0563a114810060e01b6122c5565b5b5f5f610c1184612549565b91509150610c278187610c2261256c565b612573565b610c5257610c3c86610c3761256c565b61211b565b610c5157610c506359c896be60e01b6122c5565b5b5b610c5f86868660016125b6565b8015610c69575f82555b60055f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8154600190039190508190555060055f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f815460010191905081905550610d3185610d0d8888876125bc565b7c0200000000000000000000000000000000000000000000000000000000176125e3565b60045f8681526020019081526020015f20819055505f7c0200000000000000000000000000000000000000000000000000000000841603610dad575f6001850190505f60045f8381526020019081526020015f205403610dab575f548114610daa578360045f8381526020019081526020015f20819055505b5b505b5f73ffffffffffffffffffffffffffffffffffffffff8673ffffffffffffffffffffffffffffffffffffffff161690508481887fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f5fa45f8103610e1c57610e1b63ea553b3460e01b6122c5565b5b610e29878787600161260d565b50505050505050565b5f60095f8381526020019081526020015f20600101549050919050565b5f5f1b610e5b816122cd565b610e857f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a683612613565b505050565b5f5f5f600b5f8681526020019081526020015f2090505f815f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690505f825f0160149054906101000a90046bffffffffffffffffffffffff1690505f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610f5e57600a5f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169150600a5f0160149054906101000a90046bffffffffffffffffffffffff1690505b5f610f676126fd565b6bffffffffffffffffffffffff16826bffffffffffffffffffffffff1688610f8f91906142d9565b610f999190614347565b9050828195509550505050509250929050565b5f5f1b610fb8816122cd565b610fe27fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177583612706565b505050565b610ff082610e32565b610ff9816122cd565b6110038383612613565b50505050565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775611033816122cd565b600f5f9054906101000a900460ff1615611082576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611079906143c1565b60405180910390fd5b8160109081611091919061457f565b507fe6e4cd5c2dc7d2c20519b41832cd550fd3ea1186bf299d108179bf71fb8e00e5826040516110c191906137dc565b60405180910390a15050565b5f5f1b6110d9816122cd565b6111037fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177583612613565b505050565b5f5f1b821415801561113a57507fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c217758214155b611179576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611170906146be565b60405180910390fd5b61118382826127f0565b5050565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c217756111b1816122cd565b6111b961286b565b50565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a66111e6816122cd565b6111ee6128cc565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361125c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161125390614726565b60405180910390fd5b5f821161129e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611295906147b4565b60405180910390fd5b600e548211156112e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112da90614842565b60405180910390fd5b61012c826112ef610b3c565b6112f99190614860565b111561133a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611331906148dd565b60405180910390fd5b6113448383612916565b505050565b61136383838360405180602001604052805f815250611e1d565b505050565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775611392816122cd565b61139a612933565b6113a26128cc565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603611410576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161140790614945565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361147e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611475906149ad565b60405180910390fd5b5f82116114c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114b790614a15565b60405180910390fd5b5f8473ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016114fa9190613899565b602060405180830381865afa158015611515573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906115399190614a47565b90508281101561157e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161157590614abc565b60405180910390fd5b6115a984848773ffffffffffffffffffffffffffffffffffffffff166129829092919063ffffffff16565b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fbfed55bdcd242e3dd0f60ddd7d1e87c67f61c34cd9527b3e6455d841b1025362856040516116069190613929565b60405180910390a350611617612a01565b50505050565b6060805f84849050905060405191508082528060051b90508060208301016040525b5f811461166e575f6020820391508186013590505f61165d82611e6e565b90508083602086010152505061163f565b819250505092915050565b5f600d5f9054906101000a900460ff16905090565b5f6116988261243a565b9050919050565b5f5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036116e4576116e3638f4eb60460e01b6122c5565b5b67ffffffffffffffff60055f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054169050919050565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177561175d816122cd565b600f5f9054906101000a900460ff16156117ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117a390614b4a565b60405180910390fd5b6001600f5f6101000a81548160ff0219169083151502179055507f6f5ffb7e2a6656882126927a79e460ca27ab657927d593522b90dc28229f7dbc60405160405180910390a150565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177581565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775611843816122cd565b61184b612933565b6118536128cc565b3073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036118c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118b890614bd8565b60405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff166342842e0e3033856040518463ffffffff1660e01b81526004016118fe93929190614bf6565b5f604051808303815f87803b158015611915575f5ffd5b505af1158015611927573d5f5f3e3d5ffd5b505050508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f6a30e6784464f0d1f4158aa4cb65ae9239b0fa87c7f2c083ee6dde44ba97b5e6846040516119889190613929565b60405180910390a3611998612a01565b505050565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c217756119c7816122cd565b6119cf612a0b565b50565b60607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6119fd612413565b14611a1357611a1263bdba09d760e01b6122c5565b5b5f611a1c61240b565b90505f611a27612a6d565b90506060818314611a4057611a3d858484612a75565b90505b809350505050919050565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775611a75816122cd565b600f5f9054906101000a900460ff1615611ac4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611abb906143c1565b60405180910390fd5b611acc6126fd565b6bffffffffffffffffffffffff16826bffffffffffffffffffffffff161115611b2a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b2190614c75565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611b98576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b8f90614d03565b60405180910390fd5b611ba28383612c24565b8273ffffffffffffffffffffffffffffffffffffffff167f8039bd6e4e7dba001c8840eb2e118d9d131246faa7d0d04335f7305127ec0b1083604051611be89190614d30565b60405180910390a2505050565b5f60095f8481526020019081526020015f205f015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b606060038054611c689061427c565b80601f0160208091040260200160405190810160405280929190818152602001828054611c949061427c565b8015611cdf5780601f10611cb657610100808354040283529160200191611cdf565b820191905f5260205f20905b815481529060010190602001808311611cc257829003601f168201915b5050505050905090565b6060611cf6848484612a75565b90509392505050565b5f5f1b81565b8060075f611d1161256c565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16611dba61256c565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051611dff9190613753565b60405180910390a35050565b600f5f9054906101000a900460ff1681565b611e28848484610b87565b5f8373ffffffffffffffffffffffffffffffffffffffff163b14611e6857611e5284848484612dbf565b611e6757611e6663d1a57ed660e01b6122c5565b5b5b50505050565b611e7661365d565b611e7e61240b565b8210611edd57611e8c612413565b821115611ea357611e9c82612ee9565b9050611ede565b611eab612a6d565b821015611edc575b611ebc82612f12565b611ecc5781600190039150611eb3565b611ed582612ee9565b9050611ede565b5b5b919050565b6060611eee82612222565b611f2d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f2490614d93565b60405180910390fd5b5f60108054611f3b9061427c565b80601f0160208091040260200160405190810160405280929190818152602001828054611f679061427c565b8015611fb25780601f10611f8957610100808354040283529160200191611fb2565b820191905f5260205f20905b815481529060010190602001808311611f9557829003601f168201915b505050505090505f815111611fd55760405180602001604052805f815250612000565b80611fdf84612f2f565b604051602001611ff0929190614e35565b6040516020818303038152906040525b915050919050565b600e5481565b5f5f1b61201a816122cd565b6120447f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a683612706565b505050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b61207682610e32565b61207f816122cd565b6120898383612706565b50505050565b6010805461209c9061427c565b80601f01602080910402602001604051908101604052809291908181526020018280546120c89061427c565b80156121135780601f106120ea57610100808354040283529160200191612113565b820191905f5260205f20905b8154815290600101906020018083116120f657829003601f168201915b505050505081565b5f60075f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b5f7f2a55205a000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061221b575061221a82612ff9565b5b9050919050565b5f8161222c61240b565b116122bf57612239612413565b8211156122615761225a60045f8481526020019081526020015f2054613072565b90506122c0565b5f548210156122be575f5b5f60045f8581526020019081526020015f205491508103612298578261229190614e63565b925061226c565b5f7c01000000000000000000000000000000000000000000000000000000008216149150505b5b5b919050565b805f5260045ffd5b6122de816122d96130b2565b6130b9565b50565b5f6122eb8361168e565b905081801561232d57508073ffffffffffffffffffffffffffffffffffffffff1661231461256c565b73ffffffffffffffffffffffffffffffffffffffff1614155b15612359576123438161233e61256c565b61211b565b6123585761235763cfb3b94260e01b6122c5565b5b5b8360065f8581526020019081526020015f205f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828473ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a450505050565b5f6001905090565b5f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff905090565b5f8161244461240b565b116125335760045f8381526020019081526020015f20549050612465612413565b82111561248a5761247581613072565b6125445761248963df2d9b4260e01b6122c5565b5b5f810361250b575f5482106124aa576124a963df2d9b4260e01b6122c5565b5b5b60045f836001900393508381526020019081526020015f205490505f810315612506575f7c0100000000000000000000000000000000000000000000000000000000821603156125445761250563df2d9b4260e01b6122c5565b5b6124ab565b5f7c010000000000000000000000000000000000000000000000000000000082160315612544575b61254363df2d9b4260e01b6122c5565b5b919050565b5f5f5f60065f8581526020019081526020015f2090508092508254915050915091565b5f33905090565b5f73ffffffffffffffffffffffffffffffffffffffff8316925073ffffffffffffffffffffffffffffffffffffffff821691508382148383141790509392505050565b50505050565b5f5f60e883901c905060e86125d286868461310a565b62ffffff16901b9150509392505050565b5f73ffffffffffffffffffffffffffffffffffffffff83169250814260a01b178317905092915050565b50505050565b5f61261e8383611bf5565b6126f357600160095f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055506126906130b2565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4600190506126f7565b5f90505b92915050565b5f612710905090565b5f6127118383611bf5565b156127e6575f60095f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055506127836130b2565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a4600190506127ea565b5f90505b92915050565b6127f86130b2565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461285c576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6128668282612706565b505050565b612873613112565b5f600d5f6101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6128b56130b2565b6040516128c29190613899565b60405180910390a1565b6128d4611679565b15612914576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161290b90614ed4565b60405180910390fd5b565b61292f828260405180602001604052805f81525061315b565b5050565b6002600c5403612978576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161296f90614f3c565b60405180910390fd5b6002600c81905550565b6129fc838473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb85856040516024016129b5929190613a81565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506131d1565b505050565b6001600c81905550565b612a136128cc565b6001600d5f6101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258612a566130b2565b604051612a639190613899565b60405180910390a1565b5f5f54905090565b6060818310612a8f57612a8e6332c1995a60e01b6122c5565b5b612a9761240b565b831015612aa957612aa661240b565b92505b5f612ab2612a6d565b90505f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff612ade612413565b03612ae95781612aeb565b835b9050808410612af8578093505b5f612b028761169f565b9050848610612b0f575f90505b5f8114612c1a578086860311612b255785850390505b5f60405194506001820160051b85019050806040525f612b4488611e6e565b90505f8160400151612b5757815f015190505b5f5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff612b82612413565b14612bb057868a03612b9c576001612b98612413565b0199505b612ba4612413565b8a1115612baf575f91505b5b612bb98a612ee9565b925060408301515f8114612bcf575f9250612bf5565b835115612bdb57835192505b8b831860601b612bf4576001820191508a8260051b8a01525b5b5060018a01995083604052888a1480612c0d57508481145b15612b5957808852505050505b5050509392505050565b5f612c2d6126fd565b6bffffffffffffffffffffffff16905080826bffffffffffffffffffffffff161115612c925781816040517f6f483d09000000000000000000000000000000000000000000000000000000008152600401612c89929190614f8a565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603612d02575f6040517fb6d9900a000000000000000000000000000000000000000000000000000000008152600401612cf99190613899565b60405180910390fd5b60405180604001604052808473ffffffffffffffffffffffffffffffffffffffff168152602001836bffffffffffffffffffffffff16815250600a5f820151815f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151815f0160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550905050505050565b5f8373ffffffffffffffffffffffffffffffffffffffff1663150b7a02612de461256c565b8786866040518563ffffffff1660e01b8152600401612e069493929190615003565b6020604051808303815f875af1925050508015612e4157506040513d601f19601f82011682018060405250810190612e3e9190615061565b60015b612e96573d805f8114612e6f576040519150601f19603f3d011682016040523d82523d5f602084013e612e74565b606091505b505f815103612e8e57612e8d63d1a57ed660e01b6122c5565b5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050949350505050565b612ef161365d565b612f0b60045f8481526020019081526020015f205461326c565b9050919050565b5f5f60045f8481526020019081526020015f205414159050919050565b60605f6001612f3d84613320565b0190505f8167ffffffffffffffff811115612f5b57612f5a613aee565b5b6040519080825280601f01601f191660200182016040528015612f8d5781602001600182028036833780820191505090505b5090505f82602001820190505b600115612fee578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8581612fe357612fe261431a565b5b0494505f8503612f9a575b819350505050919050565b5f7f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061306b575061306a82613471565b5b9050919050565b5f7c0100000000000000000000000000000000000000000000000000000000821673ffffffffffffffffffffffffffffffffffffffff8316119050919050565b5f33905090565b6130c38282611bf5565b6131065780826040517fe2517d3f0000000000000000000000000000000000000000000000000000000081526004016130fd92919061508c565b60405180910390fd5b5050565b5f9392505050565b61311a611679565b613159576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401613150906150fd565b60405180910390fd5b565b61316583836134da565b5f8373ffffffffffffffffffffffffffffffffffffffff163b146131cc575f5f5490505f83820390505b6131a15f868380600101945086612dbf565b6131b6576131b563d1a57ed660e01b6122c5565b5b81811061318f57815f54146131c9575f5ffd5b50505b505050565b5f5f60205f8451602086015f885af1806131f0576040513d5f823e3d81fd5b3d92505f519150505f8214613209576001811415613224565b5f8473ffffffffffffffffffffffffffffffffffffffff163b145b1561326657836040517f5274afe700000000000000000000000000000000000000000000000000000000815260040161325d9190613899565b60405180910390fd5b50505050565b61327461365d565b81815f019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505060a082901c816020019067ffffffffffffffff16908167ffffffffffffffff16815250505f7c01000000000000000000000000000000000000000000000000000000008316141581604001901515908115158152505060e882901c816060019062ffffff16908162ffffff1681525050919050565b5f5f5f90507a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000831061337c577a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083816133725761337161431a565b5b0492506040810190505b6d04ee2d6d415b85acef810000000083106133b9576d04ee2d6d415b85acef810000000083816133af576133ae61431a565b5b0492506020810190505b662386f26fc1000083106133e857662386f26fc1000083816133de576133dd61431a565b5b0492506010810190505b6305f5e1008310613411576305f5e10083816134075761340661431a565b5b0492506008810190505b612710831061343657612710838161342c5761342b61431a565b5b0492506004810190505b60648310613459576064838161344f5761344e61431a565b5b0492506002810190505b600a8310613468576001810190505b80915050919050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b5f5f5490505f82036134f7576134f663b562e8dd60e01b6122c5565b5b6135035f8483856125b6565b613521836135125f865f6125bc565b61351b8561364e565b176125e3565b60045f8381526020019081526020015f2081905550600160406001901b17820260055f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505f73ffffffffffffffffffffffffffffffffffffffff8473ffffffffffffffffffffffffffffffffffffffff161690505f81036135d2576135d1632e07630060e01b6122c5565b5b5f83830190505f8390506135e4612413565b6001830311156135ff576135fe6381647e3a60e01b6122c5565b5b5b80835f7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f5fa481816001019150810361360057815f819055505050506136495f84838561260d565b505050565b5f6001821460e11b9050919050565b60405180608001604052805f73ffffffffffffffffffffffffffffffffffffffff1681526020015f67ffffffffffffffff1681526020015f151581526020015f62ffffff1681525090565b5f604051905090565b5f5ffd5b5f5ffd5b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6136ed816136b9565b81146136f7575f5ffd5b50565b5f81359050613708816136e4565b92915050565b5f60208284031215613723576137226136b1565b5b5f613730848285016136fa565b91505092915050565b5f8115159050919050565b61374d81613739565b82525050565b5f6020820190506137665f830184613744565b92915050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f6137ae8261376c565b6137b88185613776565b93506137c8818560208601613786565b6137d181613794565b840191505092915050565b5f6020820190508181035f8301526137f481846137a4565b905092915050565b5f819050919050565b61380e816137fc565b8114613818575f5ffd5b50565b5f8135905061382981613805565b92915050565b5f60208284031215613844576138436136b1565b5b5f6138518482850161381b565b91505092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6138838261385a565b9050919050565b61389381613879565b82525050565b5f6020820190506138ac5f83018461388a565b92915050565b6138bb81613879565b81146138c5575f5ffd5b50565b5f813590506138d6816138b2565b92915050565b5f5f604083850312156138f2576138f16136b1565b5b5f6138ff858286016138c8565b92505060206139108582860161381b565b9150509250929050565b613923816137fc565b82525050565b5f60208201905061393c5f83018461391a565b92915050565b5f5f5f60608486031215613959576139586136b1565b5b5f613966868287016138c8565b9350506020613977868287016138c8565b92505060406139888682870161381b565b9150509250925092565b5f819050919050565b6139a481613992565b81146139ae575f5ffd5b50565b5f813590506139bf8161399b565b92915050565b5f602082840312156139da576139d96136b1565b5b5f6139e7848285016139b1565b91505092915050565b6139f981613992565b82525050565b5f602082019050613a125f8301846139f0565b92915050565b5f60208284031215613a2d57613a2c6136b1565b5b5f613a3a848285016138c8565b91505092915050565b5f5f60408385031215613a5957613a586136b1565b5b5f613a668582860161381b565b9250506020613a778582860161381b565b9150509250929050565b5f604082019050613a945f83018561388a565b613aa1602083018461391a565b9392505050565b5f5f60408385031215613abe57613abd6136b1565b5b5f613acb858286016139b1565b9250506020613adc858286016138c8565b9150509250929050565b5f5ffd5b5f5ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b613b2482613794565b810181811067ffffffffffffffff82111715613b4357613b42613aee565b5b80604052505050565b5f613b556136a8565b9050613b618282613b1b565b919050565b5f67ffffffffffffffff821115613b8057613b7f613aee565b5b613b8982613794565b9050602081019050919050565b828183375f83830152505050565b5f613bb6613bb184613b66565b613b4c565b905082815260208101848484011115613bd257613bd1613aea565b5b613bdd848285613b96565b509392505050565b5f82601f830112613bf957613bf8613ae6565b5b8135613c09848260208601613ba4565b91505092915050565b5f60208284031215613c2757613c266136b1565b5b5f82013567ffffffffffffffff811115613c4457613c436136b5565b5b613c5084828501613be5565b91505092915050565b5f5ffd5b5f5ffd5b5f5f83601f840112613c7657613c75613ae6565b5b8235905067ffffffffffffffff811115613c9357613c92613c59565b5b602083019150836020820283011115613caf57613cae613c5d565b5b9250929050565b5f5f60208385031215613ccc57613ccb6136b1565b5b5f83013567ffffffffffffffff811115613ce957613ce86136b5565b5b613cf585828601613c61565b92509250509250929050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b613d3381613879565b82525050565b5f67ffffffffffffffff82169050919050565b613d5581613d39565b82525050565b613d6481613739565b82525050565b5f62ffffff82169050919050565b613d8181613d6a565b82525050565b608082015f820151613d9b5f850182613d2a565b506020820151613dae6020850182613d4c565b506040820151613dc16040850182613d5b565b506060820151613dd46060850182613d78565b50505050565b5f613de58383613d87565b60808301905092915050565b5f602082019050919050565b5f613e0782613d01565b613e118185613d0b565b9350613e1c83613d1b565b805f5b83811015613e4c578151613e338882613dda565b9750613e3e83613df1565b925050600181019050613e1f565b5085935050505092915050565b5f6020820190508181035f830152613e718184613dfd565b905092915050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b613eab816137fc565b82525050565b5f613ebc8383613ea2565b60208301905092915050565b5f602082019050919050565b5f613ede82613e79565b613ee88185613e83565b9350613ef383613e93565b805f5b83811015613f23578151613f0a8882613eb1565b9750613f1583613ec8565b925050600181019050613ef6565b5085935050505092915050565b5f6020820190508181035f830152613f488184613ed4565b905092915050565b5f6bffffffffffffffffffffffff82169050919050565b613f7081613f50565b8114613f7a575f5ffd5b50565b5f81359050613f8b81613f67565b92915050565b5f5f60408385031215613fa757613fa66136b1565b5b5f613fb4858286016138c8565b9250506020613fc585828601613f7d565b9150509250929050565b5f5f5f60608486031215613fe657613fe56136b1565b5b5f613ff3868287016138c8565b93505060206140048682870161381b565b92505060406140158682870161381b565b9150509250925092565b61402881613739565b8114614032575f5ffd5b50565b5f813590506140438161401f565b92915050565b5f5f6040838503121561405f5761405e6136b1565b5b5f61406c858286016138c8565b925050602061407d85828601614035565b9150509250929050565b5f67ffffffffffffffff8211156140a1576140a0613aee565b5b6140aa82613794565b9050602081019050919050565b5f6140c96140c484614087565b613b4c565b9050828152602081018484840111156140e5576140e4613aea565b5b6140f0848285613b96565b509392505050565b5f82601f83011261410c5761410b613ae6565b5b813561411c8482602086016140b7565b91505092915050565b5f5f5f5f6080858703121561413d5761413c6136b1565b5b5f61414a878288016138c8565b945050602061415b878288016138c8565b935050604061416c8782880161381b565b925050606085013567ffffffffffffffff81111561418d5761418c6136b5565b5b614199878288016140f8565b91505092959194509250565b608082015f8201516141b95f850182613d2a565b5060208201516141cc6020850182613d4c565b5060408201516141df6040850182613d5b565b5060608201516141f26060850182613d78565b50505050565b5f60808201905061420b5f8301846141a5565b92915050565b5f5f60408385031215614227576142266136b1565b5b5f614234858286016138c8565b9250506020614245858286016138c8565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061429357607f821691505b6020821081036142a6576142a561424f565b5b50919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6142e3826137fc565b91506142ee836137fc565b92508282026142fc816137fc565b91508282048414831517614313576143126142ac565b5b5092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f614351826137fc565b915061435c836137fc565b92508261436c5761436b61431a565b5b828204905092915050565b7f47656e65736973476f643a20436f6e7472616374206973206c6f636b656400005f82015250565b5f6143ab601e83613776565b91506143b682614377565b602082019050919050565b5f6020820190508181035f8301526143d88161439f565b9050919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f6008830261443b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82614400565b6144458683614400565b95508019841693508086168417925050509392505050565b5f819050919050565b5f61448061447b614476846137fc565b61445d565b6137fc565b9050919050565b5f819050919050565b61449983614466565b6144ad6144a582614487565b84845461440c565b825550505050565b5f5f905090565b6144c46144b5565b6144cf818484614490565b505050565b5b818110156144f2576144e75f826144bc565b6001810190506144d5565b5050565b601f82111561453757614508816143df565b614511846143f1565b81016020851015614520578190505b61453461452c856143f1565b8301826144d4565b50505b505050565b5f82821c905092915050565b5f6145575f198460080261453c565b1980831691505092915050565b5f61456f8383614548565b9150826002028217905092915050565b6145888261376c565b67ffffffffffffffff8111156145a1576145a0613aee565b5b6145ab825461427c565b6145b68282856144f6565b5f60209050601f8311600181146145e7575f84156145d5578287015190505b6145df8582614564565b865550614646565b601f1984166145f5866143df565b5f5b8281101561461c578489015182556001820191506020850194506020810190506145f7565b868310156146395784890151614635601f891682614548565b8355505b6001600288020188555050505b505050505050565b7f47656e65736973476f643a2063616e6e6f742072656e6f756e636520637269745f8201527f6963616c20726f6c657300000000000000000000000000000000000000000000602082015250565b5f6146a8602a83613776565b91506146b38261464e565b604082019050919050565b5f6020820190508181035f8301526146d58161469c565b9050919050565b7f47656e65736973476f643a20496e76616c696420726563697069656e740000005f82015250565b5f614710601d83613776565b915061471b826146dc565b602082019050919050565b5f6020820190508181035f83015261473d81614704565b9050919050565b7f47656e65736973476f643a205175616e74697479206d757374206265206772655f8201527f61746572207468616e207a65726f000000000000000000000000000000000000602082015250565b5f61479e602e83613776565b91506147a982614744565b604082019050919050565b5f6020820190508181035f8301526147cb81614792565b9050919050565b7f47656e65736973476f643a205175616e74697479206d75737420626520736d615f8201527f6c6c6572207468616e206d61784d696e7450657254786e000000000000000000602082015250565b5f61482c603783613776565b9150614837826147d2565b604082019050919050565b5f6020820190508181035f83015261485981614820565b9050919050565b5f61486a826137fc565b9150614875836137fc565b925082820190508082111561488d5761488c6142ac565b5b92915050565b7f5175616e74697479206578636565647320746f74616c537570706c79000000005f82015250565b5f6148c7601c83613776565b91506148d282614893565b602082019050919050565b5f6020820190508181035f8301526148f4816148bb565b9050919050565b7f496e76616c696420746f6b656e206164647265737300000000000000000000005f82015250565b5f61492f601583613776565b915061493a826148fb565b602082019050919050565b5f6020820190508181035f83015261495c81614923565b9050919050565b7f496e76616c696420726563697069656e740000000000000000000000000000005f82015250565b5f614997601183613776565b91506149a282614963565b602082019050919050565b5f6020820190508181035f8301526149c48161498b565b9050919050565b7f416d6f756e74206d7573742062652067726561746572207468616e207a65726f5f82015250565b5f6149ff602083613776565b9150614a0a826149cb565b602082019050919050565b5f6020820190508181035f830152614a2c816149f3565b9050919050565b5f81519050614a4181613805565b92915050565b5f60208284031215614a5c57614a5b6136b1565b5b5f614a6984828501614a33565b91505092915050565b7f496e73756666696369656e7420636f6e74726163742062616c616e63650000005f82015250565b5f614aa6601d83613776565b9150614ab182614a72565b602082019050919050565b5f6020820190508181035f830152614ad381614a9a565b9050919050565b7f47656e65736973476f643a20436f6e747261637420697320616c7265616479205f8201527f6c6f636b65640000000000000000000000000000000000000000000000000000602082015250565b5f614b34602683613776565b9150614b3f82614ada565b604082019050919050565b5f6020820190508181035f830152614b6181614b28565b9050919050565b7f47656e65736973476f643a2043616e6e6f74207265636f766572206f776e20745f8201527f6f6b656e73000000000000000000000000000000000000000000000000000000602082015250565b5f614bc2602583613776565b9150614bcd82614b68565b604082019050919050565b5f6020820190508181035f830152614bef81614bb6565b9050919050565b5f606082019050614c095f83018661388a565b614c16602083018561388a565b614c23604083018461391a565b949350505050565b7f47656e65736973476f643a20526f79616c74792066656520746f6f20686967685f82015250565b5f614c5f602083613776565b9150614c6a82614c2b565b602082019050919050565b5f6020820190508181035f830152614c8c81614c53565b9050919050565b7f47656e65736973476f643a20496e76616c696420726f79616c747920726563655f8201527f6976657200000000000000000000000000000000000000000000000000000000602082015250565b5f614ced602483613776565b9150614cf882614c93565b604082019050919050565b5f6020820190508181035f830152614d1a81614ce1565b9050919050565b614d2a81613f50565b82525050565b5f602082019050614d435f830184614d21565b92915050565b7f47656e65736973476f643a20546f6b656e20646f6573206e6f742065786973745f82015250565b5f614d7d602083613776565b9150614d8882614d49565b602082019050919050565b5f6020820190508181035f830152614daa81614d71565b9050919050565b5f81905092915050565b5f614dc58261376c565b614dcf8185614db1565b9350614ddf818560208601613786565b80840191505092915050565b7f2e6a736f6e0000000000000000000000000000000000000000000000000000005f82015250565b5f614e1f600583614db1565b9150614e2a82614deb565b600582019050919050565b5f614e408285614dbb565b9150614e4c8284614dbb565b9150614e5782614e13565b91508190509392505050565b5f614e6d826137fc565b91505f8203614e7f57614e7e6142ac565b5b600182039050919050565b7f5061757361626c653a20706175736564000000000000000000000000000000005f82015250565b5f614ebe601083613776565b9150614ec982614e8a565b602082019050919050565b5f6020820190508181035f830152614eeb81614eb2565b9050919050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c005f82015250565b5f614f26601f83613776565b9150614f3182614ef2565b602082019050919050565b5f6020820190508181035f830152614f5381614f1a565b9050919050565b5f614f74614f6f614f6a84613f50565b61445d565b6137fc565b9050919050565b614f8481614f5a565b82525050565b5f604082019050614f9d5f830185614f7b565b614faa602083018461391a565b9392505050565b5f81519050919050565b5f82825260208201905092915050565b5f614fd582614fb1565b614fdf8185614fbb565b9350614fef818560208601613786565b614ff881613794565b840191505092915050565b5f6080820190506150165f83018761388a565b615023602083018661388a565b615030604083018561391a565b81810360608301526150428184614fcb565b905095945050505050565b5f8151905061505b816136e4565b92915050565b5f60208284031215615076576150756136b1565b5b5f6150838482850161504d565b91505092915050565b5f60408201905061509f5f83018561388a565b6150ac60208301846139f0565b9392505050565b7f5061757361626c653a206e6f74207061757365640000000000000000000000005f82015250565b5f6150e7601483613776565b91506150f2826150b3565b602082019050919050565b5f6020820190508181035f830152615114816150db565b905091905056fea26469706673582212207a722225110a5aea7c7abf9be2b91cfef8c29a50efc20212b77546214c9d350864736f6c634300081e0033697066733a2f2f516d5676745166575943575641766a36747646435a4239476377566e4c66776a38427a7645325a4d36574b465a612f' as const;