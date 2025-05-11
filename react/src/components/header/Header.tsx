import { Link } from 'react-router-dom';
import './headerStyle.css'

function Header() {
    return(
        <header>
            <nav>
                <ul>
                    <li><button className='logo'><Link to="/"><h1>El cantautor</h1></Link></button></li>
                    <li className='header-items'>
                        <span>Guitarras  ▾</span>
                        <ul>
                            <li className='header-items'><Link to="/Guitarras/Acustico">Guitarras acusticas</Link></li>
                            <li className='header-items'><Link to="/Guitarras/Electroacusticas">Guitarras electroacusticas</Link></li>
                            <li className='header-items'><Link to="/Guitarras/Electrico">Guitarras electricas</Link></li>
                            <li className='header-items'><Link to="/Guitarras/Accesorio">Accesorios para guitarra</Link></li>
                        </ul>
                    </li>
                    <li className='header-items'>
                        <span>Bajos  ▾</span>
                        <ul>
                            <li className='header-items'><Link to="/Bajos/Acustico">Bajos acusticos</Link></li>
                            <li className='header-items'><Link to="/Bajos/Electroacusticas">Bajos electroacusticos</Link></li>
                            <li className='header-items'><Link to="/Bajos/Electrico">Bajos electricos</Link></li>
                            <li className='header-items'><Link to="/Bajos/Accesorio">Accesorios para Bajo</Link></li>
                        </ul>
                    </li>
                    <li className='header-items'>
                        <span>Baterias y percusiones ▾</span>
                        <ul>
                            <li className='header-items'>
                                <span>Baterias ▾</span>
                                <ul>
                                    <li className='header-items'><Link to="/Percusion/Baterias/Acustico">Bateria acustica</Link></li>
                                    <li className='header-items'><Link to="/Percusion/Baterias/Electrico">Bateria electrica</Link></li>
                                    <li className='header-items'><Link to="/Percusion/Baterias/Tambores">Tambores</Link></li>
                                    <li className='header-items'><Link to="/Percusion/Baterias/Tarolas">Tarolas</Link></li>
                                    <li className='header-items'><Link to="/Percusion/Baterias/Platillos/">Platillos</Link></li>
                                    <li className='header-items'><Link to="/Percusion/Baterias/Pedales">Pedales</Link></li>
                                </ul>
                            </li>
                            <li className='header-items'><Link to="/Percusion/Percusion">Instrumentos de percusion</Link></li>
                            <li className='header-items'><Link to="/Percusion/Latina">Percusíon latina</Link></li>
                            <li className='header-items'><Link to="/Percusion/Accesorios">Accesorios</Link></li>
                        </ul>
                    </li>
                    <li className='header-items'>
                        <span>Teclados y sintentizadores ▾</span>
                        <ul>
                            <li className='header-items'><Link to="/Teclados/Electrico">Teclados</Link></li>
                            <li className='header-items'><Link to="/Teclados/Sintetizador">Sintetizadores</Link></li>
                            <li className='header-items'><Link to="/Teclados/Accesorio">Accesorios</Link></li>
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
                    <Link to="/login">
                        <button>
                            <span>Iniciar Sesión</span>
                        </button>
                    </Link>
                    <Link to="/crear-cuenta">
                        <button>
                            <span>Registrarse</span>
                        </button>
                    </Link>
                </ul>
            </nav>
        </header>
    );
}

export default Header