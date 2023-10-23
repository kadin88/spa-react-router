import { Link } from "react-router-dom"
import Header from "../../components/Header"
export default function AdminHome() {
    return (
        <main>
            <Header/>
            <h2>Área Administrativa</h2>
            <p>Esta é a área de administração da loja. Aqui você poderá adicionar produtos e ver os pedidos.</p>
        </main>
    )
}