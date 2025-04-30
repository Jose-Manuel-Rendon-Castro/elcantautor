import { Link } from "react-router-dom";
import './headerStyle.css'

function Header() {
    return(
        <header>
            <nav>
                <ul>
                    <li><Link to="/" className='logo'><h1>El cantautor</h1></Link></li>
                    
                    <li>
                        <Link to="/Instruments/Guitarras">Guitarras  ▾</Link>
                        <ul>
                            <li><Link to="/Instruments/Guitarras/Guitarras_acusticas">Guitarras acusticas</Link></li>
                            <li><Link to="/Instruments/Guitarras/Guitarras_electricas">Guitarras electricas</Link></li>
                            <li><Link to="/Instruments/Guitarras/Guitarras_electroacusticas">Guitarras electroacusticas</Link></li>
                            <li><Link to="/Instruments/Guitarras/Accesorios_para_guitarra">Accesorios para guitarra</Link></li>
                        </ul>
                    </li>
                    
                    <li>
                        <Link to="/Instruments/Bajos">Bajos  ▾</Link>
                        <ul>
                            <li><Link to="/Instruments/Bajos/Bajos_electricos">Bajos electricos</Link></li>
                            <li><Link to="/Instruments/Bajos/Bajos_acusticos">Bajos acusticos</Link></li>
                            <li><Link to="/Instruments/Bajos/Bajos_electroacusticos">Bajos electroacusticos</Link></li>
                            <li><Link to="/Instruments/Bajos/Accesorios_para_Bajo">Accesorios para Bajo</Link></li>
                        </ul>
                    </li>
                    
                    <li>
                        <Link to="/Instruments/Baterias_y_percusiones">Baterias y percusiones ▾</Link>
                        <ul>
                            <li>
                                <Link to="/Instruments/Baterias_y_percusiones/Baterias">Baterias ▾</Link>
                                <ul>
                                    <li><Link to="/Instruments/Baterias_y_percusiones/Baterias/Bateria_acustica">Bateria acustica</Link></li>
                                    <li><Link to="/Instruments/Baterias_y_percusiones/Baterias/Bateria_electrica">Bateria electrica</Link></li>
                                    <li><Link to="/Instruments/Baterias_y_percusiones/Baterias/Tambores">Tambores</Link></li>
                                    <li><Link to="/Instruments/Baterias_y_percusiones/Baterias/Tarolas">Tarolas</Link></li>
                                    <li><Link to="/Instruments/Baterias_y_percusiones/Baterias/Platillos">Platillos</Link></li>
                                    <li><Link to="/Instruments/Baterias_y_percusiones/Baterias/Pedales">Pedales</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/Instruments/Baterias_y_percusiones/Instrumentos_de_percusion">Instrumentos de percusion</Link></li>
                            <li><Link to="/Instruments/Baterias_y_percusiones/Percusíon_latina">Percusíon latina</Link></li>
                        </ul>
                    </li>
                    
                    <li>
                        <Link to="/Instruments/Teclados_y_sintentizadores">Teclados y sintentizadores ▾</Link>
                        <ul>
                            <li><Link to="/Instruments/Teclados_y_sintentizadores/Teclados">Teclados</Link></li>
                            <li><Link to="/Instruments/Teclados_y_sintentizadores/Sintetizadores">Sintetizadores</Link></li>
                            <li><Link to="/Instruments/Teclados_y_sintentizadores/Accesorios">Accesorios</Link></li>
                        </ul>
                    </li>
                    
                    <li>
                        <Link to="/Instruments/Equipo_de_Audio">Equipo de Audio  ▾</Link>
                        <ul>
                            <li><Link to="/Instruments/Equipo_de_Audio/Amplificadores">Amplificadores</Link></li>
                            <li><Link to="/Instruments/Equipo_de_Audio/Altavoces">Altavoces</Link></li>
                            <li><Link to="/Instruments/Equipo_de_Audio/Consolas_de_audio">Consolas de audio</Link></li>
                        </ul>
                    
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header