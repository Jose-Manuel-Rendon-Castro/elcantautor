import { Link } from 'react-router-dom';
import './headerStyle.css'
import '../../data/categoriaArticulos.json'
import LOGO2 from'../../assets/LOGO2.png'

function Header() {
    return(
        <header>
            <nav className="nav">
                <div className="logo-container">
                    <Link to="/">
                    <img src={LOGO2} alt="El Cantautor" className='logo' />
                    </Link>
                </div>
               <ul>    
                    <li className='header-items'>
                        <span>Guitarras  ▾</span>
                        <ul>
                            <li className='header-items'><Link to="/Guitarras/Acustico">Guitarras acusticas</Link></li>
                            <li className='header-items'><Link to="/Guitarras/Electroacustico">Guitarras electroacusticas</Link></li>
                            <li className='header-items'><Link to="/Guitarras/Electrico">Guitarras electricas</Link></li>
                            <li className='header-items'><Link to="/Guitarras/Accesorios">Accesorios para guitarra</Link></li>
                        </ul>
                    </li>
                    <li className='header-items'>
                        <span>Bajos  ▾</span>
                        <ul>
                            <li className='header-items'><Link to="/Bajos/Acustico">Bajos acusticos</Link></li>
                            <li className='header-items'><Link to="/Bajos/Electroacustico">Bajos electroacusticos</Link></li>
                            <li className='header-items'><Link to="/Bajos/Electrico">Bajos electricos</Link></li>
                            <li className='header-items'><Link to="/Bajos/Accesorios">Accesorios para Bajo</Link></li>
                        </ul>
                    </li>
                    <li className='header-items'>
                        <span>Baterias y percusiones ▾</span>
                        <ul>
                            <li className='header-items'><Link to="/Percusion/Bateria Acustica">Bateria acustica</Link></li>
                            <li className='header-items'><Link to="/Percusion/Bateria Electrica">Bateria electrica</Link></li>
                            <li className='header-items'><Link to="/Percusion/Tambores">Tambores</Link></li>
                            <li className='header-items'><Link to="/Percusion/Tarolas">Tarolas</Link></li>
                            <li className='header-items'><Link to="/Percusion/Platillos">Platillos</Link></li>
                            <li className='header-items'><Link to="/Percusion/Pedales">Pedales</Link></li>
                            <li className='header-items'><Link to="/Percusion/Latina">Percusíon latina</Link></li>
                            <li className='header-items'><Link to="/Percusion/Accesorios">Accesorios</Link></li>
                        </ul>
                    </li>
                    <li className='header-items'>
                        <span>Teclados y sintentizadores ▾</span>
                        <ul>
                            <li className='header-items'><Link to="/Teclados/Electrico">Teclados</Link></li>
                            <li className='header-items'><Link to="/Teclados/Sintetizador">Sintetizadores</Link></li>
                            <li className='header-items'><Link to="/Teclados/Accesorios">Accesorios</Link></li>
                        </ul>
                    </li>
                    <li className='header-items'>
                        <span>Equipo de Audio  ▾</span>
                        <ul>
                            <li className='header-items'><Link to="/Audio/Amplificadores">Amplificadores</Link></li>
                            <li className='header-items'><Link to="/Audio/Altavoces">Altavoces</Link></li>
                            <li className='header-items'><Link to="/Audio/Consolas">Consolas de audio</Link></li>
                        </ul>
                    </li>
                </ul>
                    
                <div id="sesion">
                    <Link to="/catalogo">
                        <button>
                            <span>Ver Catálogo</span>
                        </button>
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Header