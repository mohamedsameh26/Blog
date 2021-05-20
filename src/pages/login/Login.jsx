import { Link } from 'react-router-dom'
import './login.css'

const Login = () => {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>E-mail</label>
                <input className="loginInput" type="email" placeholder="Enter Your Email..." />
                <label>Password</label>
                <input className="loginInput" type="password" placeholder="Enter Your Password..." />
                <button className="loginButton">Login</button>
            </form>
            <button className="loginRegisterButton">
                <Link className="link" to="/register">Register</Link>
            </button>
        </div>
    )
}

export default Login
