import React from 'react';
import {activeMenuMovil} from '../js/activeMenuMovil';
function NavMovil(){
  activeMenuMovil();
return (
<>
<nav>
<ul className="nav__navbar__movil">
          <li>
            <a className="nav__links__movil active" href="/" id="home">
              <i className="uil uil-estate"></i>
              Inicio
            </a>
          </li>
          <li>
            <a className="nav__links__movil" href="#quien-soy" id="quien__soy">
              <i className="uil uil-user"></i>
              Quien soy
            </a>
          </li>
          <li>
            <a className="nav__links__movil" href="#proyectos" id="proyecto">
              <i className="uil uil-arrow"></i>
              Mis proyectos
            </a>
          </li>
          <li>
            <a className="nav__links__movil" href="#contactame" id="contacto">
              <i className="uil uil-envelopes"></i>
              Contacto
            </a>
          </li>
        </ul>
</nav>
</>
  );
}

export default NavMovil;
