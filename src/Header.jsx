import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

export function Header() {
  // State to handle visibility of search field
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          SW's Shoe Store ||
        </a>

        {/* Search Icon and Input field */}
        <div className="nav-item" style={{ display: "flex", alignItems: "center" }}>
          <a className="nav-link" onClick={handleSearchClick}>
            <SearchIcon />
          </a>
          {showSearch &&
            <TextField
              autoFocus
              onBlur={handleSearchClick}
              variant="outlined"
              size="small"
              placeholder="Search Shoes"/>}
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="ms-auto d-flex">
            <ul className="nav nav-underline">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Wishlist
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-primary"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Lifestyle
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Airmax
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Jordan
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link text-primary" href="#">
                  <img
                    src="https://www.freeiconspng.com/thumbs/bags-icon/bag-icon-6.png"
                    alt="Bag"
                    style={{ width: "20px", marginRight: "5px" }}
                  />
                  Bag
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-primary"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="#">
                      Register
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sign In
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Log Out
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
