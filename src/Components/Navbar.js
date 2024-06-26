import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
    // const buttonStyle = {
    //     width: 40,
    //     height: 40,
    //     borderRadius: 100,
    // };
    return (
        <nav
            className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
        >
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    {props.title}
                </a>
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
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                {props.about}
                            </Link>
                        </li>
                    </ul>
                    {/* {props.mode === "dark" ? (
                        <button
                            type="button"
                            className="btn btn-light mx-3 my-2"
                            style={buttonStyle}
                            onClick={props.changeMode}
                        ></button>
                    ) : (
                        <></>
                    )}
                    <button
                        type="button"
                        className="btn btn-danger mx-3 my-2"
                        style={buttonStyle}
                        onClick={props.changeRed}
                    ></button>
                    <button
                        type="button"
                        className="btn btn-success mx-3 my-2"
                        style={buttonStyle}
                        onClick={props.changeGreen}
                    ></button>
                    <button
                        type="button"
                        className="btn btn-info mx-3 my-2"
                        style={buttonStyle}
                        onClick={props.changeBlue}
                    ></button> */}
                    <form className="d-flex">
                        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
                        {/* <button className="btn btn-primary" type="submit">Search</button> */}
                        <div
                            className="form-check form-switch"
                            style={{
                                color:
                                    props.mode === "light" ? "black" : "white",
                            }}
                        >
                            <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckDefault"
                                onClick={props.changeMode}
                            />
                            <label
                                className="form-check-label"
                                htmlFor="flexSwitchCheckDefault"
                            >
                                {props.mode === "light"
                                    ? "Enable Dark Mode"
                                    : "Enable Light Mode"}
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string,
};

Navbar.defaultProps = {
    title: "UpperLowerHub",
    about: "About",
};
