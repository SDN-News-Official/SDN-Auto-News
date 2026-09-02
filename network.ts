import { base } from "viem/chains";

// Base Mainnet Configuration for Coinbase CDP & Agentic Payments
export const agentConfig = {
  networkId: "base", // Base Mainnet
  chain: base,
  cdpApiKeyName: process.env.CDP_API_KEY_NAME,
  cdpPrivateKey: process.env.CDP_API_KEY_PRIVATE_KEY,
  solanaRpcUrl: process.env.NEXT_PUBLIC_SOLANA_RPC_URL,
};
