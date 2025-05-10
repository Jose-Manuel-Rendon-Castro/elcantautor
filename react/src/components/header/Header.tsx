import './headerStyle.css'

function Header() {
    return(
        <header>
            <nav>
                <ul>
                    <li><button className='logo'><h1>El cantautor</h1></button></li>
                    <li className='header-items'>
                        <a href="#">Guitarras  ▾</a>
                        <ul>
                            <li className='header-items'><a href="#">Guitarras acusticas</a></li>
                            <li className='header-items'><a href="#">Guitarras electroacusticas</a></li>
                            <li className='header-items'><a href="#">Guitarras electricas</a></li>
                            <li className='header-items'><a href="#">Accesorios para guitarra</a></li>
                        </ul>
                    </li>
                    <li className='header-items'>
                        <a href="#">Bajos  ▾</a>
                        <ul>
                            <li className='header-items'><a href="#">Bajos electricos</a></li>
                            <li className='header-items'><a href="#">Bajos acusticos</a></li>
                            <li className='header-items'><a href="#">Bajos electroacusticos</a></li>
                            <li className='header-items'><a href="#">Accesorios para Bajo</a></li>
                        </ul>
                    </li>
                    <li className='header-items'>
                        <a href="#">Baterias y percusiones ▾</a>
                        <ul>
                            <li className='header-items'>
                                <a href="#">Baterias ▾</a>
                                <ul>
                                    <li className='header-items'><a href="#">Bateria acustica</a></li>
                                    <li className='header-items'><a href="#">Bateria electrica</a></li>
                                    <li className='header-items'><a href="#">Tambores</a></li>
                                    <li className='header-items'><a href="#">Tarolas</a></li>
                                    <li className='header-items'><a href="#">Platillos</a></li>
                                    <li className='header-items'><a href="#">Pedales</a></li>
                                </ul>
                            </li>
                            <li className='header-items'><a href="#">Instrumentos de percusion</a></li>
                            <li className='header-items'><a href="#">Percusíon latina</a></li>
                        </ul>
                    </li>
                    <li className='header-items'>
                        <a href="#">Teclados y sintentizadores ▾</a>
                        <ul>
                            <li className='header-items'><a href="#">Teclados</a></li>
                            <li className='header-items'><a href="#">Sintetizadores</a></li>
                            <li className='header-items'><a href="#">Accesorios</a></li>
                        </ul>
                    </li>
                    <li className='header-items'>
                        <a href="#">Equipo de Audio  ▾</a>
                        <ul>
                            <li className='header-items'><a href="#">Amplificadores</a></li>
                            <li className='header-items'><a href="#">Altavoces</a></li>
                            <li className='header-items'><a href="#">Consolas de audio</a></li>
                        </ul>
                    </li>
                    <a href="/login">
                        <button>
                            <span>Iniciar Sesión</span>
                        </button>
                    </a>
                    <a href="/crear-cuenta">
                        <button>
                            <span>Registrarse</span>
                        </button>
                    </a>
                </ul>
            </nav>
        </header>
    );
}

export default Header