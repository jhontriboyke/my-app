import Logo from "../assets/Little Lemon Logo.svg"
import Nav from "./Nav"
import { Link } from "react-router-dom"
import "./Header.css"

function Header() {
    return (
        <header>
            <div className="logo"><Link to="/"><img src={Logo} /></Link></div>
            <Nav />
        </header>
    )
}

export default Header