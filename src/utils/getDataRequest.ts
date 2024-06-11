
const DEFAULT_URL = 'http://localhost:3000/api/supa'
const CACHE_OPTION = "no-store"

export const getDataRequest = async(url = DEFAULT_URL, method = "GET", headers = undefined, body = null) => {

    const response = await fetch(url, {method, headers, body, cache: CACHE_OPTION})

    if(!response.ok) {
        throw new Error('Failed to fetch data')
    }

    console.log(response.json())

    return response.json()
}