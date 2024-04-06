import useProductQuery from "@/hooks/useProducts";
import "@/style/detail.scss"
import { Link, useParams } from "react-router-dom"
const Product = () => {
    const { slug } = useParams();
    console.log(slug);

    const { data: product, isLoading, isError } = useProductQuery({ slug });
    console.log(product);
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error</p>;
    return (
        <>
            <section className="navbar">
                <div className="container">
                    <span className="navbar__home">Home</span>
                    <img className="navbar__arrow" src="/assets/image/icons/arrow.svg" />
                    <span className="navbar__next">Shop</span>
                    <img className="navbar__arrow" src="/assets/image/icons/arrow.svg" />
                    <span className="navbar__current">{product.name}</span>
                </div>
            </section>
            {/* start detail product */}
            <section className="detail">
                <div className="container">
                    <div className="image">
                        <div className="image-list">
                            {product.gallery.map((value: string, index: number) => {
                                return (
                                    <img key={index} src={`/assets/image/product/${value}`} className="image__item" />
                                )
                            })}
                        </div>
                        <img src={`/assets/image/product/${product.image}`} id="image" className="image__main" />
                    </div>
                    <div className="info">
                        <div className="info-product">
                            <h2 className="product__title">{product.name}</h2>
                            <span className="info__price">{product.price - product.discount * product.price / 100}<sub>đ</sub></span>
                            <div className="star">
                                <div className="star-list">
                                    <img className="star__item" src="/assets/image/detail/star.svg" />
                                    <img className="star__item" src="/assets/image/detail/star.svg" />
                                    <img className="star__item" src="/assets/image/detail/star.svg" />
                                    <img className="star__item" src="/assets/image/detail/star.svg" />
                                    <img className="star__item" src="/assets/image/detail/half_star.svg" />
                                </div>
                                <span>5 Customer Review</span>
                            </div>
                            <p>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero
                                with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
                            </p>

                            <div className="mt-4">
                                <span >Color</span>
                                {product.attributes.map((attribute: { values: { nameValue: string }[] }, index: number) => (
                                    <div className="color" key={index}>
                                        {attribute.values.map((value: { nameValue: string }, idx: number) => (
                                            <div key={idx} style={{ backgroundColor: value.nameValue }} className="color__item" />
                                        ))}
                                    </div>
                                ))}
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
                                    <span className="info__title">{product.tags.map((value: string) => {
                                        return value + ",";
                                    })}</span>
                                </div>
                            </div>
                            <div className="info-group">
                                <span className="info__title">Share</span>
                                <div className="info-body">
                                    <span className="info__2dots">:</span>
                                    <div className="info-social">
                                        <img src="/assets/image/icons/facebook.svg" />
                                        <img src="/assets/image/icons/instagram.svg" />
                                        <img src="/assets/image/icons/twitter.svg" />
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