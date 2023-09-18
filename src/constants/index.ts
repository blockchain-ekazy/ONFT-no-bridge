export const CHAIN_TYPES = {
  // Ethereum: "0x1",
  // Avalanche: "0xa86a",
  // BSC: "0x38",
  // Polygon: "0x89",
  // Fantom: "0xfa",
  "MoonBase-Testnet": "0x507",
  "Ethereum-Goerli": "0x5",
  Mumbai: "0x13881",
  "Avalanche-Fuji": "0xa869",
  "BNB-Testnet": "0x61",
  // "ftm-test": "0xfa2",
  // "opt-test": "0x1a4",
};

export const DINARA_WALLETS = {
  Ethereum: "0x404A3d7948F71A857e8AE6Cc38Ad28be114cAB8B",
  Avalanche: "0xB759bA401F51727Ec125255FB4CB050f96E9518D",
  Polygon: "0x2C9F7BC75431CFc0b68dDD3D6400D770C43AEfb2",
  BSC: "0x08622A02f1652bfB0e6Dd2fCFB3AA3F4D05b32C8",
  Fantom: "0x8B15eeeD187ab017046c63A3cf34CD5703B53dA2",
  Mumbai: "0xF0568d81d685a0626638f2a6EbeCdF83ef4fF335",
};

export const CHAIN_COLORS = {
  // [CHAIN_TYPES.Ethereum]: "#627EEA",
  // [CHAIN_TYPES.Avalanche]: "#FC2947",
  // [CHAIN_TYPES.BSC]: "#F0B90B",
  // [CHAIN_TYPES.Polygon]: "#9849FC",
  // [CHAIN_TYPES.Fantom]: "#0172FF",
  [CHAIN_TYPES["Ethereum-Goerli"]]: "#627eea",
  [CHAIN_TYPES.Mumbai]: "#8247e5",
  [CHAIN_TYPES["Avalanche-Fuji"]]: "#ff0000",
  [CHAIN_TYPES["BNB-Testnet"]]: "#ffdd01",
  [CHAIN_TYPES["MoonBase-Testnet"]]: "#4ab6b4",
  // [CHAIN_TYPES["ftm-test"]]: "#001f68",
  // [CHAIN_TYPES["opt-test"]]: "#ff0000",
};

export const CHAIN_NAMES = {
  // [CHAIN_TYPES.Ethereum]: "Ethereum",
  // [CHAIN_TYPES.Avalanche]: "Avalanche",
  // [CHAIN_TYPES.BSC]: "BNB Chain",
  // [CHAIN_TYPES.Polygon]: "Polygon",
  // [CHAIN_TYPES.Fantom]: "Fantom",
  [CHAIN_TYPES["Ethereum-Goerli"]]: "Goerli",
  [CHAIN_TYPES.Mumbai]: "Mumbai",
  [CHAIN_TYPES["Avalanche-Fuji"]]: "Avalanche Fuji",
  [CHAIN_TYPES["BNB-Testnet"]]: "BNB Testnet",
  [CHAIN_TYPES["MoonBase-Testnet"]]: "MoonBase Testnet",
  // [CHAIN_TYPES["ftm-test"]]: "Fantom Testnet",
  // [CHAIN_TYPES["opt-test"]]: "Optimism Testnet",
};

// export const APIS_BASE_URL = "https://traversemyonft.com";
export const APIS_BASE_URL = "https://onft-backend.vercel.app";
// export const APIS_BASE_URL = "http://localhost:3001";

export const TRAVERSAL_CONTRACT = {
  [CHAIN_TYPES["Ethereum-Goerli"]]:
    "0xeE1f1824770F42F164F638a36c67d0dB883E1d91",
  [CHAIN_TYPES.Mumbai]: "0x9591645563EEB940EbB90a476421D69c4a8d8384",
  [CHAIN_TYPES["Avalanche-Fuji"]]: "0x13AB0E9348718F78A4C1f1E9A1fe33C027413658",
  [CHAIN_TYPES["BNB-Testnet"]]: "0xc615F412Fbd1314b4a52614725F13FDe4E156bE5",
  [CHAIN_TYPES["MoonBase-Testnet"]]:
    "0xD9bA57d5FCaf091bf5c1c8eaECB23533648fb5DA",
  // [CHAIN_TYPES["ftm-test"]]: "0xD9bA57d5FCaf091bf5c1c8eaECB23533648fb5DA",
  // [CHAIN_TYPES["opt-test"]]: "0xD9bA57d5FCaf091bf5c1c8eaECB23533648fb5DA",
};

export const CHAIN_TO_LZ = {
  [CHAIN_TYPES["Ethereum-Goerli"]]: "10121",
  [CHAIN_TYPES.Mumbai]: "10109",
  [CHAIN_TYPES["Avalanche-Fuji"]]: "10106",
  [CHAIN_TYPES["BNB-Testnet"]]: "10102",
  [CHAIN_TYPES["MoonBase-Testnet"]]: "10126",
  // [CHAIN_TYPES["ftm-test"]]: "10112",
  // [CHAIN_TYPES["opt-test"]]: "10132",
};
