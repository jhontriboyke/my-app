import greek_salad from "../assets/greek salad.jpg"

function Highlights() {
    return (
        <section className="highlights">
            <div className="highlights-wrapper">
                <section className="highlights-header">
                    <h3 className="attention">This weeks specials!</h3>
                    <button className="cta">Online Menu</button>
                </section>
                <section className="highlights-list">
                    <section className="card">
                        <div className="card-image">
                            <img src={greek_salad} alt="Greek Salad" />
                        </div>
                        <div className="card-text">
                            <div className="card-header">
                                <h4 className="menu-name">Greek Salad</h4>
                                <p className="menu-price">$12.99</p>
                            </div>
                            <p className="menu-description">
                                Our Bruschetta is made from grilled
                                bread that has been smeared with garlic
                                and seasoned with salt and olive oil.
                            </p>
                            <a href="#" className="order-link">Order a delivery</a>

                        </div>
                    </section>
                    <section className="card">
                        <div className="card-image">
                            <img src={greek_salad} alt="Greek Salad" />
                        </div>
                        <div className="card-text">
                            <div className="card-header">
                                <h4 className="menu-name">Greek Salad</h4>
                                <p className="menu-price">$12.99</p>
                            </div>
                            <p className="menu-description">
                                Our Bruschetta is made from grilled
                                bread that has been smeared with garlic
                                and seasoned with salt and olive oil.
                            </p>
                            <a href="#" className="order-link">Order a delivery</a>

                        </div>
                    </section>
                    <section className="card">
                        <div className="card-image">
                            <img src={greek_salad} alt="Greek Salad" />
                        </div>
                        <div className="card-text">
                            <div className="card-header">
                                <h4 className="menu-name">Greek Salad</h4>
                                <p className="menu-price">$12.99</p>
                            </div>
                            <p className="menu-description">
                                Our Bruschetta is made from grilled
                                bread that has been smeared with garlic
                                and seasoned with salt and olive oil.
                            </p>
                            <a href="#" className="order-link">Order a delivery</a>

                        </div>
                    </section>
                </section>
            </div>
        </section>
    )
}

export default Highlights