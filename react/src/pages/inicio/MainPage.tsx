import { Fragment } from "react";
import './mainPageStyle.css';
import Header from "../../components/header/Header";
import guitar from "../../assets/electricGuitar.webp";
import fenderLogo from "../../assets/Slider Img/Fender.png"
import ibanezLogo from "../../assets/Slider Img/ibanez.png"
import KorgLogo from "../../assets/Slider Img/Korg.png"
import pearlLogo from "../../assets/Slider Img/pearl.png"
import TresPinosLogo from "../../assets/Slider Img/Tres Pinos.png"
import YamahaLogo from "../../assets/Slider Img/Yamaha.png"

import Guitarras from "../../assets/Categorias Img/Guitarra y bajos.png"
import Percusiones from "../../assets/Categorias Img/Percusiones.png"
import Pianos from "../../assets/Categorias Img/Piano.png"
import Amplificadores from "../../assets/Categorias Img/Amplificadores.png"

import Envios from "../../assets/Beneficios Img/Envios.png"
import Productos from "../../assets/Beneficios Img/Productos.png"
import Pagos from "../../assets/Beneficios Img/Pagos.png"

import izquierdaImg from "../../assets/Banner/izquierda.jpg"
import derechaImg from "../../assets/Banner/derecha.jpg"


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
         <h2>Marcas Destacadas</h2>
         <div className="slider-track">
              {[
                fenderLogo, ibanezLogo, KorgLogo, pearlLogo, TresPinosLogo, YamahaLogo,
                fenderLogo, ibanezLogo, KorgLogo, pearlLogo, TresPinosLogo, YamahaLogo,
                fenderLogo, ibanezLogo, KorgLogo, pearlLogo, TresPinosLogo, YamahaLogo,
               ].map((logo, i) => (
                <img key={i} src={logo} alt={`logo-${i}`} />
               ))}  
          </div>     
        </div>
      

      {/* Categorías destacadas */}
      <section className="categories">
        <h2>Categorías Destacadas</h2>
        <div className="category-grid">
          <div className="category-item">
            <img src={Guitarras} alt="Guitarras Y Bajos" />
            <span>Guitarras Y Bajos</span>
          </div>
          <div className="category-item">
            <img src={Percusiones} alt="Percusiones" />
            <span>Percusiones</span>
          </div>
          <div className="category-item">
            <img src={Pianos} alt="Teclados" />
            <span>Teclados</span>
          </div>
          <div className="category-item">
            <img src={Amplificadores} alt="Amplificadores" />
            <span>Amplificadores</span>
          </div>
        </div>
      </section>


       {/* Bannner */}
    <div className="banner-container">
      <div
        className="banner-section left"
        style={{ backgroundImage: `url(${izquierdaImg})` }}
      >
        <h1>"Los mejores productos"</h1>
        <p>-Juan Alatorre</p>
      </div>

      <div
        className="banner-section right"
        style={{ backgroundImage: `url(${derechaImg})` }}
      >
        <h1>Compra y recibe en casa</h1>
        <p>Te decimos cómo</p>
      </div>
    </div>  
    
       {/* Beneficios */}
      <section className="benefits">
        <div className="benefit">
            <img src={Envios} alt="Envíos gratis" />
            <div>
             <strong>¡Envíos gratis y asegurados!</strong>
            <p>Compra más de $2500 y obten envío gratis, todos nuestros productos viajan asegurados. Si se pierde en el camino te lo reponemos o devolvemos tu dinero.</p>
            </div>
        </div>
        <div className="benefit">
            <img src={Productos} alt="Productos garantizados" />
            <div>
            <strong>Productos garantizados</strong>
            <p>Todos nuestros productos están garantizados. Si tu producto presenta una falla nosotros nos haremos cargo.</p>
          </div>
        </div>
        <div className="benefit">
            <img src={Pagos} alt="Transacciones seguras" />
          <div>
            <strong>Transacciones seguras</strong>
            <p>Todas nuestras transacciones están protegidas por SSL.</p>
          </div>
        </div>
      </section>

      {/* Reseñas de Clientes */}
      <section className="testimonials">
        <h2>Reseñas de Clientes</h2>
        <div className="testimonial-grid">
          <div className="testimonial">
            <p>"Excelente calidad en los productos. El envío fue rapidísimo."</p>
            <span>⭐⭐⭐⭐⭐</span>
            <h4>- Santiago Quiñonez</h4>
          </div>
          <div className="testimonial">
            <p>"Me atendieron muy bien y resolvieron todas mis dudas. ¡Gracias!"</p>
            <span>⭐⭐⭐⭐</span>
            <h4>- Maryjoce Gastelum</h4>
          </div>
          <div className="testimonial">
            <p>"La guitarra que compré superó mis expectativas. ¡Recomendados!"</p>
            <span>⭐⭐⭐⭐⭐</span>
            <h4>- Manolo Rendon</h4>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
      <div className="newsletter">
        <h2>Suscríbete para recibir novedades</h2>
        <form className="newsletter-form">
          <input type="email" placeholder="CORREO ELECTRÓNICO" />
          <button type="submit">ENVIAR</button>
        </form>
      </div>

     </footer>
   </Fragment> 
  );
};


export default App;