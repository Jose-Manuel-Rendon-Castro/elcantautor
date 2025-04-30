import guitar from "../../images/electricGuitar.jpg"
import Header from "../../components/header/Header";
import "./mainPageStyle.css"

function MainPage () {
  return(
    <>
      <Header></Header>
      <div id="info-image">
        <img src={guitar} alt="Guitarra electrica"/>
        <div id="info-box">
          <div id="info">
            <strong>¿Quienes Somos?</strong>
            <p>En <b>El Cantautor</b> creemos que la música no es solo un arte, es una forma de vida. Somos una tienda online apasionada por conectar a músicos e todos los niveles con los instrumentos y equipos que necesitan para expresar su talento.
            
            Desde guitarras acústicas y eléctricas hasta micrófonos, teclados y accesorios, seleccionaremos cuidadosamente cada producto para ofrecer calidad, inspiración y autenticidad. Trabajamos con marcas reconocidas que comparten nuestra pasión por el sonido. ¡Bienvenido a tu hogar musical!</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainPage;