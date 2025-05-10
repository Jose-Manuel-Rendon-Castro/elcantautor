import { Link } from 'react-router-dom';
import './headerStyle.css'

function Header() {
    return(
        <header>
            <nav>
                <ul>
                    <li><button className='logo'><h1>El cantautor</h1></button></li>
                    <li className='header-items'>
                        <Link to="#">Guitarras  ▾</Link>
                        <ul>
                            <li className='header-items'><Link to="#">Guitarras acusticas</Link></li>
                            <li className='header-items'><Link to="#">Guitarras electroacusticas</Link></li>
                            <li className='header-items'><Link to="#">Guitarras electricas</Link></li>
                            <li className='header-items'><Link to="#">Accesorios para guitarra</Link></li>
                        </ul>
                    </li>
                    <li className='header-items'>
                        <Link to="#">Bajos  ▾</Link>
                        <ul>
                            <li className='header-items'><Link to="#">Bajos acusticos</Link></li>
                            <li className='header-items'><Link to="#">Bajos electroacusticos</Link></li>
                            <li className='header-items'><Link to="#">Bajos electricos</Link></li>
                            <li className='header-items'><Link to="#">Accesorios para Bajo</Link></li>
                        </ul>
                    </li>
                    <li className='header-items'>
                        <Link to="#">Baterias y percusiones ▾</Link>
                        <ul>
                            <li className='header-items'>
                                <Link to="#">Baterias ▾</Link>
                                <ul>
                                    <li className='header-items'><Link to="#">Bateria acustica</Link></li>
                                    <li className='header-items'><Link to="#">Bateria electrica</Link></li>
                                    <li className='header-items'><Link to="#">Tambores</Link></li>
                                    <li className='header-items'><Link to="#">Tarolas</Link></li>
                                    <li className='header-items'><Link to="#">Platillos</Link></li>
                                    <li className='header-items'><Link to="#">Pedales</Link></li>
                                </ul>
                            </li>
                            <li className='header-items'><Link to="#">Instrumentos de percusion</Link></li>
                            <li className='header-items'><Link to="#">Percusíon latina</Link></li>
                        </ul>
                    </li>
                    <li className='header-items'>
                        <Link to="#">Teclados y sintentizadores ▾</Link>
                        <ul>
                            <li className='header-items'><Link to="#">Teclados</Link></li>
                            <li className='header-items'><Link to="#">Sintetizadores</Link></li>
                            <li className='header-items'><Link to="#">Accesorios</Link></li>
                        </ul>
                    </li>
                    <li className='header-items'>
                        <Link to="#">Equipo de Audio  ▾</Link>
                        <ul>
                            <li className='header-items'><Link to="#">Amplificadores</Link></li>
                            <li className='header-items'><Link to="#">Altavoces</Link></li>
                            <li className='header-items'><Link to="#">Consolas de audio</Link></li>
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