export default function primaryColorForStatus(status) {
  if (status === 'research') return 'orange'
  if (status === 'development') return 'blue'
  if (status === 'testnet') return 'green'
  if (status === 'done') return 'black'
  throw new Error('primaryColorForStatus: Invalid status');
}