import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar(props) {
    if (props.theme === "light") {
        props.updateThemeColors("black", "white", "#00ff45");
    } else {
        props.updateThemeColors("white", "#23262a", "#00ffe2");
    }

    function changeTheme() {
        if (props.theme === "light") {
            props.setTheme('dark');
            props.updateThemeColors("white", "#23262a", "#00ffe2");
        } else {
            props.setTheme('light');
            props.updateThemeColors("black", "white", "#00ff45");
        }
    }

    let location = useLocation().pathname;


    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.theme}>
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className={`nav-link ${location === '/' ? 'active' : ''}`} aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className={`nav-link ${location === '/about' ? 'active' : ''}`}>About</Link>
                        </li>
                    </ul>
                    <div className="form-check form-switch" style={{ "color": props.themeColors.textColor }}>
                        <input className="form-check-input" type="checkbox" role="switch" onChange={changeTheme} id="themeChanger" />
                        <label className="form-check-label" htmlFor="themeChanger">{props.theme === 'light' ? "Dark Mode Disabled" : "Dark Mode Enabled"}</label>
                    </div>
                </div>
            </div>
        </nav>
    );
}
