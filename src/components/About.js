import image1 from "../assets/Mario and Adrian b.jpg"
import image2 from "../assets/restaurant.jpg"

function About() {
    return (
        <section className="about">
            <h2 className="title">Little Lemon<br /><span className="subtitle">Chicago</span></h2>
            <p className="description">Little Lemon is a charming neightborhood bistro
                that serves simple food and classic cocktails in a lively but casual enironment.
                The restaurant features a locallly-sourced menu with a daily specials</p>

            <div className="image-box image-box-1"><img src={image1} /></div>
            <div className="image-box image-box-2"><img src={image2} /></div>
        </section>
    )
}

export default About