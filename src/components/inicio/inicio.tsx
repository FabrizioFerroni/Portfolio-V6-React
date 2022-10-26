import React from "react";
import Logo from "./img/profile.png";

function Index() {
  return (
    <>
      <div>
        <h3>Hola, soy</h3>
        <h1>Fabrizio Ferroni</h1>
        <p>
          Desarrollador júnior Full Stack. Creo experiencias web perfectas para
          usuarios finales.
        </p>
        <div className="buttons__inicio">
          <a href="#quien-soy" className="btn-quien-soy">
            Quien soy
            <i className="uil uil-user"></i>
          </a>
          <a
            href="#"
            // download="CV-Fabrizio-Ferroni.pdf"
            data-tts="up"
            aria-label="Descarga mi cv"
            className="btn-mi-cv"
          >
            Mi CV
            <i className="uil uil-eye"></i>
          </a>
          {/* <embed src="cv/CV-Fabrizio-Ferroni.pdf#toolbar=0" width="500" height="375" /> */}
        </div>
      </div>
      <div>
        {/* <figure>Circulo</figure> */}
        {/* <img src="{Logo}" alt="Mi foto perfil" /> */}
        <img src={Logo} alt="Mi foto perfil" />
      </div>
    </>
  );
}
export default Index;