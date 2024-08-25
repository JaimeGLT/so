import "./sesion.css"
import logo from "../../images/png-clipart-person-thought-people-thinking-desktop-wallpaper-glasses.jpg"
import { Link } from "react-router-dom"

const Sesion = () => {

    return (
        <div className='login-principal'>

            <div className="login-container">
                <div className="avatar">
                    <img src={logo} alt="" />
                </div >

                <div>
                    <p className="usuario">Rosa Melano</p>
                </div>

                <Link to="/inicio">
                    <div className="login-box">
                        <button className="p-button">Iniciar Sesión</button>
                    </div>
                </Link>
            </div>
        </div>

    )

}

export default Sesion;