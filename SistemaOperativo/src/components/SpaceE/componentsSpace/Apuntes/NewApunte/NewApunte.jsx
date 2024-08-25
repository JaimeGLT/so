import { useState } from 'react';
import axios from 'axios';

import './NewApunte.css'

const NewApunte = () => {
    
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
    
        try {
            
            const response = await axios.post('http://localhost:3001/space/apuntes', {
                nombre,
                descripcion,
            });
    
            console.log('Apunte creado', response.data);
    
            setNombre('');
            setDescripcion('');

    
        } catch (error) {
            
            console.error('Error creando el apunte', error.message);
    
        }
    
    };


    return (
        <div className='formularios'>
            <h2 className='tarea-form'>Apunte</h2>

            <form onSubmit={handleSubmit}>
                <div className="username">
                    <input type="text" value={nombre} onChange={ e => setNombre(e.target.value)} required/>
                    <label>Nombre del Apunte</label>
                </div>  
                <div className="holaquetal">
                    <label htmlFor='apunte-create-textarea' class="fecha-apunte-create">Descripcion</label>
                    <textarea placeholder='Escribir una descripción...' id='apunte-create-textarea' cols='38' rows='10' type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
                </div>

                <button className='button-agregars' type='submit'>
                    Crear Tarea
                </button>
            </form>
        </div>
    )
}


export default NewApunte;