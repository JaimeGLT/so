import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Suspender = () => {

    const [ timer, setTimer ] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {

        setTimeout(() => {
            setTimer(false)
        }, 3000)

    }, [timer]);

    const handleClick = () => {
        navigate('/');
    };

    return (
        <div className='container-apagando' onClick={handleClick}>
            {
                timer && <>
                    <div className='container-h2-apagando'>
                        <h2>Suspendiendo el equipo</h2>
                    </div>
                    <div className='container-h2-apagando'>
                        <span className='loader'></span>

                    </div>
                </> 
            }
        </div>
    )

};

export default Suspender;