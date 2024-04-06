import { useSessionStorage } from "@/hooks/useStorage";
import "@/style/preloader.scss"
function Preloader(props:any) {
  const [storedValue] = useSessionStorage(
    "user",
    ""
  );
  const handleSidebarToggle = () => {
    props.setSidebar(!props.sidebar);
  };

  return (
    <section className="preloader bg-[#24303F]">
      <div className="preloader-group">
        <button onClick={handleSidebarToggle} className="preloader-item">
          <img className="logo" src="/assets/image/banner/logo.svg" alt="" />
          <h1 className="preloader-title">ADMIN</h1>
        </button>
        <div className="preloader-item">
          <img className="search" src="/assets/image/icons/search.svg" alt="" />
          <input  type="text" className="form-control  bg-[#24303F]" aria-describedby="helpId" placeholder="Search ?" />
        </div>
      </div>
      <div className="preloader-author">
        <div className="preloader-info">
          <h4>{storedValue.name}</h4>
          <span>{storedValue.role}</span>
        </div>
        <img src="/assets/image/author/shakespeare-author.svg" alt="" />
      </div>
    </section>
  )
}

export default Preloader