import Logo from "../assets/Little Lemon Logo.svg"
import Nav from "./Nav"
import "./Header.css"

function Header() {
    return (
        <header>
            <div className="logo"><a href="#"><img src={Logo} /></a></div>
            <Nav />
        </header>
    )
}

export default Header