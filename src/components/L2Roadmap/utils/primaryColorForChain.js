export default function primaryColorForChain(chain) {
  if (chain === "ethereum") return "green"
  if (chain === "offchain") return "orange"
  if (chain === "ens") return "blue"
  return "red"
}
