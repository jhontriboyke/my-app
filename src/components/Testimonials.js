import profile from "../assets/Image-45.png"

function Testimonials() {
    return (
        <section className="testimonials-section full-bleed">
            <header className="testimonials-header ">
                <h2 className="big-heading">Testimonials</h2>
            </header>
            <section className="testimonials-wrapper ">
                <section className="testimonial">
                    <header className="testimonial-profile">
                        <img src={profile} />
                        <div>
                            <span className="profile-name">Jhontri Boyke</span> <br />
                            <span className="profile-rating">4.5/5.0</span>
                        </div>
                    </header>
                    <p className="testimonial-review">Food here all awesome, the chefs and waitress are kind!</p>
                </section>
                <section className="testimonial">
                    <header className="testimonial-profile">
                        <img src={profile} />
                        <div>
                            <span className="profile-name">Jhontri Boyke</span> <br />
                            <span className="profile-rating">4.5/5.0</span>
                        </div>
                    </header>
                    <p className="testimonial-review">Food here all awesome, the chefs and waitress are kind!</p>
                </section>
                <section className="testimonial">
                    <header className="testimonial-profile">
                        <img src={profile} />
                        <div>
                            <span className="profile-name">Jhontri Boyke</span> <br />
                            <span className="profile-rating">4.5/5.0</span>
                        </div>
                    </header>
                    <p className="testimonial-review">Food here all awesome, the chefs and waitress are kind!</p>
                </section>
                <section className="testimonial">
                    <header className="testimonial-profile">
                        <img src={profile} />
                        <div>
                            <span className="profile-name">Jhontri Boyke</span> <br />
                            <span className="profile-rating">4.5/5.0</span>
                        </div>
                    </header>
                    <p className="testimonial-review">Food here all awesome, the chefs and waitress are kind!</p>
                </section>
            </section>
        </section>
    )
}

export default Testimonials