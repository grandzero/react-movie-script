import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import navbarStyle from './navbar.module.css';
function Navbar() {
    return (
        <nav className={navbarStyle.nav+"navbar navbar-expand-lg navbar-light bg-dark"}>
            <div className="container">
             <span className="navbar-brand"><Link to="/" style={{ textDecoration: 'none', color:"white" }}>React Movie APP</Link></span>

            </div>
        </nav>
    )
}

export default Navbar;
