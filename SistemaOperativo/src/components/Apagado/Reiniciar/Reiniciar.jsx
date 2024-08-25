import { useState, useEffect } from 'react';
import '../Apagar/Apagar.css';

const Reinciar = () => {

    const [ timer, setTimer ] = useState(true);
    const [ iniciado, setIniciado ] = useState(false)

    useEffect(() => {

        setTimeout(() => {
            setTimer(false)
        }, 5000)

        setTimeout(() => {
            setIniciado(true)
        }, 7000)

        setTimeout(() => {
            setIniciado(false)
        }, 11000)

    }, [timer]);

    return (
        <div className='container-apagando'>
            {
                timer ? <>
                    <div className='container-h2-apagando'>
                        <h2>Reiniciando el equipo</h2>
                    </div>
                    <div className='container-h2-apagando'>
                        <span className='loader'></span>

                    </div>
                </> : (
                    iniciado ? <>
                    <div className='container-h2-apagando'>
                        <h2>Ignis OS</h2>
                    </div>
                    <div className='container-h2-apagando'>
                        <span className='loader'></span>

                    </div>
                    </> : null
                ) 
            }
        </div>
    )

};


export default Reinciar;