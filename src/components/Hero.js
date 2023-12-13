import HeroImage from "../assets/restauranfood.jpg"

function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-description full-bleed">
                <h1 className="heading">Little Lemon <br /> <span className="sub-heading">Chicago</span></h1>
                <p className="hero-paragraph">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
                <button role="reserve-table" className="cta">Reserve a Table</button>
            </div>
            <div className="hero-img">
                <img src={HeroImage} />
            </div>

        </section>
    )
}

export default Hero