import "@/style/banner.scss";

interface BannerProps {
  page: string;
}

function Banner({ page }: BannerProps) {
  const UppercaseText = (text : string) => {
  const uppercaseText = text.toUpperCase(); 
  return uppercaseText; 
};
  return (
    <section className="banner">
      <img src="./assets/image/banner/home.svg" alt="#" className="banner__img" />
      <div className="banner-nav">
        <h1 className="banner-nav__page">{UppercaseText(page)}</h1>
        <span className="banner-nav__current">{page == "Home Page" ? '' : 'Home > '+page }</span>
      </div>
    </section>
  )
}
export default Banner