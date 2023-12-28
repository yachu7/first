import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `} style={ props.mode !== 'dark'? {borderBottom: '1px solid black'} : {borderBottom: '1px solid white'} }
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutPage}
              </Link>
            </li> */}
          </ul>

          <div
            className="bg-primary rounded mx-2"
            onClick={() => props.toggleMode("primary")}
            style={{ width: "20px", height: "20px", border: "1px solid black"}}
          ></div>
          <div
            className="bg-warning rounded mx-2"
            onClick={() => props.toggleMode("warning")}
            style={{ width: "20px", height: "20px", border: "1px solid black"}}
          ></div>
          <div
            className="bg-success rounded mx-2"
            onClick={() => props.toggleMode("success")}
            style={{ width: "20px", height: "20px", border: "1px solid black"}}
          ></div>
          <div
            className="bg-danger rounded mx-2"
            onClick={() => props.toggleMode("danger")}
            style={{ width: "20px", height: "20px", border: "1px solid black"}}
          ></div>
          <div
            className="bg-light rounded mx-2"
            onClick={() => props.toggleMode("light")}
            style={{ width: "20px", height: "20px", border: "1px solid black" }}
          ></div>
          <div
            className="bg-dark rounded mx-2"
            onClick={() => props.toggleMode("dark")}
            style={{ width: "20px", height: "20px", border: "1px solid white" }}
          ></div>

          {/* <div className={`form-check form-switch text-${props.mode === 'light'? 'dark' : 'light' }`} > // toggle switch for light and dark mode
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={()=> props.toggleMode(null)}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable {props.mode === 'dark'? 'Light' : 'Dark' } Mode
            </label>
          </div> */}
        </div>
      </div>
    </nav>
  );
}

Navbar.propsTypes = { title: PropTypes.string, aboutPage: PropTypes.string };
