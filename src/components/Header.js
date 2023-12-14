import Logo from "../assets/Logo.svg"
import Nav from "./Nav"

function Header() {
    return (
        <header>
            <a href="#"><img src={Logo} /></a>
            <Nav />
        </header>
    )
}

export default Header