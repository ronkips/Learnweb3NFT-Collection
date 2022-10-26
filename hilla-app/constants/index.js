export const NFT_CONTRACT_ADDRESS =
  "0xD255215c582A770d00e3F4C33A66A41f7B2Feca8";
export const abi = [
  {
    type: "constructor",
    payable: false,
    inputs: [
      { type: "string", name: "baseURI" },
      { type: "address", name: "whitelistContract" }
    ]
  },
  {
    type: "event",
    anonymous: false,
    name: "Approval",
    inputs: [
      { type: "address", name: "owner", indexed: true },
      { type: "address", name: "approved", indexed: true },
      { type: "uint256", name: "tokenId", indexed: true }
    ]
  },
  {
    type: "event",
    anonymous: false,
    name: "ApprovalForAll",
    inputs: [
      { type: "address", name: "owner", indexed: true },
      { type: "address", name: "operator", indexed: true },
      { type: "bool", name: "approved", indexed: false }
    ]
  },
  {
    type: "event",
    anonymous: false,
    name: "OwnershipTransferred",
    inputs: [
      { type: "address", name: "previousOwner", indexed: true },
      { type: "address", name: "newOwner", indexed: true }
    ]
  },
  {
    type: "event",
    anonymous: false,
    name: "Transfer",
    inputs: [
      { type: "address", name: "from", indexed: true },
      { type: "address", name: "to", indexed: true },
      { type: "uint256", name: "tokenId", indexed: true }
    ]
  },
  {
    type: "function",
    name: "_paused",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [],
    outputs: [{ type: "bool" }]
  },
  {
    type: "function",
    name: "_price",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [],
    outputs: [{ type: "uint256" }]
  },
  {
    type: "function",
    name: "approve",
    constant: false,
    payable: false,
    inputs: [
      { type: "address", name: "to" },
      { type: "uint256", name: "tokenId" }
    ],
    outputs: []
  },
  {
    type: "function",
    name: "balanceOf",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [{ type: "address", name: "owner" }],
    outputs: [{ type: "uint256" }]
  },
  {
    type: "function",
    name: "getApproved",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [{ type: "uint256", name: "tokenId" }],
    outputs: [{ type: "address" }]
  },
  {
    type: "function",
    name: "isApprovedForAll",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [
      { type: "address", name: "owner" },
      { type: "address", name: "operator" }
    ],
    outputs: [{ type: "bool" }]
  },
  {
    type: "function",
    name: "maxTokenIds",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [],
    outputs: [{ type: "uint256" }]
  },
  {
    type: "function",
    name: "mint",
    constant: false,
    stateMutability: "payable",
    payable: true,
    inputs: [],
    outputs: []
  },
  {
    type: "function",
    name: "name",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [],
    outputs: [{ type: "string" }]
  },
  {
    type: "function",
    name: "owner",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [],
    outputs: [{ type: "address" }]
  },
  {
    type: "function",
    name: "ownerOf",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [{ type: "uint256", name: "tokenId" }],
    outputs: [{ type: "address" }]
  },
  {
    type: "function",
    name: "presaleEnded",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [],
    outputs: [{ type: "uint256" }]
  },
  {
    type: "function",
    name: "presaleMint",
    constant: false,
    stateMutability: "payable",
    payable: true,
    inputs: [],
    outputs: []
  },
  {
    type: "function",
    name: "presaleStarted",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [],
    outputs: [{ type: "bool" }]
  },
  {
    type: "function",
    name: "renounceOwnership",
    constant: false,
    payable: false,
    inputs: [],
    outputs: []
  },
  {
    type: "function",
    name: "safeTransferFrom",
    constant: false,
    payable: false,
    inputs: [
      { type: "address", name: "from" },
      { type: "address", name: "to" },
      { type: "uint256", name: "tokenId" }
    ],
    outputs: []
  },
  {
    type: "function",
    name: "safeTransferFrom",
    constant: false,
    payable: false,
    inputs: [
      { type: "address", name: "from" },
      { type: "address", name: "to" },
      { type: "uint256", name: "tokenId" },
      { type: "bytes", name: "data" }
    ],
    outputs: []
  },
  {
    type: "function",
    name: "setApprovalForAll",
    constant: false,
    payable: false,
    inputs: [
      { type: "address", name: "operator" },
      { type: "bool", name: "approved" }
    ],
    outputs: []
  },
  {
    type: "function",
    name: "setPaused",
    constant: false,
    payable: false,
    inputs: [{ type: "bool", name: "val" }],
    outputs: []
  },
  {
    type: "function",
    name: "startPresale",
    constant: false,
    payable: false,
    inputs: [],
    outputs: []
  },
  {
    type: "function",
    name: "supportsInterface",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [{ type: "bytes4", name: "interfaceId" }],
    outputs: [{ type: "bool" }]
  },
  {
    type: "function",
    name: "symbol",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [],
    outputs: [{ type: "string" }]
  },
  {
    type: "function",
    name: "tokenByIndex",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [{ type: "uint256", name: "index" }],
    outputs: [{ type: "uint256" }]
  },
  {
    type: "function",
    name: "tokenIds",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [],
    outputs: [{ type: "uint256" }]
  },
  {
    type: "function",
    name: "tokenOfOwnerByIndex",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [
      { type: "address", name: "owner" },
      { type: "uint256", name: "index" }
    ],
    outputs: [{ type: "uint256" }]
  },
  {
    type: "function",
    name: "tokenURI",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [{ type: "uint256", name: "tokenId" }],
    outputs: [{ type: "string" }]
  },
  {
    type: "function",
    name: "totalSupply",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [],
    outputs: [{ type: "uint256" }]
  },
  {
    type: "function",
    name: "transferFrom",
    constant: false,
    payable: false,
    inputs: [
      { type: "address", name: "from" },
      { type: "address", name: "to" },
      { type: "uint256", name: "tokenId" }
    ],
    outputs: []
  },
  {
    type: "function",
    name: "transferOwnership",
    constant: false,
    payable: false,
    inputs: [{ type: "address", name: "newOwner" }],
    outputs: []
  },
  {
    type: "function",
    name: "withdraw",
    constant: false,
    payable: false,
    inputs: [],
    outputs: []
  }
];
