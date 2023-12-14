import Logo from "../assets/little lemon-vertical.png"

function Footer() {
    return (
        <footer>
            <img src={Logo} />
            <ul>
                <header><h4>Doormat Navigation</h4></header>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Reservations</a></li>
                <li><a href="#">Order Online</a></li>
                <li><a href="#">Login</a></li>
            </ul>
            <ul>
                <header><h4>Contact</h4></header>
                <li>Address<br />Chicago St.12 USA</li>
                <li>Phone Number<br />+123 4567 890</li>
                <li>Email<br />littlelemon@example.com</li>
            </ul>
            <ul>
                <header><h4>Social Media Links</h4></header>
            </ul>
        </footer>
    )
}

export default Footer