import { useState } from "react";

const Header = () => {
  const [logout, setLogout] = useState(false);
  const logoutHandler = () => {
    setLogout(true);
  };

  const loginHandler = () => {
    setLogout(false);
  };
  return (
    <header className="navbar-light bg-light">
      <nav className="navbar navbar-expand-lg  container">
        <div className="container-fluid">
          <img
            src="https://img.freepik.com/free-vector/doodle-delivery-services-logo_23-2149153610.jpg"
            style={{ height: "100px" }}
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link" href="#">
                About
              </a>
              <a className="nav-link" href="#">
                Contact Us
              </a>
              <a className="nav-link" href="#">
                Cart
              </a>
              {!logout ? (
                <button className="btn btn-danger" onClick={logoutHandler}>
                  Logout
                </button>
              ) : (
                <button className="btn btn-success" onClick={loginHandler}>
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
