import { lazy } from "react";
import { Link } from "react-router-dom";

const Search = lazy(() => import("./Search"));

const Header = () => {
  return (
    <header className="p-3 border-bottom bg-light">
      <div className="container-fluid">
        <div className="row g-3">
          <div className="col-md-3 text-center">
            <img
              src="../images/favicon.ico"
              alt="logo"
              width={"100px"}
              height={"100px"}
            />
          </div>
          <div className="col-md-5 mt-5">
            <Search />
          </div>

          <div className="col-md-4">
            <div className="position-relative d-inline me-3">
              <Link to="/" className="btn btn-primary">
                <i className="bi bi-cart3"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
