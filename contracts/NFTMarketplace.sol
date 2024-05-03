// SPDX-License-Identifier: UNLICENSED 
pragma solidity ^0.8.24;        

// INTERNAL IMPORT FOR NFT OPENZEPPLIN

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

// Uncomment this line to use console.log  // Comment for optional debugging
import "hardhat/console.sol";

contract NFTMarketplace is ERC721URIStorage {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIds;
    Counters.Counter private _itemSold;

    address payable owner;

    // mapping(uint256 => MarketItem) private idOfMarketItems;

    // struct MarketItems {

    // }

}
