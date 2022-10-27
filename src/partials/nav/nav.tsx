import React from "react";
import usa from './img/usa.png';
import arg from './img/arg.png';
import {activeMenu} from '../js/activeMenu';
// appendScript('/js/main.js');

function Nav() {
    activeMenu();
    return (
        <nav>
        <div className="nav__title">
            <a href="/">
                <h3>Fabrizio Developer</h3>
            </a>
        </div>
        <div className="nav__menu">
            <ul className="nav__navbar">
                <li>
                    <a className="nav__links" href="/">
                    <i className="icon__menu uil uil-estate"></i>
                        Inicio
                    </a>
                </li>
                <li>
                    <a className="nav__links" href="#quien-soy">
                    <i className="icon__menu uil uil-user"></i>
                        Quien soy
                    </a>
                </li>
                <li>
                    <a className="nav__links" href="#proyectos">
                    <i className="icon__menu uil uil-arrow"></i>
                        Mis proyectos
                    </a>
                </li>
                <li>
                    <a className="nav__links" href="#contactame">
                    <i className="icon__menu uil uil-location-arrow"></i>
                        Contactame
                    </a>
                </li>
                <li>
                    <a href="eng" id="cambiar__idioma"><img id="flag__lang" data-flag="usa" title="Cambiar a inglés" src={usa} alt="Cambiar a ingles" /></a>
                    <a href="esp" className="d-none" id="cambiar__idioma_arg"><img id="flag__lang_arg" data-flag="usa" title="Cambiar a inglés" src={arg} alt="Cambiar a español" /></a>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default Nav;