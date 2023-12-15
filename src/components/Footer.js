import Logo from "../assets/little-lemon_vertical.png"
import "./Footer.css"

import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer>
            <img src={Logo} />
            <div>
                <h4>Doormat Navigation</h4>
                <ul>
                    <Link to='/'>Home</Link>
                    <Link to='/about-us'>About</Link>
                    <Link to=''>Menu</Link>
                    <Link to=''>Reservations</Link>
                    <Link to=''>Order Online</Link>
                    <Link to=''>Login</Link>

                </ul>
            </div>
            <div>
                <h4>Contact</h4>
                <ul>
                    <li>Address<br />Chicago St.12 USA</li>
                    <li>Phone Number<br />+123 4567 890</li>
                    <li>Email<br />littlelemon@example.com</li>
                </ul>
            </div>
            <div>
                <h4>Social Media Links</h4>
                <ul>

                </ul>
            </div>
        </footer>
    )
}

export default Footer