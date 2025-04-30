import './headerStyle.css'

function Header() {
    return(
        <header>
            <nav>
                <ul>
                    <li><button className='logo'><h1>El cantautor</h1></button></li>
                    <li>
                        <a href="#">Guitarras  ▾</a>
                        <ul>
                            <li><a href="#">Guitarras acusticas</a></li>
                            <li><a href="#">Guitarras electricas</a></li>
                            <li><a href="#">Guitarras electroacusticas</a></li>
                            <li><a href="#">Accesorios para guitarra</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Bajos  ▾</a>
                        <ul>
                            <li><a href="#">Bajos electricos</a></li>
                            <li><a href="#">Bajos acusticos</a></li>
                            <li><a href="#">Bajos electroacusticos</a></li>
                            <li><a href="#">Accesorios para Bajo</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Baterias y percusiones ▾</a>
                        <ul>
                            <li>
                                <a href="#">Baterias ▾</a>
                                <ul>
                                    <li><a href="#">Bateria acustica</a></li>
                                    <li><a href="#">Bateria electrica</a></li>
                                    <li><a href="#">Tambores</a></li>
                                    <li><a href="#">Tarolas</a></li>
                                    <li><a href="#">Platillos</a></li>
                                    <li><a href="#">Pedales</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Instrumentos de percusion</a></li>
                            <li><a href="#">Percusíon latina</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Teclados y sintentizadores ▾</a>
                        <ul>
                            <li><a href="#">Teclados</a></li>
                            <li><a href="#">Sintetizadores</a></li>
                            <li><a href="#">Accesorios</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Equipo de Audio  ▾</a>
                        <ul>
                            <li><a href="#">Amplificadores</a></li>
                            <li><a href="#">Altavoces</a></li>
                            <li><a href="#">Consolas de audio</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header