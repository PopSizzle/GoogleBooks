import React from "react";


function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <ul className="nav">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Search</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/saved">Saved</a>
                </li>
            </ul>
        </nav>
    )
};


export default Navbar;