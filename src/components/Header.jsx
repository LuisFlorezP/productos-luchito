import { Link } from "react-router-dom";
import logo from "../assets/img/d1.png"
import carrito from "../assets/img/carrito.png"

const Header = () => {
    return (
        <header id="header">
            <img id="logo" src={logo} alt="" />
            <Link className="enlaceUno" to={"/"}>Home</Link>
            <Link className="enlaceDos" to={"/productos"}>Productos</Link>
            <img id="carrito" src={carrito} alt="" />
        </header>
    );
};

export default Header;