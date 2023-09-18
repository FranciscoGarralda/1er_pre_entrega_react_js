import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Ecommerce</h3>
            <div>
                <button>Iphone</button>
                <button>Mac</button>
                <button>AirPods</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar
