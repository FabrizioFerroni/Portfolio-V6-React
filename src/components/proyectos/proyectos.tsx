import React from "react";
import Twinder from "./img/twinder2.png";
import Livents from "./img/livents2.png";
import Moove from "./img/moove2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';

SwiperCore.use([Autoplay, Navigation, Pagination]);

function Proyectos() {
  return (
    <div>
      <div>
        <h2 className="proyectos__title">Proyectos destacados</h2>
        <p className="proyectos__description">
          He trabajado en muchos proyectos a lo largo de mi carrera como
          desarrollador web. Estos son algunos de mis proyectos del mundo real.
        </p>
      </div>
      {/*  SWIPER JS */}
      {/* Slider main container  */}
      <div className="proyectos__cards">
        <Swiper
          // install Swiper modules
          // modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          direction={'horizontal'}
          autoplay={{
            delay: 10500,
            disableOnInteraction: false,
          }}
          className="swiper"
          autoHeight={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            1280: {
              slidesPerView: 2,
              spaceBetween: 0,
              navigation: true
            },
            1366: {
              slidesPerView: 3,
              spaceBetween: 10,
              navigation: true
            },
            1920: {
              slidesPerView: 3,
              spaceBetween: 10,
              navigation: true

            },
          }}
          loop={true}
          grabCursor={true}
          navigation={false}
          pagination={{ 
            dynamicBullets: true,
            clickable: true
           }}
          scrollbar={false}
        >
          <SwiperSlide className="swiper-slide">
            <div className="cards">
              <img src={Twinder} alt="Img del proyecto" />
              <div>
                <h2>TWINDER</h2>
                <div className="proyectos__update">
                  <span>Ultima actualizacion: hace 5 dias</span>
                  <span>
                    Estado: <span className="publico">Publico</span>
                  </span>
                </div>
                <p>
                  Una aplicación de geolocalización en vivo para encontrar
                  tweets y usuarios de Twitter a tu alrededor.
                </p>
                <div className="proyectos__buttons">
                  <a href="#" target="_blank" className="live-btn">
                    Ver en vivo{" "}
                    <i className="icon__proyectos__btn uil uil-eye"></i>{" "}
                  </a>
                  <a href="#" target="_blank" className="github-btn">
                    Github Repo{" "}
                    <i className="icon__proyectos__btn uil uil-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="cards">
              <img
                src={Livents}
                //   style="opacity: 40%"
                className="opacity-40"
                alt="Img del proyecto"
              />
              <div>
                <h2>LIVENTS</h2>
                <div className="proyectos__update">
                  <span>Ultima actualizacion: hace 5 dias</span>
                  <span>
                    Estado: <span className="privado">Privado</span>
                  </span>
                </div>
                <p>
                  Una aplicación de transmisión de video con geolocalización en
                  vivo, para transmitir eventos.
                </p>
                <div className="proyectos__buttons">
                  <a href="#" target="_blank" className="live-btn">
                    Ver en vivo{" "}
                    <i className="icon__proyectos__btn uil uil-eye"></i>
                  </a>
                  <a href="#" target="_blank" className="github-btn disabled">
                    Github Repo{" "}
                    <i className="icon__proyectos__btn uil uil-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="cards">
              <img src={Moove} alt="Img del proyecto" />
              <div>
                <h2>MOOVE</h2>
                <div className="proyectos__update">
                  <span>Ultima actualizacion: hace 5 dias</span>
                  <span>
                    Estado: <span className="publico">Publico</span>
                  </span>
                </div>
                <p>
                  Aplicación móvil para reservar recogida y devolución
                  instantánea en las principales ciudades.
                </p>
                <div className="proyectos__buttons">
                  <a href="#" target="_blank" className="live-btn">
                    Ver en vivo{" "}
                    <i className="icon__proyectos__btn uil uil-eye"></i>
                  </a>
                  <a href="#" target="_blank" className="github-btn">
                    Github Repo{" "}
                    <i className="icon__proyectos__btn uil uil-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="cards">
              <img src={Twinder} alt="Img del proyecto" />
              <div>
                <h2>TWINDER</h2>
                <div className="proyectos__update">
                  <span>Ultima actualizacion: hace 5 dias</span>
                  <span>
                    Estado: <span className="publico">Publico</span>
                  </span>
                </div>
                <p>
                  Una aplicación de geolocalización en vivo para encontrar
                  tweets y usuarios de Twitter a tu alrededor.
                </p>
                <div className="proyectos__buttons">
                  <a href="#" target="_blank" className="live-btn">
                    Ver en vivo{" "}
                    <i className="icon__proyectos__btn uil uil-eye"></i>{" "}
                  </a>
                  <a href="#" target="_blank" className="github-btn">
                    Github Repo{" "}
                    <i className="icon__proyectos__btn uil uil-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cards">
              <img
                src={Livents}
                //   style="opacity: 40%"
                className="opacity-40"
                alt="Img del proyecto"
              />
              <div>
                <h2>LIVENTS</h2>
                <div className="proyectos__update">
                  <span>Ultima actualizacion: hace 5 dias</span>
                  <span>
                    Estado: <span className="privado">Privado</span>
                  </span>
                </div>
                <p>
                  Una aplicación de transmisión de video con geolocalización en
                  vivo, para transmitir eventos.
                </p>
                <div className="proyectos__buttons">
                  <a href="#" target="_blank" className="live-btn">
                    Ver en vivo{" "}
                    <i className="icon__proyectos__btn uil uil-eye"></i>
                  </a>
                  <a href="#" target="_blank" className="github-btn disabled">
                    Github Repo{" "}
                    <i className="icon__proyectos__btn uil uil-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cards">
              <img src={Moove} alt="Img del proyecto" />
              <div>
                <h2>MOOVE</h2>
                <div className="proyectos__update">
                  <span>Ultima actualizacion: hace 5 dias</span>
                  <span>
                    Estado: <span className="publico">Publico</span>
                  </span>
                </div>
                <p>
                  Aplicación móvil para reservar recogida y devolución
                  instantánea en las principales ciudades.
                </p>
                <div className="proyectos__buttons">
                  <a href="#" target="_blank" className="live-btn">
                    Ver en vivo{" "}
                    <i className="icon__proyectos__btn uil uil-eye"></i>
                  </a>
                  <a href="#" target="_blank" className="github-btn">
                    Github Repo{" "}
                    <i className="icon__proyectos__btn uil uil-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="mas__proyectos">
        <a
          href="https://github.com/FabrizioFerroni"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          Ver mas en Github
          <i className="icon__proyetos uil uil-github"></i>
        </a>
      </div>
    </div>
  );
}

export default Proyectos;
