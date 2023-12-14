import profile from "../assets/Image-45.png"

function Testimonials() {
    return (
        <section className="testimonials">
            <div className="testimonials-wrapper">
                <header className="testimonial-header">
                    <h3 className="attention">Testimonials</h3>
                </header>
                <div className="testimonial-lists">
                    <div className="testimonial">
                        <div className="profile">
                            <div className="profile-image"><img src={profile} /></div>
                            <div className="profile-info">
                                <p className="profile-name">Jhontri Boyke</p>
                                <p className="rating">4.5/5.0</p>
                            </div>
                        </div>
                        <div className="review">
                            Food here all awesome, the chefs and waitress are kind!
                        </div>
                    </div>
                    <div className="testimonial">
                        <div className="profile">
                            <div className="profile-image"><img src={profile} /></div>
                            <div className="profile-info">
                                <p className="profile-name">Jhontri Boyke</p>
                                <p className="rating">4.5/5.0</p>
                            </div>
                        </div>
                        <div className="review">
                            Food here all awesome, the chefs and waitress are kind!
                        </div>
                    </div>
                    <div className="testimonial">
                        <div className="profile">
                            <div className="profile-image"><img src={profile} /></div>
                            <div className="profile-info">
                                <p className="profile-name">Jhontri Boyke</p>
                                <p className="rating">4.5/5.0</p>
                            </div>
                        </div>
                        <div className="review">
                            Food here all awesome, the chefs and waitress are kind!
                        </div>
                    </div>
                    <div className="testimonial">
                        <div className="profile">
                            <div className="profile-image"><img src={profile} /></div>
                            <div className="profile-info">
                                <p className="profile-name">Jhontri Boyke</p>
                                <p className="rating">4.5/5.0</p>
                            </div>
                        </div>
                        <div className="review">
                            Food here all awesome, the chefs and waitress are kind!
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Testimonials