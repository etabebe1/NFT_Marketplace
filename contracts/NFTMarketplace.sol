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
    uint256 listingPrice = 0.0015 ether;

    mapping(uint256 => MarketItem) private idOfMarketItems;

    struct MarketItem {
        uint256 tokenId; 
        address seller;
        address owner;
        uint price;
        bool sold;
    }
    event marketItemCreates(
        uint256 indexed _tokenIds,
        address seller,
        address owner, 
        uint256 price,
        bool sold
        ); 

    modifier onlyOwner {
        require(
            msg.sender == owner,
             "Only the owner can change listing price."
             );
        _;
    }
    constructor () ERC721("NFT Metaverse Token", "Verse Grid") {
        owner = payable(msg.sender);
    }
    function updateLisitngPrice (uint256 _listingPrice) public payable onlyOwner{
    listingPrice = _listingPrice;
    }
    function getListingPrice () public view returns (uint256) {
        return listingPrice;
    }
    // Function to create NFT token
    function createToken(string memory tokenURI, uint256 price) public payable returns(uint256) {
        _tokenIds.increment;
        uint256 newTokenId = _tokenIds.current();

        // _mint function comming from ERC721.sol
        _mint(msg.sender, newTokenId);
        
        // _setTokenURI  function 
        _setTokenURI(newTokenId, tokenURI);

        createMarketItem(newTokenId, price);

        return newTokenId;
    }
    // Function to create market Item
    function createMarketItem(uint256 tokenId, uint256 price) private {
        require(price > 0 , "Price must be at least 1");
        require(msg.value == listingPrice, "Price must be equal to listing");

        idOfMarketItems[tokenId] = MarketItem(
            tokenId,
            payable(msg.sender),
            payable(address(this)),
            price,
            false
        );

        // _transfer function comming from ERC721.sol file (@openzepplin)
        _transfer(msg.sender, address(this), tokenId);

        emit marketItemCreates(tokenId,msg.sender, address(this), price, false);
    }
    // Function to resale token
    function reSellToken(uint256 tokenId, uint256 price) public payable {
        require(idOfMarketItems[tokenId].owner == msg.sender, 
        "Only item owner can perform this operation"
        );
        require(msg.value == listingPrice, "Price must be equal to listing price");
    
        idOfMarketItems[tokenId].sold = false;
        idOfMarketItems[tokenId].price = price;
        idOfMarketItems[tokenId].seller = payable(msg.sender);
        idOfMarketItems[tokenId].owner = payable(address(this));

        // _itemSold comming from Counter
        _itemSold.decrement();

        // _transfer function comming from ERC721.sol file (@openzepplin)
        _transfer(msg.sender,address(this), tokenId);
    }

    // Function to create market sale
    function createMarketSale(uint256 tokenId) public payable {
        uint256 price = idOfMarketItems[tokenId].price;
        
        require(msg.value == price, "Please submit the asking price in order to complete the purcahse");

        idOfMarketItems[tokenId].owner == payable(msg.sender);
        idOfMarketItems[tokenId].sold == true;
        idOfMarketItems[tokenId].seller == payable(address(0));

        // _itemSolde comming from Counter
        _itemSold.increment();
        
        // _transfer function comming from ERC721.sol file (@openzepplin)
        _transfer(address(this), msg.sender, tokenId);

        payable(owner).transfer(listingPrice);
        payable(idOfMarketItems[tokenId].seller).transfer(msg.value);
    }

    // Gettting unsold NFT Data
    function fetchMarketItem() public view returns (MarketItem[] memory) {
        uint256 itemCount = _tokenIds.current();
        uint256 unSoldItemCount = _tokenIds.current() - _itemSold.current();
        uint256 currentIndex = 0;

        MarketItem[] memory items = new MarketItem[](unSoldItemCount);

        for(uint256 i = 0; i < itemCount; i++) {
            if(idOfMarketItems[i + 1].owner == address(this)) {
                uint256 currentId = i + 1;

                MarketItem storage currentItem = idOfMarketItems[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }

        return items;
    }


    // function to purcahse item
    function fetchMyNFT() public view returns (MarketItem[] memory) {
        uint256 totalCount = _tokenIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for(uint256 i = 0; i < totalCount; i++) {
            if(idOfMarketItems[i + 1].owner == msg.sender) {
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for(uint256 i = 0; i < totalCount; i++){
           if(idOfMarketItems[i + 1].owner == msg.sender) {
            uint256 currentId = i +1;
            MarketItem storage currentItem = idOfMarketItems[currentId];
            items[currentIndex] = currentItem;
            currentIndex += 1;
           }
         }
         return items;
    }


    // Function for Single User Items
    function fetchItemsListed() public view returns (MarketItem[] memory) {
        uint256 totalCount = _tokenIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for(uint256 i = 0; i < totalCount; i++) {
            if(idOfMarketItems[i + 1].seller == msg.sender) {
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);

        for(uint256 i = 0; i < totalCount; i++){
            if(idOfMarketItems[i + 1].seller == msg.sender) {
                uint256 currentId = i + 1;

                MarketItem storage currentItem = idOfMarketItems[currentId];
                items[currentIndex];
                currentIndex += 1;
            }
        }

        return items;
    }
}