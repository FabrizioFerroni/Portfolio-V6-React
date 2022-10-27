import React from "react";
import {appendScript} from '../../partials/include_js';

appendScript('/js/main.js');

function Contactame() {
  return (
    <>
      <div>
        <h2>Contactate conmigo</h2>
        <h3 className="contactame__title">¿Satisfecho conmigo?</h3>
        <h3 className="contactame__subtitle">
          Por favor póngase en contacto conmigo
        </h3>
        <div>
          <a
            href="mailto:hola@fabriziodev.ar"
            data-tts="up"
            aria-label="Enviame un email"
          >
            <i className="icon__rrss uil uil-envelopes"></i>
          </a>
          <span>
          <a
            href="https://github.com/FabrizioFerroni"
            data-tts="up"
            aria-label="Mira mis proyectos en github"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            <i className="icon__rrss uil uil-github"></i>
          </a>
          </span>
          <a
            href="https://www.linkedin.com/in/fabrizio-ferroni/"
            rel="nofollow noopener noreferrer"
            data-tts="up"
            aria-label="Seguime en linkedin"
          >
            <i className="icon__rrss uil uil-linkedin"></i>
          </a>
        </div>
      </div>
      <div>
        <h3 className="contactame__form__title">
          Contáctame, hagamos magia juntos
        </h3>
        <form action="/" method="POST" id="form">
          <div className="fake_placeholder">
            <label>
              <span>Nombre:</span>
              <input
                type="text"
                id="frm__nombre"
                className="input__pl"
                name="nombre"
                placeholder="Ingrese su nombre y apellido"
              />
            </label>
          </div>
          <div className="fake_placeholder">
            <label>
              <span>Email:</span>
              <input
                type="email"
                id="frm__email"
                className="input__pl"
                name="email"
                placeholder="Ingrese su email"
              />
            </label>
          </div>
          <div className="fake_placeholder">
            <label>
              <span>Telefono:</span>
              <input
                type="tel"
                id="frm__telefono"
                className="input__pl"
                name="telefono"
                min="0"
                placeholder="Ingrese su número de telefono"
              />
            </label>
          </div>
          <div className="fake_placeholder">
            <label>
              <span>Asunto:</span>
              <select
                className="select-pd"
                id="frm__asunto"
                name="asunto"
                defaultValue={"DEFAULT"}
              >
                <option className="hidden" value="DEFAULT" disabled>
                  Seleccione una opción
                </option>
                <option value="prueba">Prueba</option>
              </select>
            </label>
          </div>
          <div className="fake_placeholder">
            <label>
              <span className="textarea">Mensaje:</span>
              <textarea
                name="mensaje"
                className="textarea__pl"
                id="frm__mensaje"
                placeholder="Ingrese su mensaje"
              ></textarea>
            </label>
          </div>
          <div>
            <button className="outnone" type="button">
              Enviar <i className="contactame__icon uil uil-message"></i>{" "}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contactame;
