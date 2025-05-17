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
				"internalType": "bool",
				"name": "safe",
				"type": "bool"
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
				"name": "callerConfirmation",
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
		"name": "totalMinted",
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


export const wagmiByteCode = '0x608060405261012c600d5560405180606001604052806036815260200161586e60369139600f90816100319190610728565b5034801561003d575f80fd5b506040518060400160405280601481526020017f4c6f7665526f73652047656e6573697320476f640000000000000000000000008152506040518060400160405280600481526020017f4c5247470000000000000000000000000000000000000000000000000000000081525081600290816100b99190610728565b5080600390816100c99190610728565b506100d86101ac60201b60201c565b5f819055506100eb6101ac60201b60201c565b6100f96101b460201b60201c565b10156101165761011563fed8210f60e01b6101db60201b60201c565b5b50506001600c81905550610132336101f46101e360201b60201c565b6101445f801b3361038460201b60201c565b506101757fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c217753361038460201b60201c565b506101a67f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a63361038460201b60201c565b506108cc565b5f6001905090565b5f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff905090565b805f5260045ffd5b5f6101f261047a60201b60201c565b6bffffffffffffffffffffffff16905080826bffffffffffffffffffffffff1611156102575781816040517f6f483d0900000000000000000000000000000000000000000000000000000000815260040161024e92919061084d565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036102c7575f6040517fb6d9900a0000000000000000000000000000000000000000000000000000000081526004016102be91906108b3565b60405180910390fd5b60405180604001604052808473ffffffffffffffffffffffffffffffffffffffff168152602001836bffffffffffffffffffffffff16815250600a5f820151815f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151815f0160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550905050505050565b5f610395838361048360201b60201c565b61047057600160095f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff02191690831515021790555061040d6104e760201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a460019050610474565b5f90505b92915050565b5f612710905090565b5f60095f8481526020019081526020015f205f015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b5f33905090565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061056957607f821691505b60208210810361057c5761057b610525565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026105de7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826105a3565b6105e886836105a3565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f61062c61062761062284610600565b610609565b610600565b9050919050565b5f819050919050565b61064583610612565b61065961065182610633565b8484546105af565b825550505050565b5f90565b61066d610661565b61067881848461063c565b505050565b5b8181101561069b576106905f82610665565b60018101905061067e565b5050565b601f8211156106e0576106b181610582565b6106ba84610594565b810160208510156106c9578190505b6106dd6106d585610594565b83018261067d565b50505b505050565b5f82821c905092915050565b5f6107005f19846008026106e5565b1980831691505092915050565b5f61071883836106f1565b9150826002028217905092915050565b610731826104ee565b67ffffffffffffffff81111561074a576107496104f8565b5b6107548254610552565b61075f82828561069f565b5f60209050601f831160018114610790575f841561077e578287015190505b610788858261070d565b8655506107ef565b601f19841661079e86610582565b5f5b828110156107c5578489015182556001820191506020850194506020810190506107a0565b868310156107e257848901516107de601f8916826106f1565b8355505b6001600288020188555050505b505050505050565b5f6bffffffffffffffffffffffff82169050919050565b5f61082861082361081e846107f7565b610609565b610600565b9050919050565b6108388161080e565b82525050565b61084781610600565b82525050565b5f6040820190506108605f83018561082f565b61086d602083018461083e565b9392505050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61089d82610874565b9050919050565b6108ad81610893565b82525050565b5f6020820190506108c65f8301846108a4565b92915050565b614f95806108d95f395ff3fe608060405260043610610250575f3560e01c806375b238fc11610138578063a4e2d634116100b5578063caa8078f11610079578063caa8078f146108b1578063cfbd4885146108db578063d539139314610903578063d547741f1461092d578063d547cfb714610955578063e985e9c51461097f57610250565b8063a4e2d634146107cb578063aafdefd7146107f5578063b88d4fde1461081d578063c23dc68f14610839578063c87b56dd1461087557610250565b806395d89b41116100fc57806395d89b41146106e957806399a2557a14610713578063a217fddf1461074f578063a22cb46514610779578063a2309ff8146107a157610250565b806375b238fc146105f7578063819d4cc6146106215780638462151c146106495780638f2fc60b1461068557806391d14854146106ad57610250565b80632d345670116101d157806342842e0e1161019557806342842e0e146104e957806344004cc1146105055780635bbb21771461052d5780636352211e1461056957806370a08231146105a5578063753868e3146105e157610250565b80632d345670146104215780632f2ff15d1461044957806330176e131461047157806335bb3e161461049957806336568abe146104c157610250565b806318160ddd1161021857806318160ddd1461033a57806323b872dd14610364578063248a9ca314610380578063261707fa146103bc5780632a55205a146103e457610250565b806301ffc9a71461025457806306fdde0314610290578063081812fc146102ba578063088a4ed0146102f6578063095ea7b31461031e575b5f80fd5b34801561025f575f80fd5b5061027a6004803603810190610275919061357b565b6109bb565b60405161028791906135c0565b60405180910390f35b34801561029b575f80fd5b506102a46109cc565b6040516102b19190613649565b60405180910390f35b3480156102c5575f80fd5b506102e060048036038101906102db919061369c565b610a5c565b6040516102ed9190613706565b60405180910390f35b348015610301575f80fd5b5061031c6004803603810190610317919061369c565b610ab5565b005b61033860048036038101906103339190613749565b610aea565b005b348015610345575f80fd5b5061034e610afa565b60405161035b9190613796565b60405180910390f35b61037e600480360381019061037991906137af565b610b45565b005b34801561038b575f80fd5b506103a660048036038101906103a19190613832565b610df0565b6040516103b3919061386c565b60405180910390f35b3480156103c7575f80fd5b506103e260048036038101906103dd9190613885565b610e0d565b005b3480156103ef575f80fd5b5061040a600480360381019061040591906138b0565b610e48565b6040516104189291906138ee565b60405180910390f35b34801561042c575f80fd5b5061044760048036038101906104429190613885565b610f6a565b005b348015610454575f80fd5b5061046f600480360381019061046a9190613915565b610fa5565b005b34801561047c575f80fd5b5061049760048036038101906104929190613a7f565b610fc7565b005b3480156104a4575f80fd5b506104bf60048036038101906104ba9190613885565b61108b565b005b3480156104cc575f80fd5b506104e760048036038101906104e29190613915565b6110c6565b005b61050360048036038101906104fe91906137af565b611141565b005b348015610510575f80fd5b5061052b600480360381019061052691906137af565b611160565b005b348015610538575f80fd5b50610553600480360381019061054e9190613b23565b61140d565b6040516105609190613cc6565b60405180910390f35b348015610574575f80fd5b5061058f600480360381019061058a919061369c565b611469565b60405161059c9190613706565b60405180910390f35b3480156105b0575f80fd5b506105cb60048036038101906105c69190613885565b61147a565b6040516105d89190613796565b60405180910390f35b3480156105ec575f80fd5b506105f561150e565b005b348015610602575f80fd5b5061060b6115d0565b604051610618919061386c565b60405180910390f35b34801561062c575f80fd5b5061064760048036038101906106429190613749565b6115f4565b005b348015610654575f80fd5b5061066f600480360381019061066a9190613885565b611770565b60405161067c9190613d9d565b60405180910390f35b348015610690575f80fd5b506106ab60048036038101906106a69190613dfe565b6117e9565b005b3480156106b8575f80fd5b506106d360048036038101906106ce9190613915565b611993565b6040516106e091906135c0565b60405180910390f35b3480156106f4575f80fd5b506106fd6119f7565b60405161070a9190613649565b60405180910390f35b34801561071e575f80fd5b5061073960048036038101906107349190613e3c565b611a87565b6040516107469190613d9d565b60405180910390f35b34801561075a575f80fd5b50610763611a9d565b604051610770919061386c565b60405180910390f35b348015610784575f80fd5b5061079f600480360381019061079a9190613eb6565b611aa3565b005b3480156107ac575f80fd5b506107b5611ba9565b6040516107c29190613796565b60405180910390f35b3480156107d6575f80fd5b506107df611bb7565b6040516107ec91906135c0565b60405180910390f35b348015610800575f80fd5b5061081b60048036038101906108169190613ef4565b611bc9565b005b61083760048036038101906108329190613fe2565b611df2565b005b348015610844575f80fd5b5061085f600480360381019061085a919061369c565b611e43565b60405161086c91906140b5565b60405180910390f35b348015610880575f80fd5b5061089b6004803603810190610896919061369c565b611eb8565b6040516108a89190613649565b60405180910390f35b3480156108bc575f80fd5b506108c5611fdd565b6040516108d29190613796565b60405180910390f35b3480156108e6575f80fd5b5061090160048036038101906108fc9190613885565b611fe3565b005b34801561090e575f80fd5b5061091761201e565b604051610924919061386c565b60405180910390f35b348015610938575f80fd5b50610953600480360381019061094e9190613915565b612042565b005b348015610960575f80fd5b50610969612064565b6040516109769190613649565b60405180910390f35b34801561098a575f80fd5b506109a560048036038101906109a091906140ce565b6120f0565b6040516109b291906135c0565b60405180910390f35b5f6109c58261217e565b9050919050565b6060600280546109db90614139565b80601f0160208091040260200160405190810160405280929190818152602001828054610a0790614139565b8015610a525780601f10610a2957610100808354040283529160200191610a52565b820191905f5260205f20905b815481529060010190602001808311610a3557829003601f168201915b5050505050905090565b5f610a66826121f7565b610a7b57610a7a63cf4700e460e01b61229a565b5b60065f8381526020019081526020015f205f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775610adf816122a2565b81600d819055505050565b610af6828260016122b6565b5050565b5f610b036123e0565b6001545f54030390507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610b356123e8565b14610b4257600854810190505b90565b5f610b4f8261240f565b905073ffffffffffffffffffffffffffffffffffffffff8473ffffffffffffffffffffffffffffffffffffffff161693508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610bc457610bc363a114810060e01b61229a565b5b5f80610bcf8461251e565b91509150610be58187610be0612541565b612548565b610c1057610bfa86610bf5612541565b6120f0565b610c0f57610c0e6359c896be60e01b61229a565b5b5b610c1d868686600161258b565b8015610c27575f82555b60055f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8154600190039190508190555060055f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f815460010191905081905550610cef85610ccb888887612591565b7c0200000000000000000000000000000000000000000000000000000000176125b8565b60045f8681526020019081526020015f20819055505f7c0200000000000000000000000000000000000000000000000000000000841603610d6b575f6001850190505f60045f8381526020019081526020015f205403610d69575f548114610d68578360045f8381526020019081526020015f20819055505b5b505b5f73ffffffffffffffffffffffffffffffffffffffff8673ffffffffffffffffffffffffffffffffffffffff161690508481887fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f80a45f8103610dda57610dd963ea553b3460e01b61229a565b5b610de787878760016125e2565b50505050505050565b5f60095f8381526020019081526020015f20600101549050919050565b5f801b610e19816122a2565b610e437f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6836125e8565b505050565b5f805f600b5f8681526020019081526020015f2090505f815f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690505f825f0160149054906101000a90046bffffffffffffffffffffffff1690505f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610f1c57600a5f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169150600a5f0160149054906101000a90046bffffffffffffffffffffffff1690505b5f610f256126d2565b6bffffffffffffffffffffffff16826bffffffffffffffffffffffff1688610f4d9190614196565b610f579190614204565b9050828195509550505050509250929050565b5f801b610f76816122a2565b610fa07fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775836126db565b505050565b610fae82610df0565b610fb7816122a2565b610fc183836125e8565b50505050565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775610ff1816122a2565b600e5f9054906101000a900460ff1615611040576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110379061427e565b60405180910390fd5b81600f908161104f9190614439565b507fe6e4cd5c2dc7d2c20519b41832cd550fd3ea1186bf299d108179bf71fb8e00e58260405161107f9190613649565b60405180910390a15050565b5f801b611097816122a2565b6110c17fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775836125e8565b505050565b6110ce6127c5565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611132576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61113c82826126db565b505050565b61115b83838360405180602001604052805f815250611df2565b505050565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177561118a816122a2565b6111926127cc565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603611200576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111f790614552565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361126e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611265906145ba565b60405180910390fd5b5f82116112b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112a790614622565b60405180910390fd5b5f8473ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016112ea9190613706565b602060405180830381865afa158015611305573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113299190614654565b90508281101561136e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611365906146c9565b60405180910390fd5b61139984848773ffffffffffffffffffffffffffffffffffffffff1661281b9092919063ffffffff16565b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fbfed55bdcd242e3dd0f60ddd7d1e87c67f61c34cd9527b3e6455d841b1025362856040516113f69190613796565b60405180910390a35061140761289a565b50505050565b6060805f84849050905060405191508082528060051b90508060208301016040525b5f811461145e575f6020820391508186013590505f61144d82611e43565b90508083602086010152505061142f565b819250505092915050565b5f6114738261240f565b9050919050565b5f8073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036114bf576114be638f4eb60460e01b61229a565b5b67ffffffffffffffff60055f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054169050919050565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775611538816122a2565b600e5f9054906101000a900460ff1615611587576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161157e90614757565b60405180910390fd5b6001600e5f6101000a81548160ff0219169083151502179055507f6f5ffb7e2a6656882126927a79e460ca27ab657927d593522b90dc28229f7dbc60405160405180910390a150565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177581565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177561161e816122a2565b6116266127cc565b3073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611694576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161168b906147e5565b60405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff166342842e0e3033856040518463ffffffff1660e01b81526004016116d193929190614803565b5f604051808303815f87803b1580156116e8575f80fd5b505af11580156116fa573d5f803e3d5ffd5b505050508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f6a30e6784464f0d1f4158aa4cb65ae9239b0fa87c7f2c083ee6dde44ba97b5e68460405161175b9190613796565b60405180910390a361176b61289a565b505050565b60607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61179b6123e8565b146117b1576117b063bdba09d760e01b61229a565b5b5f6117ba6123e0565b90505f6117c56128a4565b905060608183146117de576117db8584846128ac565b90505b809350505050919050565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775611813816122a2565b600e5f9054906101000a900460ff1615611862576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118599061427e565b60405180910390fd5b61186a6126d2565b6bffffffffffffffffffffffff16826bffffffffffffffffffffffff1611156118c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118bf90614882565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611936576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161192d90614910565b60405180910390fd5b6119408383612a5b565b8273ffffffffffffffffffffffffffffffffffffffff167f8039bd6e4e7dba001c8840eb2e118d9d131246faa7d0d04335f7305127ec0b1083604051611986919061493d565b60405180910390a2505050565b5f60095f8481526020019081526020015f205f015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b606060038054611a0690614139565b80601f0160208091040260200160405190810160405280929190818152602001828054611a3290614139565b8015611a7d5780601f10611a5457610100808354040283529160200191611a7d565b820191905f5260205f20905b815481529060010190602001808311611a6057829003601f168201915b5050505050905090565b6060611a948484846128ac565b90509392505050565b5f801b81565b8060075f611aaf612541565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16611b58612541565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051611b9d91906135c0565b60405180910390a35050565b5f611bb2612bf6565b905090565b600e5f9054906101000a900460ff1681565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6611bf3816122a2565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603611c61576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c58906149a0565b60405180910390fd5b8280611c735750611c7184612c3d565b155b611cb2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ca990614a2e565b60405180910390fd5b5f8211611cf4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ceb90614abc565b60405180910390fd5b600d54821115611d39576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d3090614b4a565b60405180910390fd5b61012c82611d45610afa565b611d4f9190614b68565b1115611d5a83612c5f565b611d6a611d65610afa565b612c5f565b604051602001611d7b929190614c47565b60405160208183030381529060405290611dcb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611dc29190613649565b60405180910390fd5b508215611de157611ddc8483612d29565b611dec565b611deb8483612d46565b5b50505050565b611dfd848484610b45565b5f8373ffffffffffffffffffffffffffffffffffffffff163b14611e3d57611e2784848484612eba565b611e3c57611e3b63d1a57ed660e01b61229a565b5b5b50505050565b611e4b6134ca565b611e536123e0565b8210611eb257611e616123e8565b821115611e7857611e7182612fe4565b9050611eb3565b611e806128a4565b821015611eb1575b611e918261300d565b611ea15781600190039150611e88565b611eaa82612fe4565b9050611eb3565b5b5b919050565b6060611ec3826121f7565b611f02576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ef990614ce1565b60405180910390fd5b5f600f8054611f1090614139565b80601f0160208091040260200160405190810160405280929190818152602001828054611f3c90614139565b8015611f875780601f10611f5e57610100808354040283529160200191611f87565b820191905f5260205f20905b815481529060010190602001808311611f6a57829003601f168201915b505050505090505f815111611faa5760405180602001604052805f815250611fd5565b80611fb484612c5f565b604051602001611fc5929190614d49565b6040516020818303038152906040525b915050919050565b600d5481565b5f801b611fef816122a2565b6120197f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6836126db565b505050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b61204b82610df0565b612054816122a2565b61205e83836126db565b50505050565b600f805461207190614139565b80601f016020809104026020016040519081016040528092919081815260200182805461209d90614139565b80156120e85780601f106120bf576101008083540402835291602001916120e8565b820191905f5260205f20905b8154815290600101906020018083116120cb57829003601f168201915b505050505081565b5f60075f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b5f7f2a55205a000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806121f057506121ef8261302a565b5b9050919050565b5f816122016123e0565b116122945761220e6123e8565b8211156122365761222f60045f8481526020019081526020015f20546130a3565b9050612295565b5f54821015612293575f5b5f60045f8581526020019081526020015f20549150810361226d578261226690614d77565b9250612241565b5f7c01000000000000000000000000000000000000000000000000000000008216149150505b5b5b919050565b805f5260045ffd5b6122b3816122ae6127c5565b6130e3565b50565b5f6122c083611469565b905081801561230257508073ffffffffffffffffffffffffffffffffffffffff166122e9612541565b73ffffffffffffffffffffffffffffffffffffffff1614155b1561232e5761231881612313612541565b6120f0565b61232d5761232c63cfb3b94260e01b61229a565b5b5b8360065f8581526020019081526020015f205f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828473ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a450505050565b5f6001905090565b5f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff905090565b5f816124196123e0565b116125085760045f8381526020019081526020015f2054905061243a6123e8565b82111561245f5761244a816130a3565b6125195761245e63df2d9b4260e01b61229a565b5b5f81036124e0575f54821061247f5761247e63df2d9b4260e01b61229a565b5b5b60045f836001900393508381526020019081526020015f205490505f8103156124db575f7c010000000000000000000000000000000000000000000000000000000082160315612519576124da63df2d9b4260e01b61229a565b5b612480565b5f7c010000000000000000000000000000000000000000000000000000000082160315612519575b61251863df2d9b4260e01b61229a565b5b919050565b5f805f60065f8581526020019081526020015f2090508092508254915050915091565b5f33905090565b5f73ffffffffffffffffffffffffffffffffffffffff8316925073ffffffffffffffffffffffffffffffffffffffff821691508382148383141790509392505050565b50505050565b5f8060e883901c905060e86125a7868684613134565b62ffffff16901b9150509392505050565b5f73ffffffffffffffffffffffffffffffffffffffff83169250814260a01b178317905092915050565b50505050565b5f6125f38383611993565b6126c857600160095f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055506126656127c5565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4600190506126cc565b5f90505b92915050565b5f612710905090565b5f6126e68383611993565b156127bb575f60095f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055506127586127c5565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a4600190506127bf565b5f90505b92915050565b5f33905090565b6002600c5403612811576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161280890614de8565b60405180910390fd5b6002600c81905550565b612895838473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb858560405160240161284e9291906138ee565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061313c565b505050565b6001600c81905550565b5f8054905090565b60608183106128c6576128c56332c1995a60e01b61229a565b5b6128ce6123e0565b8310156128e0576128dd6123e0565b92505b5f6128e96128a4565b90505f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6129156123e8565b036129205781612922565b835b905080841061292f578093505b5f6129398761147a565b9050848610612946575f90505b5f8114612a5157808686031161295c5785850390505b5f60405194506001820160051b85019050806040525f61297b88611e43565b90505f816040015161298e57815f015190505b5f5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6129b96123e8565b146129e757868a036129d35760016129cf6123e8565b0199505b6129db6123e8565b8a11156129e6575f91505b5b6129f08a612fe4565b925060408301515f8114612a06575f9250612a2c565b835115612a1257835192505b8b831860601b612a2b576001820191508a8260051b8a01525b5b5060018a01995083604052888a1480612a4457508481145b1561299057808852505050505b5050509392505050565b5f612a646126d2565b6bffffffffffffffffffffffff16905080826bffffffffffffffffffffffff161115612ac95781816040517f6f483d09000000000000000000000000000000000000000000000000000000008152600401612ac0929190614e36565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603612b39575f6040517fb6d9900a000000000000000000000000000000000000000000000000000000008152600401612b309190613706565b60405180910390fd5b60405180604001604052808473ffffffffffffffffffffffffffffffffffffffff168152602001836bffffffffffffffffffffffff16815250600a5f820151815f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151815f0160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550905050505050565b5f612bff6123e0565b5f540390507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff612c2d6123e8565b14612c3a57600854810190505b90565b5f808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60605f6001612c6d846131d7565b0190505f8167ffffffffffffffff811115612c8b57612c8a61395b565b5b6040519080825280601f01601f191660200182016040528015612cbd5781602001600182028036833780820191505090505b5090505f82602001820190505b600115612d1e578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8581612d1357612d126141d7565b5b0494505f8503612cca575b819350505050919050565b612d42828260405180602001604052805f815250613328565b5050565b5f805490505f8203612d6357612d6263b562e8dd60e01b61229a565b5b612d6f5f84838561258b565b612d8d83612d7e5f865f612591565b612d878561339e565b176125b8565b60045f8381526020019081526020015f2081905550600160406001901b17820260055f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505f73ffffffffffffffffffffffffffffffffffffffff8473ffffffffffffffffffffffffffffffffffffffff161690505f8103612e3e57612e3d632e07630060e01b61229a565b5b5f83830190505f839050612e506123e8565b600183031115612e6b57612e6a6381647e3a60e01b61229a565b5b5b80835f7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f80a4818160010191508103612e6c57815f81905550505050612eb55f8483856125e2565b505050565b5f8373ffffffffffffffffffffffffffffffffffffffff1663150b7a02612edf612541565b8786866040518563ffffffff1660e01b8152600401612f019493929190614eaf565b6020604051808303815f875af1925050508015612f3c57506040513d601f19601f82011682018060405250810190612f399190614f0d565b60015b612f91573d805f8114612f6a576040519150601f19603f3d011682016040523d82523d5f602084013e612f6f565b606091505b505f815103612f8957612f8863d1a57ed660e01b61229a565b5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050949350505050565b612fec6134ca565b61300660045f8481526020019081526020015f20546133ad565b9050919050565b5f8060045f8481526020019081526020015f205414159050919050565b5f7f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061309c575061309b82613461565b5b9050919050565b5f7c0100000000000000000000000000000000000000000000000000000000821673ffffffffffffffffffffffffffffffffffffffff8316119050919050565b6130ed8282611993565b6131305780826040517fe2517d3f000000000000000000000000000000000000000000000000000000008152600401613127929190614f38565b60405180910390fd5b5050565b5f9392505050565b5f8060205f8451602086015f885af18061315b576040513d5f823e3d81fd5b3d92505f519150505f821461317457600181141561318f565b5f8473ffffffffffffffffffffffffffffffffffffffff163b145b156131d157836040517f5274afe70000000000000000000000000000000000000000000000000000000081526004016131c89190613706565b60405180910390fd5b50505050565b5f805f90507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310613233577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381613229576132286141d7565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310613270576d04ee2d6d415b85acef81000000008381613266576132656141d7565b5b0492506020810190505b662386f26fc10000831061329f57662386f26fc100008381613295576132946141d7565b5b0492506010810190505b6305f5e10083106132c8576305f5e10083816132be576132bd6141d7565b5b0492506008810190505b61271083106132ed5761271083816132e3576132e26141d7565b5b0492506004810190505b606483106133105760648381613306576133056141d7565b5b0492506002810190505b600a831061331f576001810190505b80915050919050565b6133328383612d46565b5f8373ffffffffffffffffffffffffffffffffffffffff163b14613399575f805490505f83820390505b61336e5f868380600101945086612eba565b6133835761338263d1a57ed660e01b61229a565b5b81811061335c57815f5414613396575f80fd5b50505b505050565b5f6001821460e11b9050919050565b6133b56134ca565b81815f019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505060a082901c816020019067ffffffffffffffff16908167ffffffffffffffff16815250505f7c01000000000000000000000000000000000000000000000000000000008316141581604001901515908115158152505060e882901c816060019062ffffff16908162ffffff1681525050919050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60405180608001604052805f73ffffffffffffffffffffffffffffffffffffffff1681526020015f67ffffffffffffffff1681526020015f151581526020015f62ffffff1681525090565b5f604051905090565b5f80fd5b5f80fd5b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61355a81613526565b8114613564575f80fd5b50565b5f8135905061357581613551565b92915050565b5f602082840312156135905761358f61351e565b5b5f61359d84828501613567565b91505092915050565b5f8115159050919050565b6135ba816135a6565b82525050565b5f6020820190506135d35f8301846135b1565b92915050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f61361b826135d9565b61362581856135e3565b93506136358185602086016135f3565b61363e81613601565b840191505092915050565b5f6020820190508181035f8301526136618184613611565b905092915050565b5f819050919050565b61367b81613669565b8114613685575f80fd5b50565b5f8135905061369681613672565b92915050565b5f602082840312156136b1576136b061351e565b5b5f6136be84828501613688565b91505092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6136f0826136c7565b9050919050565b613700816136e6565b82525050565b5f6020820190506137195f8301846136f7565b92915050565b613728816136e6565b8114613732575f80fd5b50565b5f813590506137438161371f565b92915050565b5f806040838503121561375f5761375e61351e565b5b5f61376c85828601613735565b925050602061377d85828601613688565b9150509250929050565b61379081613669565b82525050565b5f6020820190506137a95f830184613787565b92915050565b5f805f606084860312156137c6576137c561351e565b5b5f6137d386828701613735565b93505060206137e486828701613735565b92505060406137f586828701613688565b9150509250925092565b5f819050919050565b613811816137ff565b811461381b575f80fd5b50565b5f8135905061382c81613808565b92915050565b5f602082840312156138475761384661351e565b5b5f6138548482850161381e565b91505092915050565b613866816137ff565b82525050565b5f60208201905061387f5f83018461385d565b92915050565b5f6020828403121561389a5761389961351e565b5b5f6138a784828501613735565b91505092915050565b5f80604083850312156138c6576138c561351e565b5b5f6138d385828601613688565b92505060206138e485828601613688565b9150509250929050565b5f6040820190506139015f8301856136f7565b61390e6020830184613787565b9392505050565b5f806040838503121561392b5761392a61351e565b5b5f6139388582860161381e565b925050602061394985828601613735565b9150509250929050565b5f80fd5b5f80fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b61399182613601565b810181811067ffffffffffffffff821117156139b0576139af61395b565b5b80604052505050565b5f6139c2613515565b90506139ce8282613988565b919050565b5f67ffffffffffffffff8211156139ed576139ec61395b565b5b6139f682613601565b9050602081019050919050565b828183375f83830152505050565b5f613a23613a1e846139d3565b6139b9565b905082815260208101848484011115613a3f57613a3e613957565b5b613a4a848285613a03565b509392505050565b5f82601f830112613a6657613a65613953565b5b8135613a76848260208601613a11565b91505092915050565b5f60208284031215613a9457613a9361351e565b5b5f82013567ffffffffffffffff811115613ab157613ab0613522565b5b613abd84828501613a52565b91505092915050565b5f80fd5b5f80fd5b5f8083601f840112613ae357613ae2613953565b5b8235905067ffffffffffffffff811115613b0057613aff613ac6565b5b602083019150836020820283011115613b1c57613b1b613aca565b5b9250929050565b5f8060208385031215613b3957613b3861351e565b5b5f83013567ffffffffffffffff811115613b5657613b55613522565b5b613b6285828601613ace565b92509250509250929050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b613ba0816136e6565b82525050565b5f67ffffffffffffffff82169050919050565b613bc281613ba6565b82525050565b613bd1816135a6565b82525050565b5f62ffffff82169050919050565b613bee81613bd7565b82525050565b608082015f820151613c085f850182613b97565b506020820151613c1b6020850182613bb9565b506040820151613c2e6040850182613bc8565b506060820151613c416060850182613be5565b50505050565b5f613c528383613bf4565b60808301905092915050565b5f602082019050919050565b5f613c7482613b6e565b613c7e8185613b78565b9350613c8983613b88565b805f5b83811015613cb9578151613ca08882613c47565b9750613cab83613c5e565b925050600181019050613c8c565b5085935050505092915050565b5f6020820190508181035f830152613cde8184613c6a565b905092915050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b613d1881613669565b82525050565b5f613d298383613d0f565b60208301905092915050565b5f602082019050919050565b5f613d4b82613ce6565b613d558185613cf0565b9350613d6083613d00565b805f5b83811015613d90578151613d778882613d1e565b9750613d8283613d35565b925050600181019050613d63565b5085935050505092915050565b5f6020820190508181035f830152613db58184613d41565b905092915050565b5f6bffffffffffffffffffffffff82169050919050565b613ddd81613dbd565b8114613de7575f80fd5b50565b5f81359050613df881613dd4565b92915050565b5f8060408385031215613e1457613e1361351e565b5b5f613e2185828601613735565b9250506020613e3285828601613dea565b9150509250929050565b5f805f60608486031215613e5357613e5261351e565b5b5f613e6086828701613735565b9350506020613e7186828701613688565b9250506040613e8286828701613688565b9150509250925092565b613e95816135a6565b8114613e9f575f80fd5b50565b5f81359050613eb081613e8c565b92915050565b5f8060408385031215613ecc57613ecb61351e565b5b5f613ed985828601613735565b9250506020613eea85828601613ea2565b9150509250929050565b5f805f60608486031215613f0b57613f0a61351e565b5b5f613f1886828701613735565b9350506020613f2986828701613ea2565b9250506040613f3a86828701613688565b9150509250925092565b5f67ffffffffffffffff821115613f5e57613f5d61395b565b5b613f6782613601565b9050602081019050919050565b5f613f86613f8184613f44565b6139b9565b905082815260208101848484011115613fa257613fa1613957565b5b613fad848285613a03565b509392505050565b5f82601f830112613fc957613fc8613953565b5b8135613fd9848260208601613f74565b91505092915050565b5f805f8060808587031215613ffa57613ff961351e565b5b5f61400787828801613735565b945050602061401887828801613735565b935050604061402987828801613688565b925050606085013567ffffffffffffffff81111561404a57614049613522565b5b61405687828801613fb5565b91505092959194509250565b608082015f8201516140765f850182613b97565b5060208201516140896020850182613bb9565b50604082015161409c6040850182613bc8565b5060608201516140af6060850182613be5565b50505050565b5f6080820190506140c85f830184614062565b92915050565b5f80604083850312156140e4576140e361351e565b5b5f6140f185828601613735565b925050602061410285828601613735565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061415057607f821691505b6020821081036141635761416261410c565b5b50919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6141a082613669565b91506141ab83613669565b92508282026141b981613669565b915082820484148315176141d0576141cf614169565b5b5092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f61420e82613669565b915061421983613669565b925082614229576142286141d7565b5b828204905092915050565b7f47656e65736973476f643a20436f6e7472616374206973206c6f636b656400005f82015250565b5f614268601e836135e3565b915061427382614234565b602082019050919050565b5f6020820190508181035f8301526142958161425c565b9050919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026142f87fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826142bd565b61430286836142bd565b95508019841693508086168417925050509392505050565b5f819050919050565b5f61433d61433861433384613669565b61431a565b613669565b9050919050565b5f819050919050565b61435683614323565b61436a61436282614344565b8484546142c9565b825550505050565b5f90565b61437e614372565b61438981848461434d565b505050565b5b818110156143ac576143a15f82614376565b60018101905061438f565b5050565b601f8211156143f1576143c28161429c565b6143cb846142ae565b810160208510156143da578190505b6143ee6143e6856142ae565b83018261438e565b50505b505050565b5f82821c905092915050565b5f6144115f19846008026143f6565b1980831691505092915050565b5f6144298383614402565b9150826002028217905092915050565b614442826135d9565b67ffffffffffffffff81111561445b5761445a61395b565b5b6144658254614139565b6144708282856143b0565b5f60209050601f8311600181146144a1575f841561448f578287015190505b614499858261441e565b865550614500565b601f1984166144af8661429c565b5f5b828110156144d6578489015182556001820191506020850194506020810190506144b1565b868310156144f357848901516144ef601f891682614402565b8355505b6001600288020188555050505b505050505050565b7f496e76616c696420746f6b656e206164647265737300000000000000000000005f82015250565b5f61453c6015836135e3565b915061454782614508565b602082019050919050565b5f6020820190508181035f83015261456981614530565b9050919050565b7f496e76616c696420726563697069656e740000000000000000000000000000005f82015250565b5f6145a46011836135e3565b91506145af82614570565b602082019050919050565b5f6020820190508181035f8301526145d181614598565b9050919050565b7f416d6f756e74206d7573742062652067726561746572207468616e207a65726f5f82015250565b5f61460c6020836135e3565b9150614617826145d8565b602082019050919050565b5f6020820190508181035f83015261463981614600565b9050919050565b5f8151905061464e81613672565b92915050565b5f602082840312156146695761466861351e565b5b5f61467684828501614640565b91505092915050565b7f496e73756666696369656e7420636f6e74726163742062616c616e63650000005f82015250565b5f6146b3601d836135e3565b91506146be8261467f565b602082019050919050565b5f6020820190508181035f8301526146e0816146a7565b9050919050565b7f47656e65736973476f643a20436f6e747261637420697320616c7265616479205f8201527f6c6f636b65640000000000000000000000000000000000000000000000000000602082015250565b5f6147416026836135e3565b915061474c826146e7565b604082019050919050565b5f6020820190508181035f83015261476e81614735565b9050919050565b7f47656e65736973476f643a2043616e6e6f74207265636f766572206f776e20745f8201527f6f6b656e73000000000000000000000000000000000000000000000000000000602082015250565b5f6147cf6025836135e3565b91506147da82614775565b604082019050919050565b5f6020820190508181035f8301526147fc816147c3565b9050919050565b5f6060820190506148165f8301866136f7565b61482360208301856136f7565b6148306040830184613787565b949350505050565b7f47656e65736973476f643a20526f79616c74792066656520746f6f20686967685f82015250565b5f61486c6020836135e3565b915061487782614838565b602082019050919050565b5f6020820190508181035f83015261489981614860565b9050919050565b7f47656e65736973476f643a20496e76616c696420726f79616c747920726563655f8201527f6976657200000000000000000000000000000000000000000000000000000000602082015250565b5f6148fa6024836135e3565b9150614905826148a0565b604082019050919050565b5f6020820190508181035f830152614927816148ee565b9050919050565b61493781613dbd565b82525050565b5f6020820190506149505f83018461492e565b92915050565b7f47656e65736973476f643a20496e76616c696420726563697069656e740000005f82015250565b5f61498a601d836135e3565b915061499582614956565b602082019050919050565b5f6020820190508181035f8301526149b78161497e565b9050919050565b7f47656e65736973476f643a20556e73616665206d696e7420746f20636f6e74725f8201527f616374206e6f7420616c6c6f7765640000000000000000000000000000000000602082015250565b5f614a18602f836135e3565b9150614a23826149be565b604082019050919050565b5f6020820190508181035f830152614a4581614a0c565b9050919050565b7f47656e65736973476f643a205175616e74697479206d757374206265206772655f8201527f61746572207468616e207a65726f000000000000000000000000000000000000602082015250565b5f614aa6602e836135e3565b9150614ab182614a4c565b604082019050919050565b5f6020820190508181035f830152614ad381614a9a565b9050919050565b7f47656e65736973476f643a205175616e74697479206d75737420626520736d615f8201527f6c6c6572207468616e206d61784d696e7450657254786e000000000000000000602082015250565b5f614b346037836135e3565b9150614b3f82614ada565b604082019050919050565b5f6020820190508181035f830152614b6181614b28565b9050919050565b5f614b7282613669565b9150614b7d83613669565b9250828201905080821115614b9557614b94614169565b5b92915050565b7f5175616e74697479202800000000000000000000000000000000000000000000815250565b5f81905092915050565b5f614bd5826135d9565b614bdf8185614bc1565b9350614bef8185602086016135f3565b80840191505092915050565b7f29206578636565647320746f74616c537570706c792028000000000000000000815250565b7f2900000000000000000000000000000000000000000000000000000000000000815250565b5f614c5182614b9b565b600a82019150614c618285614bcb565b9150614c6c82614bfb565b601782019150614c7c8284614bcb565b9150614c8782614c21565b6001820191508190509392505050565b7f47656e65736973476f643a20546f6b656e20646f6573206e6f742065786973745f82015250565b5f614ccb6020836135e3565b9150614cd682614c97565b602082019050919050565b5f6020820190508181035f830152614cf881614cbf565b9050919050565b7f2e6a736f6e0000000000000000000000000000000000000000000000000000005f82015250565b5f614d33600583614bc1565b9150614d3e82614cff565b600582019050919050565b5f614d548285614bcb565b9150614d608284614bcb565b9150614d6b82614d27565b91508190509392505050565b5f614d8182613669565b91505f8203614d9357614d92614169565b5b600182039050919050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c005f82015250565b5f614dd2601f836135e3565b9150614ddd82614d9e565b602082019050919050565b5f6020820190508181035f830152614dff81614dc6565b9050919050565b5f614e20614e1b614e1684613dbd565b61431a565b613669565b9050919050565b614e3081614e06565b82525050565b5f604082019050614e495f830185614e27565b614e566020830184613787565b9392505050565b5f81519050919050565b5f82825260208201905092915050565b5f614e8182614e5d565b614e8b8185614e67565b9350614e9b8185602086016135f3565b614ea481613601565b840191505092915050565b5f608082019050614ec25f8301876136f7565b614ecf60208301866136f7565b614edc6040830185613787565b8181036060830152614eee8184614e77565b905095945050505050565b5f81519050614f0781613551565b92915050565b5f60208284031215614f2257614f2161351e565b5b5f614f2f84828501614ef9565b91505092915050565b5f604082019050614f4b5f8301856136f7565b614f58602083018461385d565b939250505056fea2646970667358221220656113eb1b2a9616ffac2e79e01064c3673a26d12f8c5537e2e3c23ffa60203c64736f6c634300081a0033697066733a2f2f516d553633637a734c393434677848354d45347746436759475044735972673772426147706e36424e5763654e4b2f' as const;