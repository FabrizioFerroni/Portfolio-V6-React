import React from "react";

const today = new Date();

function Footer() {
  return (    
    <footer>
      <div>
        <h4>@2022 - {today.getFullYear()} Fabrizio Developer</h4>
        <div className="rrss__footer">
          <a
            href="mailto:hola@fabriziodev.ar"
            data-tts="up"
            aria-label="Enviame un email"
          >
            <i className="icon__footer uil uil-envelopes"></i>
          </a>
          <a
            href="https://github.com/FabrizioFerroni"
            rel="nofollow noopener noreferrer"
            target="_blank"
            data-tts="up"
            aria-label="Ve mis proyectos en github"
          >
            <i className="icon__footer uil uil-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/fabrizio-ferroni/"
            rel="nofollow noopener noreferrer"
            data-tts="up"
            aria-label="Seguime en Linkedin"
          >
            <i className="icon__footer uil uil-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="enlaces__footer">
        <a className="otros__links" href="#">
          Desarrollo Web
        </a>
        <a className="otros__links" href="#">
          Soporte Técnico
        </a>
        <p>
          Diseñado por <a href="#">@fabriziodev</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
