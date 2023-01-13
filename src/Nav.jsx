import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light container">
        <a className="navbar-brand text-primary " href="#">
          Syed Technical
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
              <Link to="Home"> Home </Link>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
              <Link to="Services"> Services </Link>
              </a>
            </li> <li className="nav-item active">
              <a className="nav-link" href="#">
              <Link to="About">  About </Link>
              </a>
            </li> <li className="nav-item active">
              <a className="nav-link" href="#">
              <Link to='Contact'> Contact </Link>
              </a>
            </li>
           
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Nav;
