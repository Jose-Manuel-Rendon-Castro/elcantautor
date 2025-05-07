import { Fragment } from "react/jsx-runtime";
import './crearCuentaStyle.css'

function CrearCuenta() {
    return (
        <Fragment>
            <div className="body">
                <div className="wrapper">
                    <form action="">
                    <h1>Crear Cuenta</h1>
                        <div className="input-box">
                            <input type="text" placeholder="Nombre de usuario" required />
                            <i className='bx bxs-user'></i>
                        </div>
                        <div className="input-box">
                            <input type="email" placeholder="Correo electrónico" required />
                            <i className='bx bxs-user'></i>
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Contraseña" required />
                            <i className='bx bxs-lock-alt'></i>
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Confirmar contraseña" required />
                            <i className='bx bxs-lock-alt'></i>
                        </div>

                        <div className="remember-forgot">
                            <label><input type="checkbox" /> Recordar</label>
                            <a href="#">¿Olvidaste tu contraseña?</a>
                        </div>
                        <button type="submit" className="btn">Registrar cuenta</button>

                        <div className="register-link">
                            <p>¿Ya tienes cuenta?  <a
                            href="/login"> Inicia sesión!</a></p>
                        </div>
                        <div className="volver">
                            <a href="/">Ir a la página principal</a>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default CrearCuenta;