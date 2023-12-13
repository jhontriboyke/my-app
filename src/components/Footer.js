import Logo from "../assets/little lemon-vertical.png"

function Footer() {
    return (
        <footer>
            <img src={Logo} alt="logo" />
            <section className="doormat-navigation">
                <h4>Doormat Navigation</h4>
                <nav role="footer-navigation">
                    <ul role="footer-navigation-links" className="footer-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Reservations</a></li>
                        <li><a href="#">Order Online</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </nav>
            </section>
            <section className="contact-section">
                <h4>Contact</h4>
                <ul role="contact-section" className="footer-links">
                    <li>Address <br /> <span className="link-light">Chicago St.12 USA</span></li>
                    <li>Phone Number <br /> <span className="link-light">+123 4567 890</span></li>
                    <li>Email <br /> <span className="link-light">littlelemon@example.com</span></li>
                </ul>
            </section>
            <section className="social-links-section">
                <h4>Social Links</h4>

            </section>
        </footer>
    )
}


export default Footer