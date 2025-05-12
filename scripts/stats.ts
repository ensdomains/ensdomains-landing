import { writeFile } from 'node:fs/promises'
import { Dune } from 'dune-api-client'

const dune = new Dune(process.env.DUNE_KEY)

type DuneTable = { _col0: number }
let res = await dune.results<DuneTable>(6491)

if (!res.data) {
  throw new Error(res.error)
}

const owners = res.data.result?.rows[0]._col0

res = await dune.results<DuneTable>(5768)

if (!res.data) {
  throw new Error(res.error)
}

const names = res.data.result?.rows[0]._col0

await writeFile(
  'src/stats/landing.json',
  JSON.stringify({
    owners,
    names,
    integrations: 750,
  }),
  'utf-8',
)
