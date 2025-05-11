export default {
  async fetch(request: Request) {
    const url = new URL(request.url)
    const domain = url.searchParams.get('domain')

    if (!domain) {
      return new Response(JSON.stringify({ error: 'Missing domain' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    if (domain.includes('#')) {
      return new Response(JSON.stringify({
        isInvalid: true,
        isLoading: false,
      }), {
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const [name, tld] = domain.split('.')
    const response = {
      isInvalid: false,
      isLoading: false,
      isEnsAvailable: false,
      isBoxAvailable: false,
      isBoxInvalid: false,
    }

    try {
      if (tld === 'eth') {
        response.isEnsAvailable = await checkEthAvailable(name)
      }
      else if (tld === 'box') {
        response.isBoxAvailable = await checkBoxAvailable(name)
      }
      else {
        try {
          response.isBoxAvailable = await checkBoxAvailable(name)
        }
        catch {
          response.isBoxInvalid = true
        }

        try {
          response.isEnsAvailable = name.length >= 2 && await checkEthAvailable(name)
        }
        catch {
          response.isInvalid = true
        }
      }
    }
    catch {
      response.isInvalid = true
    }

    return new Response(JSON.stringify(response), {
      headers: { 'Content-Type': 'application/json' },
    })
  },
}

// Uses Dotbox's worker
async function checkBoxAvailable(name: string) {
  const res = await fetch(`https://dotbox-worker.ens-cf.workers.dev/search?domain=${name}.box`)
  const json = await res.json()
  if (json.data.status === 'INVALID_DOMAIN') {
    throw new Error(json.data.status)
  }
  return json.data.available
}

// Uses a lightweight ENS ideas API (no ensjs or viem)
async function checkEthAvailable(name: string) {
  const res = await fetch(`https://api.ensideas.com/ens/resolve/${name}.eth`)
  const json = await res.json()
  return !json.address // If no address is found, it's available
}
