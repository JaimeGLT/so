import { useState, useEffect } from 'react';
import './Apagar.css'

const Apagar = () => {

    const [ timer, setTimer ] = useState(true);

    useEffect(() => {

        setTimeout(() => {
            setTimer(false)
        }, 5000)

    }, [timer]);

    return (
        <div className='container-apagando'>
            {
                timer && <>
                    <div className='container-h2-apagando'>
                        <h2>Apagando el equipo</h2>
                    </div>
                    <div className='container-h2-apagando'>
                        <span className='loader'></span>

                    </div>
                </> 
            }
        </div>
    )

};


export default Apagar;