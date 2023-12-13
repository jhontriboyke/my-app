import photo1 from "../assets/Mario and Adrian b.jpg"
import photo2 from "../assets/restaurant.jpg"

function About() {
    return (
        <section className="about-section">
            <section className="about-description">
                <h2 className="heading">Little Lemon <br /> <span className="sub-heading black">Chicago</span></h2>
                <p className="description">Little Lemon is a charming neightborhood bistro that serves simple food and classic cocktails in a lively but casual enironment. The restaurant features a locallly-sourced menu with a daily specials</p>
            </section>
            <section className="about-images">
                <div className="about-img-1" >
                    <img src={photo1} />
                </div>
                <div className="about-img-2" >
                    <img src={photo2} />
                </div>
            </section>
        </section>
    )
}

export default About