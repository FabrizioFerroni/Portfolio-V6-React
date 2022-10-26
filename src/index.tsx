import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Inicio from "./components/inicio/inicio";
import Quien_soy from "./components/quien-soy/quien_soy";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="container">
      <section id="inicio" className="page-section">
        <Inicio />
      </section>
      <section id="quien-soy" className="page-section">
        <Quien_soy />
      </section>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
