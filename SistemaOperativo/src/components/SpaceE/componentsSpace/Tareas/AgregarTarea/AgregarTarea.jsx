import { useState } from 'react';
import axios from 'axios';

import './AgregarTarea.css';

const AgregarTarea = () => {

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [fechaDeEntrega, setFechaDeEntrega] = useState('');
    const [prioridad, setPrioridad] = useState('Media');
    const [estado, setEstado] = useState('Pendiente');


    const handleSubmit = async (e) => {
        e.preventDefault();
        
    
        try {
            
            const response = await axios.post('http://localhost:3001/space/tareas', {
                nombre,
                descripcion,
                fechaDeEntrega, 
                prioridad,
                estado
            });
    
            console.log('Tarea creada', response.data);
    
            setNombre('');
            setDescripcion('');
            setFechaDeEntrega('');
            setPrioridad('Media');
            setEstado('Pendiente');
    
        } catch (error) {
            
            console.error('Error creando la tarea', error.message);
    
        }
    
    };

    return (
        <div className='formulario'>
            <h2 className='tarea-form'>TAREA</h2>

            <form onSubmit={handleSubmit}>
                <div className="username">
                    <input type="text" value={nombre} onChange={ e => setNombre(e.target.value)} required/>
                    <label>Nombre de la Tarea</label>
                </div>  
                <div className="username">
                    <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
                    <label class="fecha">Descripcion</label>
                </div>
                <div className="username">
                <input type="date" value={fechaDeEntrega} onChange={(e) => setFechaDeEntrega(e.target.value)} required />
                <label>Fecha De Entrega</label>
                </div>
                <div className="username">
                    <select value={prioridad} onChange={(e) => setPrioridad(e.target.value)}>
                        <option value="Baja">Baja</option>
                        <option value="Media">Media</option>
                        <option value="Alta">Alta</option>
                    </select>
                    <label>Prioridad</label>
                </div>
                <div className="username">
                    <select value={estado} onChange={(e) => setEstado(e.target.value)}>
                        <option value="Pendiente">Pendiente</option>
                        <option value="EnProgreso">En Progreso</option>
                        <option value="Completada">Completada</option>
                    </select>
                    <label>Estado</label>
                </div>

                <button className='button-agregar' type='submit'>
                    Crear Tarea
                </button>
            </form>
        </div>
    );

};

export default AgregarTarea;