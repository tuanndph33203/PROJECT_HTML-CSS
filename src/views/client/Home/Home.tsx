import useProductQuery from "@/hooks/useProducts";
import "@/style/style.scss";
import { Link } from "react-router-dom";
const Home = () => {
  const { data, isLoading, isError } = useProductQuery({ quantity: 4 });
  console.log(data);
  
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error</p>;
  return (
    <>
      <section className="news">
        <div className="container">
          <div className="section-heading">
            <h2 className="section-heading__title">New</h2>
          </div>
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
                      <Link to={`/product/${value.slug}`} className="btn product-action__quickview">View Product</Link>
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
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <hr />
      </div>
      {/*End .news*/}
      <section className="shop">
        <div className="container">
          <div className="section-heading">
            <h2 className="section-heading__title">Shop</h2>
          </div>
          <div className="section-body">
            <div className="shops">
              <div className="shop-item">
                <a href="#" className="shop__link"><img src="./assets/image/home/shop/Rectangle 63.svg" alt="#" className="shop__image" /></a>
              </div>
              <div className="shop-item">
                <a href="#" className="shop__link"><img src="./assets/image/home/shop/Rectangle 64.svg" alt="#" className="shop__image" /></a>
              </div>
              <div className="shop-item">
                <a href="#" className="shop__link"><img src="./assets/image/home/shop/Rectangle 65.svg" alt="#" className="shop__image" /></a>
              </div>
              <div className="shop-item">
                <a href="#" className="shop__link"><img src="./assets/image/home/shop/Rectangle 66.svg" alt="#" className="shop__image" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End .shop*/}
      <section className="blog">
        <div className="container">
          <div className="section-heading section-blog-heading">
            <h2 className="section-heading__title">Blog</h2>
          </div>
          <div className="section-body">
            <div className="post-list">
              {/* post-item-start */}
              <div className="post-item">
                <div className="post-image">
                  <a href="#">
                    <img src="./assets/image/home/blog/Rectangle 67.svg" alt="#" className="post__thumbnail" />
                  </a>
                </div>
                <div className="post-info">
                  <h3 className="post__title">
                    <a href="#" className="post__link">THE ULTIMATE SOFA BUYING GUIDE</a>
                  </h3>
                  <p className="post__excerpt">
                    The versatility of our living space is more crucial than ever.
                    But buying a sofa might be a difficult undertaking. Your needs
                    and the size of your living area will determine everything,
                    However, don’t worry, were are here to help you
                  </p>
                  <a href="#" className="post-readmore">
                    <span className="post-readmore__about">ABOUT</span>
                    <img src="./assets/image/icons/next.svg" alt="#" />
                  </a>
                </div>
              </div>
              {/*End .post-item*/}
              <div className="post-item">
                <div className="post-image">
                  <a href="#">
                    <img src="./assets/image/home/blog/Rectangle 68.svg" alt="#" className="post__thumbnail" />
                  </a>
                </div>
                <div className="post-info">
                  <h3 className="post__title">
                    <a href="#" className="post__link">A BEDROOM MUST HAVE SOME THING LIKE THIS</a>
                  </h3>
                  <p className="post__excerpt">
                    Your level of comfort when geting into and out of bed can be greatly influenced by the bed frame you
                    choose. It may significantly affect how want your bedroom to feet and look
                  </p>
                  <a href="#" className="post-readmore">
                    <span className="post-readmore__about">ABOUT</span>
                    <img src="./assets/image/icons/next.svg" alt="#" />
                  </a>
                </div>
              </div>
              {/*End .post-item*/}
              {/*End .post-item*/}
              <div className="post-item">
                <div className="post-image">
                  <a href="#">
                    <img src="./assets/image/home/blog/Rectangle 68.svg" alt="#" className="post__thumbnail" />
                  </a>
                </div>
                <div className="post-info">
                  <h3 className="post__title">
                    <a href="#" className="post__link">A BEDROOM MUST HAVE SOME THING LIKE THIS</a>
                  </h3>
                  <p className="post__excerpt">
                    Your level of comfort when geting into and out of bed can be greatly influenced by the bed frame you
                    choose. It may significantly affect how want your bedroom to feet and look
                  </p>
                  <a href="#" className="post-readmore">
                    <span className="post-readmore__about">ABOUT</span>
                    <img src="./assets/image/icons/next.svg" alt="#" />
                  </a>
                </div>
              </div>
              {/*End .post-item*/}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home