// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
contract HiddenInPlainSight is ERC721, ERC721Enumerable, ERC721URIStorage {
    using SafeMath for uint256;
    uint public constant mintPrice = 0;

    address public owner;
    address public royalty;
    address public ngo1;
    address public ngo2;

    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }
    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }
    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
    constructor() ERC721("Hidden In Plain Sight", "TLJ") {
        owner = 0x6BB524586a42DaD39F6CDde19798C748Efc7CdF9; //Ently
        royalty = 0x0F7C886e278eFE0b9fEAD239E430D67C3144F8Bf; //Trevor Lawrence Jr.
        ngo1 = 0xFC941bfaaF6c8117fe4b87b5414d88F05dE0E103; //EJI
        ngo2 = 0x0AC6B7CD1B21a1e48B338405E3975cfb82E4264B; //DW
    }
    function mint(string memory _uri) public payable {

        uint256 mintIndex = totalSupply();

        require(msg.value == mintPrice, "Provide more ETH");
        _safeMint(msg.sender, mintIndex);
        _setTokenURI(mintIndex, _uri);

        payable(owner).transfer(msg.value * 15 /100);
        payable(royalty).transfer(msg.value * 65 /100);
        payable(ngo1).transfer(msg.value/10);
        payable(ngo2).transfer(mas.value/10);
    }
}
