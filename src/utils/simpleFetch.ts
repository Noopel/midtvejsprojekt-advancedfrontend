const useSimpleFetch = async (url: string, method: string, headers: {} | undefined, body: any | undefined) => {
    let data: null | any = null

    await fetch(url, {method, headers, body, cache: "no-store"})
    .then(res => res.json())
    .then(fetchedData => {
        console.log(fetchedData)
        data = fetchedData
    })
    .catch(reason => {
        console.warn(reason)
    })
  
    return data
  }
  
  export default useSimpleFetch