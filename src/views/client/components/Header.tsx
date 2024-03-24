import "@/style/header.scss";
import { Link } from "react-router-dom";
function Header(props: any) {
    return (
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <Link to="/" className="header__logo">
                        <img src="./assets/image/logo.svg" alt="#" />
                    </Link>
                    <div onClick={() => props.setMenu(props.menu ? false : true)} className="button-mobile">
                        <button id="toggle-menu">
                            <hr />
                            <hr />
                            <hr />
                        </button>
                    </div>
                    <nav className="main-menu">
                        <ul className="main-menu__list">
                            <li className="main-menu__item">
                                <Link to="/" className="main-menu__link">Home</Link>
                            </li>
                            <li className="main-menu__item">
                                <Link to="/shop" className="main-menu__link">Shop</Link>
                            </li>
                            <li className="main-menu__item">
                                <Link to="/" className="main-menu__link">About</Link>
                            </li>
                            <li className="main-menu__item">
                                <Link to="/" className="main-menu__link">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <nav style={{ display: props.menu ? "block" : "none" }} className="mobile-menu">
                        <ul className="mobile-menu__list">
                            <li className="mobile-menu__item">
                                <Link to="/" className="mobile-menu__link">Home Mobile</Link>
                            </li>
                            <li className="mobile-menu__item">
                                <Link to="/shop" className="mobile-menu__link">Shop</Link>
                            </li>
                            <li className="mobile-menu__item">
                                <Link to="/" className="mobile-menu__link">About</Link>
                            </li>
                            <li className="mobile-menu__item">
                                <Link to="/" className="mobile-menu__link">Contact</Link>
                            </li>
                            <li className="mobile-menu__item">
                                <Link onClick={() => props.login(true)} to="/" className="mobile-menu__link">Account
                                </Link>
                            </li>
                            <li className="mobile-menu__item">
                                <Link to="/" className="mobile-menu__link">Search</Link>
                            </li>
                            <li className="mobile-menu__item">
                                <Link to="/" className="mobile-menu__link">Wish List</Link>
                            </li>
                            <li className="mobile-menu__item">
                                <Link to="/cart" className="mobile-menu__link">Cart</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="header-items">
                        <div className="header-items">
                            <div className="header-item-user">
                                <img onClick={() => props.login(true)} src="./assets/image/icons/account.svg" />
                            </div>
                            <div className="header-item-user">
                                <span><img src="./assets/image/icons/search.svg" /></span>
                            </div>
                            <div>
                                <img src="./assets/image/icons/like.svg" />
                            </div>
                            <div className="header-item-user">
                                <Link to="/cart" >
                                    <img src="./assets/image/icons/cart.svg" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;