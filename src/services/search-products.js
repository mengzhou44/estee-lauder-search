import http from './_http'

export async function searchProducts(query, onFound){

    try{
        const res= await  http.get(`/search?query=${query}`)
        onFound({data: res.data})
    } catch {
          onFound({error: 'Sorry,  encountered some networking issues. Plese ask the technical team at 1-800-367-9015 for help.'})
    }
}