import { Fragment } from "react/jsx-runtime";
import './loginStyle.css'

function Login() {
    return (
        <Fragment>
            <div className="body">
                <div className="wrapper">
                    <form action="">
                    <h1>Iniciar Sesión</h1>
                        <div className="input-box">
                            <input type="text" placeholder="Nombre de usuario" required />
                            <i className='bx bxs-user'></i>
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Contraseña" required />
                            <i className='bx bxs-lock-alt'></i>
                        </div>

                        <div className="remember-forgot">
                            <label><input type="checkbox" /> Recordar</label>
                            <a href="#">¿Olvidaste tu contraseña?</a>
                        </div>
                        <button type="submit" className="btn">Iniciar sesión</button>

                        <div className="register-link">
                            <p>No tienes una cuenta todavía?  <a
                            href="#"> Registrate!</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Login;