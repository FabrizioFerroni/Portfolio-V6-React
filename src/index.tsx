import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import NavDesktop from "./partials/nav/nav";
import NavMovil from "./partials/nav/nav_movil";
import Footer from "./partials/footer/footer";
import Inicio from "./components/inicio/inicio";
import Quien_soy from "./components/quien-soy/quien_soy";
import Proyectos from "./components/proyectos/proyectos";
import Contactame from "./components/contactame/contactame";
import {irToTop} from './partials/js/irToTop';


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
  );
  irToTop();
root.render(
  <React.StrictMode>
    <header id="header" className="desktop">
      <NavDesktop />
    </header>
    <header id="header" className="movil">
      <NavMovil />
    </header>
    <div id="container" className="container">
      <a
        className="ir-arriba"
        id="irarriba"
        data-tts="left"
        aria-label="Ir Arriba"
      >
        <span className="fa-stack">
          <i className="uil uil-arrow-up"></i>
        </span>
      </a>
      <section id="inicio" className="page-section">
        <Inicio />
      </section>
      <section id="quien-soy" className="page-section">
        <Quien_soy />
      </section>
      <section id="proyectos" className="page-section">
        <Proyectos />
      </section>
      <section id="contactame" className="page-section">
        <Contactame />
      </section>
    </div>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
