import "@/style/banner.scss";
function Banner() {
  return (
    <section className="banner">
      <img src="./assets/image/banner/home.svg" alt="#" className="banner__img" />
      <div className="banner-nav">
        <h1 className="banner-nav__page">Trang Chủ</h1>
        <span className="banner-nav__current">Home</span>
      </div>
    </section>
  )
}

export default Banner