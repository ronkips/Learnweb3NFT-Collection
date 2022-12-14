// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./IWhitelist.sol";

contract CryptoDevs is ERC721Enumerable, Ownable {
    /**
     * token will be the concatation of the `baseURI` and the `tokenId`.
     */
    string _baseTokenURI;

    //Price is the price of one Crypto NFT
    uint256 public _price = 0.001 ether;

    //Pause is used to pause the contract in case of an emergency
    bool public _paused;

    // max number of CryptoDevs
    uint256 public maxTokenIds = 20;

    //total number of tokenIds minted
    uint256 public tokenIds;

    //Whitelist contract instance
    IWhitelist whitelist;

    // boolean to keep track of whether presale started or not
    bool public presaleStarted;

    // timestamp  for when the presale will end
    uint256 public presaleEnded;
    //protecting against certaion attacks
    //resitrictin accesss to certain functions
    // validating input parameters
    modifier onlyWhenNotPaused() {
        require(!_paused, "Contract currently paused");
        _;
    }

    /**
     * ERC721 constructor takes in a `name` and a `symbol` to the token collection.
     *  Constructor for Crypto Devs takes in the baseURI to set _baseTokenURI for the collection.
     */
    constructor(string memory baseURI, address whitelistContract)
        ERC721("Crypto Devs", "CID")
    {
        _baseTokenURI = baseURI;
        whitelist = IWhitelist(whitelistContract);
    }

    //startPresale starts a presale for the whitelisted addresses

    function startPresale() public onlyOwner {
        presaleStarted = true;
        // Set presaleEnded time as current timestamp + 5 minutes
        presaleEnded = block.timestamp + 5 minutes;
    }

    //presaleMint  allows a user to mint one NFT per transaction during the presale

    function presaleMint() public payable onlyWhenNotPaused {
        require(
            presaleStarted && block.timestamp < presaleEnded,
            "Presale is not running"
        );
        require(
            whitelist.whitelistedAddresses(msg.sender),
            "You are not whitelisted"
        );
        require(tokenIds < maxTokenIds, "Exceeded maximum crypto Devs Supply");
        require(msg.value >= _price, "Ether sent is not correct");
        tokenIds += 1;
        //_safeMint is a safer version of the _mint function as it ensures that
        // if the address being minted to is a contract, then it knows how to deal with ERC721 tokens
        // If the address being minted to is not a contract, it works the same way as _mint
        _safeMint(msg.sender, tokenIds);
    }

    //mint allows a user to mint 1 NFT per transaction after the presale has ended.
    function mint() public payable onlyWhenNotPaused {
        require(
            presaleStarted && block.timestamp >= presaleEnded,
            "Presale has not ended yet"
        );
        require(tokenIds < maxTokenIds, "Exceed maximum Crypto Devs supply");
        require(msg.value >= _price, "Ether sent is not correct");
        tokenIds += 1;
        _safeMint(msg.sender, tokenIds);
    }

    /**
     * _baseURI overides the Openzeppelin's ERC721 implementation which by default
     * returned an empty string for the baseURI
     */
    //virtual-Function that allows an to inheriting contract to override it's behavior
    //override- function that overrides that base function
    function _baseURI() internal view virtual override returns (string memory) {
        return _baseTokenURI;
    }

    //setPaused makes the contract paused or unpaused
    function setPaused(bool val) public onlyOwner {
        _paused = val;
    }

    //withdraw sends all the ether in the conract to the owner of the contract
    function withdraw() public onlyOwner {
        address _owner = owner();
        uint256 amount = address(this).balance;
        (bool sent, ) = _owner.call{value: amount}("");
        require(sent, "Failed to send Ether");
    }

    // function to receive Ether. msg.data must be empty
    receive() external payable {}

    // function called when msg.data is not empty
    fallback() external payable {}
}
