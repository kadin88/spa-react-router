import { isRouteErrorResponse, useRouteError } from "react-router-dom"

export default function ProductBoundary () {
    const error = useRouteError()

    if(isRouteErrorResponse(error)){
        switch(error.status){
            case 404:
                return <h2>Produto nao encontrado</h2>
            case 401:
                return <h2>Você nao tem autorização</h2>
            case 400:
                return <h2>Algo errado na requisicao</h2>
            case 500:
                return <h2>Erro interno do Servidor</h2>
        }
    }
    return (
        <h2>Algo deu errado!</h2>
    )
}