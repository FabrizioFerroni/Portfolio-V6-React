import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import NavDesktop from "./partials/nav/nav";
import Footer from "./partials/footer/footer";
import Inicio from "./components/inicio/inicio";
import Quien_soy from "./components/quien-soy/quien_soy";
import Proyectos from "./components/proyectos/proyectos";
import Contactame from './components/contactame/contactame';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <header id="header" className="desktop">
      <NavDesktop />
    </header>
    <header id="header" className="movil">
      {/*  */}
    </header>
    <div className="container">
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
