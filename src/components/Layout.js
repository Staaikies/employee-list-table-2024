import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="nav-bar-wrapper">
        <nav className="nav-bar">
          <Link className="nav-bar__faux-logo" to="/">Employee List <span className="u-text-status--familiar">Solutions</span></Link>
          <ul className="nav-bar__list">
            <li>
              <Link className="nav-bar__link" to="/employeecreate">Create Employee </Link>
            </li>
            <li>
              <Link className="nav-bar__link" to="/employeelist">Employee List</Link>
            </li>
            <li>
              <Link className="nav-bar__link" to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Outlet />
    </>
  )
};

export default Layout;
