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
				"internalType": "uint256",
				"name": "newPrice",
				"type": "uint256"
			}
		],
		"name": "MintPriceUpdated",
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
				"name": "startTokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "quantity",
				"type": "uint256"
			}
		],
		"name": "MintWithToken",
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
				"name": "token",
				"type": "address"
			}
		],
		"name": "TokenAllowed",
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
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "quota",
				"type": "uint256"
			}
		],
		"name": "WhitelistSet",
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
				"internalType": "uint256",
				"name": "_newmaxMintPerTxn",
				"type": "uint256"
			}
		],
		"name": "setmaxMintAmount",
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


export const wagmiByteCode = '0x608060405261012c600d55604051806060016040528060368152602001614f4360369139600f90816100319190610728565b5034801561003d575f80fd5b506040518060400160405280601481526020017f4c6f7665526f73652047656e6573697320476f640000000000000000000000008152506040518060400160405280600481526020017f4c5247470000000000000000000000000000000000000000000000000000000081525081600290816100b99190610728565b5080600390816100c99190610728565b506100d86101ac60201b60201c565b5f819055506100eb6101ac60201b60201c565b6100f96101b460201b60201c565b10156101165761011563fed8210f60e01b6101db60201b60201c565b5b50506001600c81905550610132336101f46101e360201b60201c565b6101445f801b3361038460201b60201c565b506101757fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c217753361038460201b60201c565b506101a67f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a63361038460201b60201c565b506108cc565b5f6001905090565b5f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff905090565b805f5260045ffd5b5f6101f261047a60201b60201c565b6bffffffffffffffffffffffff16905080826bffffffffffffffffffffffff1611156102575781816040517f6f483d0900000000000000000000000000000000000000000000000000000000815260040161024e92919061084d565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036102c7575f6040517fb6d9900a0000000000000000000000000000000000000000000000000000000081526004016102be91906108b3565b60405180910390fd5b60405180604001604052808473ffffffffffffffffffffffffffffffffffffffff168152602001836bffffffffffffffffffffffff16815250600a5f820151815f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151815f0160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550905050505050565b5f610395838361048360201b60201c565b61047057600160095f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff02191690831515021790555061040d6104e760201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a460019050610474565b5f90505b92915050565b5f612710905090565b5f60095f8481526020019081526020015f205f015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b5f33905090565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061056957607f821691505b60208210810361057c5761057b610525565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026105de7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826105a3565b6105e886836105a3565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f61062c61062761062284610600565b610609565b610600565b9050919050565b5f819050919050565b61064583610612565b61065961065182610633565b8484546105af565b825550505050565b5f90565b61066d610661565b61067881848461063c565b505050565b5b8181101561069b576106905f82610665565b60018101905061067e565b5050565b601f8211156106e0576106b181610582565b6106ba84610594565b810160208510156106c9578190505b6106dd6106d585610594565b83018261067d565b50505b505050565b5f82821c905092915050565b5f6107005f19846008026106e5565b1980831691505092915050565b5f61071883836106f1565b9150826002028217905092915050565b610731826104ee565b67ffffffffffffffff81111561074a576107496104f8565b5b6107548254610552565b61075f82828561069f565b5f60209050601f831160018114610790575f841561077e578287015190505b610788858261070d565b8655506107ef565b601f19841661079e86610582565b5f5b828110156107c5578489015182556001820191506020850194506020810190506107a0565b868310156107e257848901516107de601f8916826106f1565b8355505b6001600288020188555050505b505050505050565b5f6bffffffffffffffffffffffff82169050919050565b5f61082861082361081e846107f7565b610609565b610600565b9050919050565b6108388161080e565b82525050565b61084781610600565b82525050565b5f6040820190506108605f83018561082f565b61086d602083018461083e565b9392505050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61089d82610874565b9050919050565b6108ad81610893565b82525050565b5f6020820190506108c65f8301846108a4565b92915050565b61466a806108d95f395ff3fe608060405260043610610224575f3560e01c806375b238fc11610122578063a4e2d634116100aa578063cfbd48851161006e578063cfbd4885146107bf578063d5391393146107e7578063d547741f14610811578063d547cfb714610839578063e985e9c51461086357610224565b8063a4e2d634146106eb578063aafdefd714610715578063b88d4fde1461073d578063c87b56dd14610759578063caa8078f1461079557610224565b806391d14854116100f157806391d148541461060957806395d89b4114610645578063a217fddf1461066f578063a22cb46514610699578063a2309ff8146106c157610224565b806375b238fc146105675780637f00c7a614610591578063819d4cc6146105b95780638f2fc60b146105e157610224565b80632d345670116101b057806342842e0e1161017457806342842e0e1461049557806344004cc1146104b15780636352211e146104d957806370a0823114610515578063753868e31461055157610224565b80632d345670146103cd5780632f2ff15d146103f557806330176e131461041d57806335bb3e161461044557806336568abe1461046d57610224565b806318160ddd116101f757806318160ddd146102e657806323b872dd14610310578063248a9ca31461032c578063261707fa146103685780632a55205a1461039057610224565b806301ffc9a71461022857806306fdde0314610264578063081812fc1461028e578063095ea7b3146102ca575b5f80fd5b348015610233575f80fd5b5061024e60048036038101906102499190613003565b61089f565b60405161025b9190613048565b60405180910390f35b34801561026f575f80fd5b506102786108b0565b60405161028591906130d1565b60405180910390f35b348015610299575f80fd5b506102b460048036038101906102af9190613124565b610940565b6040516102c1919061318e565b60405180910390f35b6102e460048036038101906102df91906131d1565b610999565b005b3480156102f1575f80fd5b506102fa6109a9565b604051610307919061321e565b60405180910390f35b61032a60048036038101906103259190613237565b6109f4565b005b348015610337575f80fd5b50610352600480360381019061034d91906132ba565b610c9f565b60405161035f91906132f4565b60405180910390f35b348015610373575f80fd5b5061038e6004803603810190610389919061330d565b610cbc565b005b34801561039b575f80fd5b506103b660048036038101906103b19190613338565b610cf7565b6040516103c4929190613376565b60405180910390f35b3480156103d8575f80fd5b506103f360048036038101906103ee919061330d565b610e19565b005b348015610400575f80fd5b5061041b6004803603810190610416919061339d565b610e54565b005b348015610428575f80fd5b50610443600480360381019061043e9190613507565b610e76565b005b348015610450575f80fd5b5061046b6004803603810190610466919061330d565b610f3a565b005b348015610478575f80fd5b50610493600480360381019061048e919061339d565b610f75565b005b6104af60048036038101906104aa9190613237565b610ff0565b005b3480156104bc575f80fd5b506104d760048036038101906104d29190613237565b61100f565b005b3480156104e4575f80fd5b506104ff60048036038101906104fa9190613124565b6112bc565b60405161050c919061318e565b60405180910390f35b348015610520575f80fd5b5061053b6004803603810190610536919061330d565b6112cd565b604051610548919061321e565b60405180910390f35b34801561055c575f80fd5b50610565611361565b005b348015610572575f80fd5b5061057b611423565b60405161058891906132f4565b60405180910390f35b34801561059c575f80fd5b506105b760048036038101906105b29190613124565b611447565b005b3480156105c4575f80fd5b506105df60048036038101906105da91906131d1565b61147c565b005b3480156105ec575f80fd5b506106076004803603810190610602919061358f565b6115f8565b005b348015610614575f80fd5b5061062f600480360381019061062a919061339d565b6117a2565b60405161063c9190613048565b60405180910390f35b348015610650575f80fd5b50610659611806565b60405161066691906130d1565b60405180910390f35b34801561067a575f80fd5b50610683611896565b60405161069091906132f4565b60405180910390f35b3480156106a4575f80fd5b506106bf60048036038101906106ba91906135f7565b61189c565b005b3480156106cc575f80fd5b506106d56119a2565b6040516106e2919061321e565b60405180910390f35b3480156106f6575f80fd5b506106ff6119b0565b60405161070c9190613048565b60405180910390f35b348015610720575f80fd5b5061073b60048036038101906107369190613635565b6119c2565b005b61075760048036038101906107529190613723565b611beb565b005b348015610764575f80fd5b5061077f600480360381019061077a9190613124565b611c3c565b60405161078c91906130d1565b60405180910390f35b3480156107a0575f80fd5b506107a9611d61565b6040516107b6919061321e565b60405180910390f35b3480156107ca575f80fd5b506107e560048036038101906107e0919061330d565b611d67565b005b3480156107f2575f80fd5b506107fb611da2565b60405161080891906132f4565b60405180910390f35b34801561081c575f80fd5b506108376004803603810190610832919061339d565b611dc6565b005b348015610844575f80fd5b5061084d611de8565b60405161085a91906130d1565b60405180910390f35b34801561086e575f80fd5b50610889600480360381019061088491906137a3565b611e74565b6040516108969190613048565b60405180910390f35b5f6108a982611f02565b9050919050565b6060600280546108bf9061380e565b80601f01602080910402602001604051908101604052809291908181526020018280546108eb9061380e565b80156109365780601f1061090d57610100808354040283529160200191610936565b820191905f5260205f20905b81548152906001019060200180831161091957829003601f168201915b5050505050905090565b5f61094a82611f7b565b61095f5761095e63cf4700e460e01b61201e565b5b60065f8381526020019081526020015f205f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6109a582826001612026565b5050565b5f6109b2612150565b6001545f54030390507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6109e4612158565b146109f157600854810190505b90565b5f6109fe8261217f565b905073ffffffffffffffffffffffffffffffffffffffff8473ffffffffffffffffffffffffffffffffffffffff161693508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610a7357610a7263a114810060e01b61201e565b5b5f80610a7e8461228e565b91509150610a948187610a8f6122b1565b6122b8565b610abf57610aa986610aa46122b1565b611e74565b610abe57610abd6359c896be60e01b61201e565b5b5b610acc86868660016122fb565b8015610ad6575f82555b60055f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8154600190039190508190555060055f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f815460010191905081905550610b9e85610b7a888887612301565b7c020000000000000000000000000000000000000000000000000000000017612328565b60045f8681526020019081526020015f20819055505f7c0200000000000000000000000000000000000000000000000000000000841603610c1a575f6001850190505f60045f8381526020019081526020015f205403610c18575f548114610c17578360045f8381526020019081526020015f20819055505b5b505b5f73ffffffffffffffffffffffffffffffffffffffff8673ffffffffffffffffffffffffffffffffffffffff161690508481887fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f80a45f8103610c8957610c8863ea553b3460e01b61201e565b5b610c968787876001612352565b50505050505050565b5f60095f8381526020019081526020015f20600101549050919050565b5f801b610cc881612358565b610cf27f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a68361236c565b505050565b5f805f600b5f8681526020019081526020015f2090505f815f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690505f825f0160149054906101000a90046bffffffffffffffffffffffff1690505f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610dcb57600a5f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169150600a5f0160149054906101000a90046bffffffffffffffffffffffff1690505b5f610dd4612456565b6bffffffffffffffffffffffff16826bffffffffffffffffffffffff1688610dfc919061386b565b610e0691906138d9565b9050828195509550505050509250929050565b5f801b610e2581612358565b610e4f7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c217758361245f565b505050565b610e5d82610c9f565b610e6681612358565b610e70838361236c565b50505050565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775610ea081612358565b600e5f9054906101000a900460ff1615610eef576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ee690613953565b60405180910390fd5b81600f9081610efe9190613b0e565b507fe6e4cd5c2dc7d2c20519b41832cd550fd3ea1186bf299d108179bf71fb8e00e582604051610f2e91906130d1565b60405180910390a15050565b5f801b610f4681612358565b610f707fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c217758361236c565b505050565b610f7d612549565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610fe1576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610feb828261245f565b505050565b61100a83838360405180602001604052805f815250611beb565b505050565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177561103981612358565b611041612550565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036110af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110a690613c27565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361111d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161111490613c8f565b60405180910390fd5b5f821161115f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161115690613cf7565b60405180910390fd5b5f8473ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401611199919061318e565b602060405180830381865afa1580156111b4573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906111d89190613d29565b90508281101561121d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161121490613d9e565b60405180910390fd5b61124884848773ffffffffffffffffffffffffffffffffffffffff1661259f9092919063ffffffff16565b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fbfed55bdcd242e3dd0f60ddd7d1e87c67f61c34cd9527b3e6455d841b1025362856040516112a5919061321e565b60405180910390a3506112b661261e565b50505050565b5f6112c68261217f565b9050919050565b5f8073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361131257611311638f4eb60460e01b61201e565b5b67ffffffffffffffff60055f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054169050919050565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177561138b81612358565b600e5f9054906101000a900460ff16156113da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113d190613e2c565b60405180910390fd5b6001600e5f6101000a81548160ff0219169083151502179055507f6f5ffb7e2a6656882126927a79e460ca27ab657927d593522b90dc28229f7dbc60405160405180910390a150565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177581565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177561147181612358565b81600d819055505050565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c217756114a681612358565b6114ae612550565b3073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361151c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161151390613eba565b60405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff166342842e0e3033856040518463ffffffff1660e01b815260040161155993929190613ed8565b5f604051808303815f87803b158015611570575f80fd5b505af1158015611582573d5f803e3d5ffd5b505050508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f6a30e6784464f0d1f4158aa4cb65ae9239b0fa87c7f2c083ee6dde44ba97b5e6846040516115e3919061321e565b60405180910390a36115f361261e565b505050565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177561162281612358565b600e5f9054906101000a900460ff1615611671576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161166890613953565b60405180910390fd5b611679612456565b6bffffffffffffffffffffffff16826bffffffffffffffffffffffff1611156116d7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116ce90613f57565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611745576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161173c90613fe5565b60405180910390fd5b61174f8383612628565b8273ffffffffffffffffffffffffffffffffffffffff167f8039bd6e4e7dba001c8840eb2e118d9d131246faa7d0d04335f7305127ec0b10836040516117959190614012565b60405180910390a2505050565b5f60095f8481526020019081526020015f205f015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b6060600380546118159061380e565b80601f01602080910402602001604051908101604052809291908181526020018280546118419061380e565b801561188c5780601f106118635761010080835404028352916020019161188c565b820191905f5260205f20905b81548152906001019060200180831161186f57829003601f168201915b5050505050905090565b5f801b81565b8060075f6118a86122b1565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff166119516122b1565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516119969190613048565b60405180910390a35050565b5f6119ab6127c3565b905090565b600e5f9054906101000a900460ff1681565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a66119ec81612358565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603611a5a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a5190614075565b60405180910390fd5b8280611a6c5750611a6a8461280a565b155b611aab576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611aa290614103565b60405180910390fd5b5f8211611aed576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ae490614191565b60405180910390fd5b600d54821115611b32576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b299061421f565b60405180910390fd5b61012c82611b3e6109a9565b611b48919061423d565b1115611b538361282c565b611b63611b5e6109a9565b61282c565b604051602001611b7492919061431c565b60405160208183030381529060405290611bc4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bbb91906130d1565b60405180910390fd5b508215611bda57611bd584836128f6565b611be5565b611be48483612913565b5b50505050565b611bf68484846109f4565b5f8373ffffffffffffffffffffffffffffffffffffffff163b14611c3657611c2084848484612a87565b611c3557611c3463d1a57ed660e01b61201e565b5b5b50505050565b6060611c4782611f7b565b611c86576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c7d906143b6565b60405180910390fd5b5f600f8054611c949061380e565b80601f0160208091040260200160405190810160405280929190818152602001828054611cc09061380e565b8015611d0b5780601f10611ce257610100808354040283529160200191611d0b565b820191905f5260205f20905b815481529060010190602001808311611cee57829003601f168201915b505050505090505f815111611d2e5760405180602001604052805f815250611d59565b80611d388461282c565b604051602001611d4992919061441e565b6040516020818303038152906040525b915050919050565b600d5481565b5f801b611d7381612358565b611d9d7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a68361245f565b505050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b611dcf82610c9f565b611dd881612358565b611de2838361245f565b50505050565b600f8054611df59061380e565b80601f0160208091040260200160405190810160405280929190818152602001828054611e219061380e565b8015611e6c5780601f10611e4357610100808354040283529160200191611e6c565b820191905f5260205f20905b815481529060010190602001808311611e4f57829003601f168201915b505050505081565b5f60075f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b5f7f2a55205a000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480611f745750611f7382612bb1565b5b9050919050565b5f81611f85612150565b1161201857611f92612158565b821115611fba57611fb360045f8481526020019081526020015f2054612c2a565b9050612019565b5f54821015612017575f5b5f60045f8581526020019081526020015f205491508103611ff15782611fea9061444c565b9250611fc5565b5f7c01000000000000000000000000000000000000000000000000000000008216149150505b5b5b919050565b805f5260045ffd5b5f612030836112bc565b905081801561207257508073ffffffffffffffffffffffffffffffffffffffff166120596122b1565b73ffffffffffffffffffffffffffffffffffffffff1614155b1561209e57612088816120836122b1565b611e74565b61209d5761209c63cfb3b94260e01b61201e565b5b5b8360065f8581526020019081526020015f205f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828473ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a450505050565b5f6001905090565b5f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff905090565b5f81612189612150565b116122785760045f8381526020019081526020015f205490506121aa612158565b8211156121cf576121ba81612c2a565b612289576121ce63df2d9b4260e01b61201e565b5b5f8103612250575f5482106121ef576121ee63df2d9b4260e01b61201e565b5b5b60045f836001900393508381526020019081526020015f205490505f81031561224b575f7c0100000000000000000000000000000000000000000000000000000000821603156122895761224a63df2d9b4260e01b61201e565b5b6121f0565b5f7c010000000000000000000000000000000000000000000000000000000082160315612289575b61228863df2d9b4260e01b61201e565b5b919050565b5f805f60065f8581526020019081526020015f2090508092508254915050915091565b5f33905090565b5f73ffffffffffffffffffffffffffffffffffffffff8316925073ffffffffffffffffffffffffffffffffffffffff821691508382148383141790509392505050565b50505050565b5f8060e883901c905060e8612317868684612c6a565b62ffffff16901b9150509392505050565b5f73ffffffffffffffffffffffffffffffffffffffff83169250814260a01b178317905092915050565b50505050565b61236981612364612549565b612c72565b50565b5f61237783836117a2565b61244c57600160095f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055506123e9612549565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a460019050612450565b5f90505b92915050565b5f612710905090565b5f61246a83836117a2565b1561253f575f60095f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055506124dc612549565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a460019050612543565b5f90505b92915050565b5f33905090565b6002600c5403612595576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161258c906144bd565b60405180910390fd5b6002600c81905550565b612619838473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb85856040516024016125d2929190613376565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050612cc3565b505050565b6001600c81905550565b5f612631612456565b6bffffffffffffffffffffffff16905080826bffffffffffffffffffffffff1611156126965781816040517f6f483d0900000000000000000000000000000000000000000000000000000000815260040161268d92919061450b565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603612706575f6040517fb6d9900a0000000000000000000000000000000000000000000000000000000081526004016126fd919061318e565b60405180910390fd5b60405180604001604052808473ffffffffffffffffffffffffffffffffffffffff168152602001836bffffffffffffffffffffffff16815250600a5f820151815f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151815f0160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550905050505050565b5f6127cc612150565b5f540390507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6127fa612158565b1461280757600854810190505b90565b5f808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60605f600161283a84612d5e565b0190505f8167ffffffffffffffff811115612858576128576133e3565b5b6040519080825280601f01601f19166020018201604052801561288a5781602001600182028036833780820191505090505b5090505f82602001820190505b6001156128eb578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85816128e0576128df6138ac565b5b0494505f8503612897575b819350505050919050565b61290f828260405180602001604052805f815250612eaf565b5050565b5f805490505f82036129305761292f63b562e8dd60e01b61201e565b5b61293c5f8483856122fb565b61295a8361294b5f865f612301565b61295485612f25565b17612328565b60045f8381526020019081526020015f2081905550600160406001901b17820260055f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505f73ffffffffffffffffffffffffffffffffffffffff8473ffffffffffffffffffffffffffffffffffffffff161690505f8103612a0b57612a0a632e07630060e01b61201e565b5b5f83830190505f839050612a1d612158565b600183031115612a3857612a376381647e3a60e01b61201e565b5b5b80835f7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f80a4818160010191508103612a3957815f81905550505050612a825f848385612352565b505050565b5f8373ffffffffffffffffffffffffffffffffffffffff1663150b7a02612aac6122b1565b8786866040518563ffffffff1660e01b8152600401612ace9493929190614584565b6020604051808303815f875af1925050508015612b0957506040513d601f19601f82011682018060405250810190612b0691906145e2565b60015b612b5e573d805f8114612b37576040519150601f19603f3d011682016040523d82523d5f602084013e612b3c565b606091505b505f815103612b5657612b5563d1a57ed660e01b61201e565b5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050949350505050565b5f7f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480612c235750612c2282612f34565b5b9050919050565b5f7c0100000000000000000000000000000000000000000000000000000000821673ffffffffffffffffffffffffffffffffffffffff8316119050919050565b5f9392505050565b612c7c82826117a2565b612cbf5780826040517fe2517d3f000000000000000000000000000000000000000000000000000000008152600401612cb692919061460d565b60405180910390fd5b5050565b5f8060205f8451602086015f885af180612ce2576040513d5f823e3d81fd5b3d92505f519150505f8214612cfb576001811415612d16565b5f8473ffffffffffffffffffffffffffffffffffffffff163b145b15612d5857836040517f5274afe7000000000000000000000000000000000000000000000000000000008152600401612d4f919061318e565b60405180910390fd5b50505050565b5f805f90507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310612dba577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381612db057612daf6138ac565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310612df7576d04ee2d6d415b85acef81000000008381612ded57612dec6138ac565b5b0492506020810190505b662386f26fc100008310612e2657662386f26fc100008381612e1c57612e1b6138ac565b5b0492506010810190505b6305f5e1008310612e4f576305f5e1008381612e4557612e446138ac565b5b0492506008810190505b6127108310612e74576127108381612e6a57612e696138ac565b5b0492506004810190505b60648310612e975760648381612e8d57612e8c6138ac565b5b0492506002810190505b600a8310612ea6576001810190505b80915050919050565b612eb98383612913565b5f8373ffffffffffffffffffffffffffffffffffffffff163b14612f20575f805490505f83820390505b612ef55f868380600101945086612a87565b612f0a57612f0963d1a57ed660e01b61201e565b5b818110612ee357815f5414612f1d575f80fd5b50505b505050565b5f6001821460e11b9050919050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b5f604051905090565b5f80fd5b5f80fd5b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b612fe281612fae565b8114612fec575f80fd5b50565b5f81359050612ffd81612fd9565b92915050565b5f6020828403121561301857613017612fa6565b5b5f61302584828501612fef565b91505092915050565b5f8115159050919050565b6130428161302e565b82525050565b5f60208201905061305b5f830184613039565b92915050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f6130a382613061565b6130ad818561306b565b93506130bd81856020860161307b565b6130c681613089565b840191505092915050565b5f6020820190508181035f8301526130e98184613099565b905092915050565b5f819050919050565b613103816130f1565b811461310d575f80fd5b50565b5f8135905061311e816130fa565b92915050565b5f6020828403121561313957613138612fa6565b5b5f61314684828501613110565b91505092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6131788261314f565b9050919050565b6131888161316e565b82525050565b5f6020820190506131a15f83018461317f565b92915050565b6131b08161316e565b81146131ba575f80fd5b50565b5f813590506131cb816131a7565b92915050565b5f80604083850312156131e7576131e6612fa6565b5b5f6131f4858286016131bd565b925050602061320585828601613110565b9150509250929050565b613218816130f1565b82525050565b5f6020820190506132315f83018461320f565b92915050565b5f805f6060848603121561324e5761324d612fa6565b5b5f61325b868287016131bd565b935050602061326c868287016131bd565b925050604061327d86828701613110565b9150509250925092565b5f819050919050565b61329981613287565b81146132a3575f80fd5b50565b5f813590506132b481613290565b92915050565b5f602082840312156132cf576132ce612fa6565b5b5f6132dc848285016132a6565b91505092915050565b6132ee81613287565b82525050565b5f6020820190506133075f8301846132e5565b92915050565b5f6020828403121561332257613321612fa6565b5b5f61332f848285016131bd565b91505092915050565b5f806040838503121561334e5761334d612fa6565b5b5f61335b85828601613110565b925050602061336c85828601613110565b9150509250929050565b5f6040820190506133895f83018561317f565b613396602083018461320f565b9392505050565b5f80604083850312156133b3576133b2612fa6565b5b5f6133c0858286016132a6565b92505060206133d1858286016131bd565b9150509250929050565b5f80fd5b5f80fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b61341982613089565b810181811067ffffffffffffffff82111715613438576134376133e3565b5b80604052505050565b5f61344a612f9d565b90506134568282613410565b919050565b5f67ffffffffffffffff821115613475576134746133e3565b5b61347e82613089565b9050602081019050919050565b828183375f83830152505050565b5f6134ab6134a68461345b565b613441565b9050828152602081018484840111156134c7576134c66133df565b5b6134d284828561348b565b509392505050565b5f82601f8301126134ee576134ed6133db565b5b81356134fe848260208601613499565b91505092915050565b5f6020828403121561351c5761351b612fa6565b5b5f82013567ffffffffffffffff81111561353957613538612faa565b5b613545848285016134da565b91505092915050565b5f6bffffffffffffffffffffffff82169050919050565b61356e8161354e565b8114613578575f80fd5b50565b5f8135905061358981613565565b92915050565b5f80604083850312156135a5576135a4612fa6565b5b5f6135b2858286016131bd565b92505060206135c38582860161357b565b9150509250929050565b6135d68161302e565b81146135e0575f80fd5b50565b5f813590506135f1816135cd565b92915050565b5f806040838503121561360d5761360c612fa6565b5b5f61361a858286016131bd565b925050602061362b858286016135e3565b9150509250929050565b5f805f6060848603121561364c5761364b612fa6565b5b5f613659868287016131bd565b935050602061366a868287016135e3565b925050604061367b86828701613110565b9150509250925092565b5f67ffffffffffffffff82111561369f5761369e6133e3565b5b6136a882613089565b9050602081019050919050565b5f6136c76136c284613685565b613441565b9050828152602081018484840111156136e3576136e26133df565b5b6136ee84828561348b565b509392505050565b5f82601f83011261370a576137096133db565b5b813561371a8482602086016136b5565b91505092915050565b5f805f806080858703121561373b5761373a612fa6565b5b5f613748878288016131bd565b9450506020613759878288016131bd565b935050604061376a87828801613110565b925050606085013567ffffffffffffffff81111561378b5761378a612faa565b5b613797878288016136f6565b91505092959194509250565b5f80604083850312156137b9576137b8612fa6565b5b5f6137c6858286016131bd565b92505060206137d7858286016131bd565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061382557607f821691505b602082108103613838576138376137e1565b5b50919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f613875826130f1565b9150613880836130f1565b925082820261388e816130f1565b915082820484148315176138a5576138a461383e565b5b5092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f6138e3826130f1565b91506138ee836130f1565b9250826138fe576138fd6138ac565b5b828204905092915050565b7f47656e65736973476f643a20436f6e7472616374206973206c6f636b656400005f82015250565b5f61393d601e8361306b565b915061394882613909565b602082019050919050565b5f6020820190508181035f83015261396a81613931565b9050919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026139cd7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82613992565b6139d78683613992565b95508019841693508086168417925050509392505050565b5f819050919050565b5f613a12613a0d613a08846130f1565b6139ef565b6130f1565b9050919050565b5f819050919050565b613a2b836139f8565b613a3f613a3782613a19565b84845461399e565b825550505050565b5f90565b613a53613a47565b613a5e818484613a22565b505050565b5b81811015613a8157613a765f82613a4b565b600181019050613a64565b5050565b601f821115613ac657613a9781613971565b613aa084613983565b81016020851015613aaf578190505b613ac3613abb85613983565b830182613a63565b50505b505050565b5f82821c905092915050565b5f613ae65f1984600802613acb565b1980831691505092915050565b5f613afe8383613ad7565b9150826002028217905092915050565b613b1782613061565b67ffffffffffffffff811115613b3057613b2f6133e3565b5b613b3a825461380e565b613b45828285613a85565b5f60209050601f831160018114613b76575f8415613b64578287015190505b613b6e8582613af3565b865550613bd5565b601f198416613b8486613971565b5f5b82811015613bab57848901518255600182019150602085019450602081019050613b86565b86831015613bc85784890151613bc4601f891682613ad7565b8355505b6001600288020188555050505b505050505050565b7f496e76616c696420746f6b656e206164647265737300000000000000000000005f82015250565b5f613c1160158361306b565b9150613c1c82613bdd565b602082019050919050565b5f6020820190508181035f830152613c3e81613c05565b9050919050565b7f496e76616c696420726563697069656e740000000000000000000000000000005f82015250565b5f613c7960118361306b565b9150613c8482613c45565b602082019050919050565b5f6020820190508181035f830152613ca681613c6d565b9050919050565b7f416d6f756e74206d7573742062652067726561746572207468616e207a65726f5f82015250565b5f613ce160208361306b565b9150613cec82613cad565b602082019050919050565b5f6020820190508181035f830152613d0e81613cd5565b9050919050565b5f81519050613d23816130fa565b92915050565b5f60208284031215613d3e57613d3d612fa6565b5b5f613d4b84828501613d15565b91505092915050565b7f496e73756666696369656e7420636f6e74726163742062616c616e63650000005f82015250565b5f613d88601d8361306b565b9150613d9382613d54565b602082019050919050565b5f6020820190508181035f830152613db581613d7c565b9050919050565b7f47656e65736973476f643a20436f6e747261637420697320616c7265616479205f8201527f6c6f636b65640000000000000000000000000000000000000000000000000000602082015250565b5f613e1660268361306b565b9150613e2182613dbc565b604082019050919050565b5f6020820190508181035f830152613e4381613e0a565b9050919050565b7f47656e65736973476f643a2043616e6e6f74207265636f766572206f776e20745f8201527f6f6b656e73000000000000000000000000000000000000000000000000000000602082015250565b5f613ea460258361306b565b9150613eaf82613e4a565b604082019050919050565b5f6020820190508181035f830152613ed181613e98565b9050919050565b5f606082019050613eeb5f83018661317f565b613ef8602083018561317f565b613f05604083018461320f565b949350505050565b7f47656e65736973476f643a20526f79616c74792066656520746f6f20686967685f82015250565b5f613f4160208361306b565b9150613f4c82613f0d565b602082019050919050565b5f6020820190508181035f830152613f6e81613f35565b9050919050565b7f47656e65736973476f643a20496e76616c696420726f79616c747920726563655f8201527f6976657200000000000000000000000000000000000000000000000000000000602082015250565b5f613fcf60248361306b565b9150613fda82613f75565b604082019050919050565b5f6020820190508181035f830152613ffc81613fc3565b9050919050565b61400c8161354e565b82525050565b5f6020820190506140255f830184614003565b92915050565b7f47656e65736973476f643a20496e76616c696420726563697069656e740000005f82015250565b5f61405f601d8361306b565b915061406a8261402b565b602082019050919050565b5f6020820190508181035f83015261408c81614053565b9050919050565b7f47656e65736973476f643a20556e73616665206d696e7420746f20636f6e74725f8201527f616374206e6f7420616c6c6f7765640000000000000000000000000000000000602082015250565b5f6140ed602f8361306b565b91506140f882614093565b604082019050919050565b5f6020820190508181035f83015261411a816140e1565b9050919050565b7f47656e65736973476f643a205175616e74697479206d757374206265206772655f8201527f61746572207468616e207a65726f000000000000000000000000000000000000602082015250565b5f61417b602e8361306b565b915061418682614121565b604082019050919050565b5f6020820190508181035f8301526141a88161416f565b9050919050565b7f47656e65736973476f643a205175616e74697479206d75737420626520736d615f8201527f6c6c6572207468616e206d61784d696e7450657254786e000000000000000000602082015250565b5f61420960378361306b565b9150614214826141af565b604082019050919050565b5f6020820190508181035f830152614236816141fd565b9050919050565b5f614247826130f1565b9150614252836130f1565b925082820190508082111561426a5761426961383e565b5b92915050565b7f5175616e74697479202800000000000000000000000000000000000000000000815250565b5f81905092915050565b5f6142aa82613061565b6142b48185614296565b93506142c481856020860161307b565b80840191505092915050565b7f29206578636565647320746f74616c537570706c792028000000000000000000815250565b7f2900000000000000000000000000000000000000000000000000000000000000815250565b5f61432682614270565b600a8201915061433682856142a0565b9150614341826142d0565b60178201915061435182846142a0565b915061435c826142f6565b6001820191508190509392505050565b7f47656e65736973476f643a20546f6b656e20646f6573206e6f742065786973745f82015250565b5f6143a060208361306b565b91506143ab8261436c565b602082019050919050565b5f6020820190508181035f8301526143cd81614394565b9050919050565b7f2e6a736f6e0000000000000000000000000000000000000000000000000000005f82015250565b5f614408600583614296565b9150614413826143d4565b600582019050919050565b5f61442982856142a0565b915061443582846142a0565b9150614440826143fc565b91508190509392505050565b5f614456826130f1565b91505f82036144685761446761383e565b5b600182039050919050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c005f82015250565b5f6144a7601f8361306b565b91506144b282614473565b602082019050919050565b5f6020820190508181035f8301526144d48161449b565b9050919050565b5f6144f56144f06144eb8461354e565b6139ef565b6130f1565b9050919050565b614505816144db565b82525050565b5f60408201905061451e5f8301856144fc565b61452b602083018461320f565b9392505050565b5f81519050919050565b5f82825260208201905092915050565b5f61455682614532565b614560818561453c565b935061457081856020860161307b565b61457981613089565b840191505092915050565b5f6080820190506145975f83018761317f565b6145a4602083018661317f565b6145b1604083018561320f565b81810360608301526145c3818461454c565b905095945050505050565b5f815190506145dc81612fd9565b92915050565b5f602082840312156145f7576145f6612fa6565b5b5f614604848285016145ce565b91505092915050565b5f6040820190506146205f83018561317f565b61462d60208301846132e5565b939250505056fea26469706673582212205e6ee927109b3510f03e4f8950488f540d34a959179da784b65ee122a3b65c8464736f6c634300081a0033697066733a2f2f516d553633637a734c393434677848354d45347746436759475044735972673772426147706e36424e5763654e4b2f' as const;