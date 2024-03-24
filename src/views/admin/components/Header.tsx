import "@/style/preloader.scss"
function Preloader() {
  return (
    <section className="preloader bg-[#24303F]">
      <div className="preloader-group">
        <div className="preloader-item">
          <img className="logo" src="/assets/image/banner/logo.svg" alt="" />
          <h1 className="preloader-title">ADMIN</h1>
        </div>
        <div className="preloader-item">
          <img className="search" src="/assets/image/icons/search.svg" alt="" />
          <input  type="text" className="form-control  bg-[#24303F]" aria-describedby="helpId" placeholder="Search ?" />
        </div>
      </div>
      <div className="preloader-author">
        <div className="preloader-info">
          <h4>Nguyễn Đình Tuân</h4>
          <span>Admin</span>
        </div>
        <img src="/assets/image/author/shakespeare-author.svg" alt="" />
      </div>
    </section>
  )
}

export default Preloader