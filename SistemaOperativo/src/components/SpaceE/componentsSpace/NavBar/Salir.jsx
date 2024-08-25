import { useNavigate } from 'react-router-dom';
import x from '../../../../icons/x.png';
import './Salir.css'

const Salir = () => {

    const navigate = useNavigate();


    const handleClick = () => {

        navigate('/inicio');

    };

    return (
        <div className='container-salir'>
            <div className='container-cerrar'>
                <img onClick={handleClick} src={x} alt="Cerrar" />
            </div>
        </div>
    )
}

export default Salir;