import Logo from "../assets/little-lemon_vertical.png"
import "./Footer.css"

function Footer() {
    return (
        <footer>
            <img src={Logo} />
            <div>
                <h4>Doormat Navigation</h4>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservations</a></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
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