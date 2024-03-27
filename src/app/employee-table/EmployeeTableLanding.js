import { Outlet, Link, useLocation } from "react-router-dom";
import Footer from "../common/Footer";

const Layout = () => {
    let currentLocation = useLocation();
    console.log(currentLocation.pathname);

    return (
        <div className="employeetable-wrapper">
            <div className="nav-bar-wrapper">
                <nav className="nav-bar">
                    <Link className="nav-bar__faux-logo" to="/employeetable">Employee List <span className="u-text-status--familiar">Solutions</span></Link>
                    <ul className="nav-bar__list">
                        <li>
                        <Link className={`nav-bar__link`} to="/">Back to Portfolio</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <main className="content content--employeetable">
                <Outlet />
            </main>

            <Footer />
        </div>
    )
};

export default Layout;
