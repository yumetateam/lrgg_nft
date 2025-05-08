// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "../contracts/GenesisGodNFT.sol";

contract GenesisGodNFTTest {
    GenesisGodNFT public nft;

    constructor() {
        // 部署测试合约时同时部署 GenesisGodNFT
        nft = new GenesisGodNFT();

        // 设定基础 URI
        nft.setBaseTokenURI("https://example.com/metadata/");

        // 默认部署者有 ADMIN_ROLE 和 MINTER_ROLE，无需再次授权
    }

    function testMint() public {
        // mint 第一个 token 给调用者
        nft.mint(msg.sender, 100001);
    }

    function testSafeMint() public {
        nft.safeMint(msg.sender, 100002);
    }

    function testSetURI(string memory newUri) public {
        nft.setBaseTokenURI(newUri);
    }

    function testGrantMinter(address account) public {
        nft.grantMinter(account);
    }

    function testRevokeMinter(address account) public {
        nft.revokeMinter(account);
    }

    function testLockContract() public {
        nft.lockContract();
    }

    function getTokenURI(uint256 tokenId) public view returns (string memory) {
        return nft.tokenURI(tokenId);
    }

    function getOwnedTokens(address owner, uint256 cursor, uint256 size)
        public
        view
        returns (uint256[] memory, uint256)
    {
        return nft.tokensOfOwnerBySize(owner, cursor, size);
    }

    function getSupply() public view returns (uint256) {
        return nft.totalSupply();
    }
}
