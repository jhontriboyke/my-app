import greek_salad from "../assets/greek salad.jpg"
import lemon_dessert from "../assets/lemon dessert.jpg"
import bruchetta from "../assets/bruchetta.svg"

function Highlights() {
    const data = [
        {
            name: "Greek Salad",
            price: "$12.99",
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            image: require("../assets/greek salad.jpg")
        },
        {
            name: "Bruchetta",
            price: "$5.99",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
            image: require("../assets/bruchetta 1.jpg")
        },
        {
            name: "Lemon Dessert",
            price: "$5.00",
            description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            image: require("../assets/lemon dessert.jpg")
        }

    ]

    const listData = data.map((menu) =>
        <section className="hightlight-card">
            <header className="hightlight-image">
                <img src={menu.image} />
            </header>
            <section className="hightlight-description">
                <header className="hightlight-header">
                    <h3 className="hightlight-menu-name">{menu.name}</h3>
                    <p className="hightlight-price">{menu.price}</p>
                </header>
                <p className="hightlight-description-menu">{menu.description}</p>
                <a href="#" role="order-link">Order a delivery <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.853 1.7953C10.853 1.17443 10.2903 0.666443 9.60258 0.666443H7.72699V1.7953H9.60258V3.29104L7.42689 5.74631H5.22619V2.92416H2.7254C1.34371 2.92416 0.224609 3.93449 0.224609 5.18188V6.87516H1.47501C1.47501 7.81212 2.31277 8.56845 3.3506 8.56845C4.38843 8.56845 5.22619 7.81212 5.22619 6.87516H8.02708L10.853 3.68614V1.7953ZM3.3506 7.43959C3.00674 7.43959 2.7254 7.1856 2.7254 6.87516H3.9758C3.9758 7.1856 3.69446 7.43959 3.3506 7.43959Z" fill="black" />
                    <path d="M5.2261 1.23083H2.1001V2.35968H5.2261V1.23083Z" fill="black" />
                    <path d="M10.8531 5.18188C9.8153 5.18188 8.97754 5.93822 8.97754 6.87516C8.97754 7.81211 9.8153 8.56844 10.8531 8.56844C11.891 8.56844 12.7287 7.81211 12.7287 6.87516C12.7287 5.93822 11.891 5.18188 10.8531 5.18188ZM10.8531 7.43959C10.5093 7.43959 10.2279 7.1856 10.2279 6.87516C10.2279 6.56473 10.5093 6.31074 10.8531 6.31074C11.197 6.31074 11.4783 6.56473 11.4783 6.87516C11.4783 7.1856 11.197 7.43959 10.8531 7.43959Z" fill="black" />
                </svg>
                </a>
            </section>
        </section>
    );

    return (
        <section className="hightlights-section">
            <header className="hightlights-header">
                <h2 className="big-heading">This weeks specials!</h2>
                <button role="online-menu-button" className="menu-btn">Online Menu</button>
            </header>
            <div className="hightlights-wrapper">
                {listData}
            </div>
        </section>
    )
}

export default Highlights