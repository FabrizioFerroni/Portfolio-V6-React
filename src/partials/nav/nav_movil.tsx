import React from "react";
import usa from './img/usa.png';


function menuMovil() {
  return (
    <>
      <nav>
        <div className="nav__title">
          <a href="/">
            <h3>Fabrizio Developer</h3>
          </a>
        </div>

        <div className="nav__menu__icons">
          <a className="" href="#" id="open__menu">
            <i className="uil uil-apps"></i>
          </a>
          <a href="#" id="cambiar__idioma__movil">
            <img
              id="flag__lang__movil"
              data-lang="usa"
              title="Cambiar a inglés"
              src={usa}
              alt="Cambiar a ingles"
            />
          </a>
        </div>
      </nav>
      <div className="nav__menu d-none" id="menu__movil">
        <ul className="nav__navbar">
          <li>
            <a href="#" className="cerrar" id="close__menu">
              <i className="uil uil-times"></i>
            </a>
          </li>
          <li>
            <a className="nav__links" href="/" id="home">
              <i className="icon__menu uil uil-estate"></i>
              Inicio
            </a>
          </li>
          <li>
            <a className="nav__links" href="#quien-soy" id="quien__soy">
              <i className="icon__menu uil uil-user"></i>
              Quien soy
            </a>
          </li>
          <li>
            <a className="nav__links" href="#proyectos" id="proyecto">
              <i className="icon__menu uil uil-arrow"></i>
              Mis proyectos
            </a>
          </li>
          <li>
            <a className="nav__links" href="#contactame" id="contacto">
              <i className="icon__menu uil uil-location-arrow"></i>
              Contactame
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default menuMovil;
