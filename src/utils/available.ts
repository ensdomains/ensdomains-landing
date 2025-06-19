import { createEnsPublicClient } from '@ensdomains/ensjs'
import { validateName } from '@ensdomains/ensjs/utils'
import { fallback, http } from 'viem'
import { mainnet } from 'viem/chains'

const publicClient = createEnsPublicClient({
  chain: mainnet,
  transport: fallback([
    http(
      'https://lb.drpc.org/ogrpc?network=ethereum&dkey=AgBISc2US0WgjMYhz9MRMJZsJaE8hzcR76fgOpXEh2H0',
    ),
    http(
      'https://lb.drpc.org/ogrpc?network=ethereum&dkey=AnmpasF2C0JBqeAEzxVO8aR5N_OwLy8R8JyZPkfoZsMe',
    ),
    http('https://mainnet.gateway.tenderly.co/4imxc4hQfRjxrVB2kWKvTo'),
  ]),
})

export const checkBoxAvailable = async (name: string): Promise<boolean> => {
  const res = await fetch(
    `https://dotbox-worker.ens-cf.workers.dev/search?domain=${encodeURI(name)}.box`,
  )
  const json = await res.json()

  if (json.data.status === 'INVALID_DOMAIN') {
    throw new Error(json.data.status)
  }
  return json.data.available
}

export const checkEthAvailable = async (name: string) => {
  validateName(`${name}.eth`)

  return await publicClient.getAvailable({ name: `${name}.eth` })
}
