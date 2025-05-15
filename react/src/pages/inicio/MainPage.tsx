import { Fragment } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import './mainPageStyle.css';
import Header from "../../components/header/Header";
import guitar from "../../assets/electricGuitar.webp";
import fenderLogo from "../../assets/Slider Img/Fender.png"
import ibanezLogo from "../../assets/Slider Img/ibanez.png"
import KorgLogo from "../../assets/Slider Img/Korg.png"
import pearlLogo from "../../assets/Slider Img/pearl.png"
import TresPinosLogo from "../../assets/Slider Img/Tres Pinos.png"
import YamahaLogo from "../../assets/Slider Img/Yamaha.png"


function App() {
  return(
    <Fragment>
      <Header></Header>
      <div id="info-image">
        <img loading="lazy" src={guitar} alt="Guitarra electrica"/>
        <div id="info-box">
          <div id="info">
            <strong>¿Quienes Somos?</strong>
            <p>En <b>El Cantautor</b> creemos que la música no es solo un arte, es una forma de vida. Somos una tienda online apasionada por conectar a músicos en todos los niveles con los instrumentos y equipos que necesitan para expresar su talento.
            
            Desde guitarras acústicas y eléctricas hasta micrófonos, teclados y accesorios, seleccionaremos cuidadosamente cada producto para ofrecer calidad, inspiración y autenticidad. Trabajamos con marcas reconocidas que comparten nuestra pasión por el sonido. ¡Bienvenido a tu hogar musical!</p>
          </div>
        </div>
      </div>

      {/* Slider de imágenes */}
      
      <div className="slider-box">
        <div className="slider-conteiner">
          <img src={fenderLogo} alt="" />
          <img src={ibanezLogo} alt="" />
          <img src={KorgLogo} alt="" />
          <img src={pearlLogo} alt="" />
          <img src={TresPinosLogo} alt="" />
          <img src={YamahaLogo} alt="" />
        </div>
      </div>

      {/* Categorías destacadas */}
      <section className="categories">
        <h2>Categorías Destacadas</h2>
        <div className="category-grid">
          <div className="category-item">Guitarras</div>
          <div className="category-item">Bajos</div>
          <div className="category-item">Teclados</div>
          <div className="category-item">Percusiones</div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="testimonials">
        <h2>Lo que dicen nuestros clientes</h2>
        <div className="testimonial">
          "¡Excelente calidad y atención!" - Juan M.
        </div>
        <div className="testimonial">
          "Encontré todo lo que necesitaba para mi banda." - Laura P.
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <h2>Suscríbete para recibir novedades</h2>
        <input type="email" placeholder="Tu correo" />
        <button className="btn-primary">Suscribirse</button>
      </section>
    </Fragment>
  );
}

export default App;