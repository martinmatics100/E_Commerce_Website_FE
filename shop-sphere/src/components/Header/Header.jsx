import { lazy } from "react";
import "./Header.css";

const Search = lazy(() => import("../Search/Search"));

const Header = () => {
  return (
    <header className="p-3 border-bottom header">
      <div className="container-fluid">
        <div className="row g-3">
          <div className="col-md-3 text-center">
            <img
              src="../images/favicon.ico"
              alt="logo"
              width={"100px"}
              height={"100px"}
            />
            <p>Shop Sphere</p>
          </div>
          <div className="col-md-5 mt-5">
            <Search />
          </div>

          <div className="col-md-4">
            <div className="position-relative d-inline me-3">
              <i className="bi bi-cart3"></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
