import { Link } from "react-router-dom";

export default function Header (){
    return (
        <header>
            <nav style={{display: "flex", gap: "2rem"}}>
                <Link to="/">Home</Link>
                <Link to="/products">Lista de Produtos</Link>
                <Link to="/cart">Carrinho</Link>
                <Link to="/admin">Admin</Link>
            </nav>
        </header>
    )
}