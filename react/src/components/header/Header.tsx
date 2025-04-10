import './headerStyle.css'

function Header() {
    return(
        <div>
            <h1>El cantautor</h1>
        
            <nav className="navbar">
                <ul>
                    <li><a href="#">INICIO</a></li>
                    <li><a href="#">ARTICULOS</a></li>
                    <li><a href="#">CUENTA</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header