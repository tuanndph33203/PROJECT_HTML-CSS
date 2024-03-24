
import useProductQuery from "@/hooks/useProducts";
import "@/style/detail.scss"
import { Link, useParams } from "react-router-dom"
const Product = () => {
    const {tag} = useParams();
    const { data, isLoading, isError } = useProductQuery({tag});
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error</p>;
    const product = data[0];
    return (
        <>
            <section className="navbar">
                <div className="container">
                    <span className="navbar__home">Home</span>
                    <img className="navbar__arrow" src="../assets/image/icons/arrow.svg" />
                    <span className="navbar__next">Shop</span>
                    <img className="navbar__arrow" src="../assets/image/icons/arrow.svg" />
                    <span className="navbar__current">{product.name}</span>
                </div>
            </section>
            {/* start detail product */}
            <section className="detail">
                <div className="container">
                    <div className="image">
                        <div className="image-list">
                            <img src="../assets/image/detail/item1.svg" className="image__item" />
                            <img src="../assets/image/detail/item2.svg" className="image__item" />
                            <img src="../assets/image/detail/item3.svg" className="image__item" />
                            <img src="../assets/image/detail/item4.svg" className="image__item" />
                        </div>
                        <img src={`../assets/image/detail/${product.image}`} id="image" className="image__main" />
                    </div>
                    <div className="info">
                        <div className="info-product">
                            <h2 className="product__title">{product.name}</h2>
                            <span className="info__price">{product.price - product.discount*product.price/100}<sub>đ</sub></span>
                            <div className="star">
                                <div className="star-list"> 
                                    <img className="star__item" src="../assets/image/detail/star.svg" />
                                    <img className="star__item" src="../assets/image/detail/star.svg" />
                                    <img className="star__item" src="../assets/image/detail/star.svg" />
                                    <img className="star__item" src="../assets/image/detail/star.svg" />
                                    <img className="star__item" src="../assets/image/detail/half_star.svg" />
                                </div>
                                <span>5 Customer Review</span>
                            </div>
                            <p>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero
                                with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
                            </p>
                            <span className="info__title">Size</span>
                            <div className="size">
                                <div className="size__item">L</div>
                                <div className="size__item">XL</div>
                                <div className="size__item">XS</div>
                            </div>
                            <span>Color</span>
                            <div className="color">
                                <div className="color__item" />
                                <div className="color__item" />
                                <div className="color__item" />
                            </div>
                            <div className="action">
                                <div className="action-quantity">
                                    <span id="minus">-</span>
                                    <span id="quantity">1</span>
                                    <span id="plus">+</span>
                                </div>
                                <Link to="/cart" className="btn">Add To Cart</Link>
                                <button>+ Compare</button>
                            </div>
                        </div>
                        <div className="info">
                            <div className="info-group">
                                <span className="info__title">SKU</span>
                                <div className="info-body">
                                    <span className="info__2dots">:</span>
                                    <span className="info__title">SS001</span>
                                </div>
                            </div>
                            <div className="info-group">
                                <span className="info__title">Category</span>
                                <div className="info-body">
                                    <span className="info__2dots">:</span>
                                    <span className="info__title">Sofas</span>
                                </div>
                            </div>
                            <div className="info-group">
                                <span className="info__title">Tags</span>
                                <div className="info-body">
                                    <span className="info__2dots">:</span>
                                    <span className="info__title">Sofa, Chair, Home, Shop</span>
                                </div>
                            </div>
                            <div className="info-group">
                                <span className="info__title">Share</span>
                                <div className="info-body">
                                    <span className="info__2dots">:</span>
                                    <div className="info-social">
                                        <img src="../assets/image/icons/facebook.svg" />
                                        <img src="../assets/image/icons/instagram.svg" />
                                        <img src="../assets/image/icons/twitter.svg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product