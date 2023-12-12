import Logo from "../assets/Logo.svg"

function Footer() {
    return (
        <footer>
            <img src={Logo} alt="logo" />
            <section>
                <h4>Doormat Navigation</h4>
                <nav role="footer-navigation">
                    <ul role="footer-navigation-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Reservations</a></li>
                        <li><a href="#">Order Online</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </nav>
            </section>
            <section>
                <h4>Contact</h4>
                <ul role="contact-section">
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </section>
            <section>
                <h4>Social Links</h4>
                <ul role="social-links">
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </section>
        </footer>
    )
}


export default Footer