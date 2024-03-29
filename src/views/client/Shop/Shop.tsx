import useProductQuery from "@/hooks/useProducts.ts";
import "@/style/shop.scss"
import { Link } from "react-router-dom"
const Shop = () => {
    const { data, isLoading, isError } = useProductQuery({});
    console.log(data);
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error</p>;
    return (
        <>
            {/* Search bar */}
            <section className="search-bar">
                <div className="container search-container">
                    <div className="search-above">
                        <div className="search-filter">
                            <img className="search__item" src="../assets/image/icons/filter.svg" />
                            <span className="search__item">Filter</span>
                            <img className="search__item" src="../assets/image/icons/dot.svg" />
                            <img className="search__item" src="../assets/image/icons/arrange.svg" />
                        </div>
                        <span className="search__showing">Showing 1–16 of 32 results</span>
                    </div>
                    <div className="search-below">
                        <div className="search-show">
                            <span className="search__title">Show</span>
                            <div className="search__box">16</div>
                        </div>
                        <div className="search-short">
                            <span className="search__title">Short by</span>
                            <div className="search__box">Default</div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End search bar */}
            {/* Product List */}
            <section className="product">
                <div className="container">
                    <div className="section-body">
                        <div className="product-list">
                            {data && data.map((value: any, index: number): any => {
                                return (
                                    <div key={index} className="product-item">
                                        <div className="product-image">
                                            <img src={`../assets/image/product/${value.image}`} className="product__thumbnail" />
                                            <span className="product-sale">{value.discount}%</span>
                                        </div>
                                        <div className="product-info">
                                            <h3 className="product__name">
                                                <a href="#" className="product__link">{value.name}</a>
                                            </h3>
                                            <a href="#" className="product__category">Stylish cafe chair</a>
                                            <div className="product-price">
                                                <span className="product-price__new">{value.price - (value.price * value.discount) / 100}<sup>đ</sup></span>
                                                <span className="product-price__old">{value.price} <sup>đ</sup></span>
                                            </div>
                                        </div>
                                        <div className="product-actions">
                                            <Link to={`/product/${value.tag}`} className="btn product-action__quickview">View Product</Link>
                                            <button className="btn product-action__addtocart">Add To Cart</button>
                                            <div className="product-actions-more">
                                                <div className="product-action-more-share">
                                                    <img className="product-action-more__icon" src="../assets/image/icons/share.svg" />
                                                    <span>Share</span>
                                                </div>
                                                <div className="product-action-more-compare">
                                                    <img className="product-action-more__icon" src="../assets/image/icons/compare.svg" />
                                                </div>
                                                <div className="product-action-more-like">
                                                    <img className="product-action-more__icon" src="../assets/image/icons/love.svg" />
                                                    <span>Like</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            {/*End .product-item*/}
                        </div>
                    </div>
                </div>
            </section>
            {/* Product list end */}
        </>
    )
}

export default Shop