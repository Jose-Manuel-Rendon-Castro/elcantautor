import { Fragment } from "react/jsx-runtime";

function Login() {
    return (
        <Fragment>
            <div className="wrapper">
                <form action="">
                <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required></input>
                        <i className='bx bxs-user'></i>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required></input>
                        <i className='bx bxs-lock-alt'></i>
                    </div>

                    <div className="remember-forgot">
                        <label><input type="checkbox">Remember me</input></label>
                        <a href="#">Forgot password?</a>
                    </div>
                    <button type="submit" className="btn">Login</button>

                    <div className="register-link">
                        <p>Don't have an account? <a
                        href="#">Register</a></p>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}

export default Login;