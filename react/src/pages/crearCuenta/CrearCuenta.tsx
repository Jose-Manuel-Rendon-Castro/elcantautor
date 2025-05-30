import { Fragment } from "react/jsx-runtime";
import './crearCuentaStyle.css'
import { useState } from "react";

function CrearCuenta() {

    const [usernameRegistration, setUsernameRegistration] = useState("");
    const [passwordRegistration, setPasswordRegistration] = useState("");
    const [emailRegistration, setEmailRegistration] = useState("");

    return (
        <Fragment>
            <div className="body">
                <div className="wrapper">
                    <form action="">
                    <h1>Crear Cuenta</h1>
                        <div className="input-box">
                            <input type="text" placeholder="Nombre de usuario" required onChange={(e) => {
                                setUsernameRegistration(e.target.value)
                            }}/>
                            <i className='bx bxs-user'></i>
                        </div>
                        <div className="input-box">
                            <input type="email" placeholder="Correo electrónico" required onChange={(e) => {
                                setEmailRegistration(e.target.value)
                            }}/>
                            <i className='bx bxs-user'></i>
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Contraseña" required onChange={(e) => {
                                setPasswordRegistration(e.target.value)
                            }}/>
                            <i className='bx bxs-lock-alt'></i>
                        </div>
                        <button type="submit" className="btn">REGISTRAR CUENTA</button>

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