export default function labelForChain(chain) {
  if (chain === "ethereum") return "Ethereum Mainnet"
  if (chain === "ens") return "ENS Chain"
  if (chain === "offchain") return "Offchain"
  throw new Error(`labelForChain: Unknown chain ${chain}`)
}