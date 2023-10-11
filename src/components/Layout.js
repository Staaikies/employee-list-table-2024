import { Outlet, Link, useLocation } from "react-router-dom";
import Footer from "./Footer";



const Layout = () => {
  let currentLocation = useLocation();
  console.log(currentLocation.pathname);

  return (
    <>
      <div className="nav-bar-wrapper">
        <nav className="nav-bar">
          <Link className="nav-bar__faux-logo" to="/">Employee List <span className="u-text-status--familiar">Solutions</span></Link>
          <ul className="nav-bar__list">
            <li>
              <Link className={`nav-bar__link  ${currentLocation.pathname === '/' && 'nav-bar__link--active'}`} to="/">Employee List</Link>
            </li>
            <li>
              <Link className={`nav-bar__link  ${currentLocation.pathname === '/about' && 'nav-bar__link--active'}`} to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
};

export default Layout;
