import hero_image from "../assets/restauranfood.jpg"

function Hero() {
    return (
        <section className="hero">
            <div className="hero-wrapper">
                <div className="hero-text">
                    <h2 className="title">Little Lemon<br /><span className="subtitle">Chicago</span></h2>
                    <p className="description">We are a family owned Mediterranean restaurant focused on
                        traditional recipes served with a modern twist
                    </p>
                    <button role="reserve-button" className="cta">Reserve a table</button>

                </div>
                <div className="hero-image">
                    <div className="hero-image-wrapper">
                        <img src={hero_image} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero