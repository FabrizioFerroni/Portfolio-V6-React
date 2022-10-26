import React from "react";
import ux1 from './img/ux-1.png';
import web from './img/web-programming-1.png';
import wscrapping from "./img/web-scraping-1.png";
import mobile from './img/app-development.png';
import ux from './img/ux-services.png';
import desarrolloweb from './img/web.png';
import mobile2 from './img/mobile.png';
import git from './img/git.png';
import node from './img/node.png';
import webscrapping from './img//web-scrapping.png';

function Quien_soy() {
  return (
    <div>
    <h2 className="quien-soy__title">Quien soy</h2>
    <p className="quien-soy__descripcion">
        Hola, mi nombre es Fabrizio Ferroni, soy un desarrollador web junior Full Stack, diseñador de interfaz de usuario y desarrollador móvil. He perfeccionado mis habilidades en desarrollo web y tengo una comprensión básica de los principios de diseño avanzado
        de la interfaz de usuario. Aquí están las principales habilidades que tengo.
    </p>
    <div className="quien-soy__years">
        <h1>1+</h1>
        <h2>
            Año(s) de experiencia. Especializados en la creación de aplicaciones, al tiempo que garantizan una perfecta experiencia web para usuarios finales.
        </h2>
    </div>
    <div className="quien__soy__movil">
        <div className="quien-soy__cards">
            {/* <!-- CARD 1 --> */}
            <div className="cards">
                
                <img src={ux1} title="ux" alt="Logo servicio" />
                <h3>UI & UX DESINGINING</h3>
            </div>
            {/* <!-- FIN CARD 1 --> */}
            {/* <!-- CARD 2 --> */}
            <div className="cards">
                <img src={web} alt="Logo servicio" />
                <h3>WEB DEVELOPMENT</h3>
            </div>
            {/* <!-- FIN CARD 2 --> */}
            {/* <!-- CARD 3 --> */}
            <div className="cards">
                <img src={mobile} alt="Logo servicio" />
                <h3>MOBILE DEVELOPMENT</h3>
            </div>
            {/* <!-- FIN CARD 3 --> */}
            {/* <!-- CARD 4 --> */}
            <div className="cards">
                <img src={wscrapping} alt="Logo servicio" />
                <h3>WEB SCRAPING WITH PHYTON</h3>
            </div>
            {/* <!-- FIN CARD 4 --> */}
        </div>
    </div>
    <div className="quien-soy__services">
        <h2 className="h2__title">Los servicios que ofrezco</h2>
        <div className="quien-soy__cards__services">
            {/* <!-- CARD 1 --> */}
            <div className="cards">
                <img src={ux} alt="Logo servicio" />
                <h2>DISEÑO DE UI Y UX</h2>
                <p>Diseño hermosas interfaces web con Figma y Adobe XD</p>
            </div>
            {/* <!-- FIN CARD 1 --> */}
            {/* <!-- CARD 2 --> */}
            <div className="cards">
                <img src={desarrolloweb} alt="Logo servicio" />
                <h2>DESARROLLO WEB</h2>
                <p>
                    Creo hermosas interfaces con HTML, CSS y JavaScript simples y también marcos como Angular.
                </p>
            </div>
            {/* <!-- FIN CARD 2 --> */}
            {/* <!-- CARD 3 --> */}
            <div className="cards">
                <img src={mobile2} alt="Logo servicio" />
                <h2>DESARROLLO MÓVIL</h2>
                <p>
                    Soy un desarrollador móvil experto. Tengo experiencia usando Flutter y React Native.
                </p>
            </div>
            {/* <!-- FIN CARD 3 --> */}
            {/* <!-- CARD 4 --> */}
            <div className="cards">
                <img src={git} alt="Logo servicio" />
                <h2>CONTROL DE VERSIONES</h2>
                <p>
                    Puedo usar bien los sistemas de control de versiones, y Git y Mercurial son mi herramienta preferida.
                </p>
            </div>
            {/* <!-- FIN CARD 4 --> */}
            {/* <!-- CARD 5 --> */}
            <div className="cards">
                <img src={node} alt="Logo servicio" />
                <h2>NPM Y NODEJS</h2>
                <p>
                    Tengo una comprensión básica de NPM. También puedo desarrollar aplicaciones de propósito general con NodeJS
                </p>
            </div>
            {/* <!-- FIN CARD 5 --> */}
            {/* <!-- CARD 6 --> */}
            <div className="cards">
                <img src={webscrapping} alt="Logo servicio" />
                <h2>WEB SCRAPING</h2>
                <p>
                    Puedo recopilar contenido y datos de Internet y luego manipularlos y analizarlos según sea necesario.
                </p>
            </div>
            {/* FIN CARD 6 */}
        </div>
    </div>
</div>
  );
}

export default Quien_soy;
