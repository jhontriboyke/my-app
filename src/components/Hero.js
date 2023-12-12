import HeroImage from "../assets/restauranfood.jpg"

function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-background"></div>
            <div className="hero-description">
                <h1>Little Lemon <br /> <span>Chicago</span></h1>

                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
                <button role="reserve-table">Reserve a Table</button>
            </div>
            <div className="hero-image">
                <img src={HeroImage} />
            </div>
        </section>
    )
}

export default Hero