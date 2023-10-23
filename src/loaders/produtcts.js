import products from "../database.json"

export default function loadProduct ({params}) {
    // O sinal '+' antes do productId serve para fazer um cast de string para number
    const product = products.find(p => p.id === +params.productId)
    if(!product){
        //simulando um erro 404
        throw new Response("404 Not Found", {status: 404})
    }

    return product
}