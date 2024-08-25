import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import back from '../.././../../../icons/arrow-back-up-double.png'

import './ActualizarTarea.css'

const ActualizarTarea = () => {

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [fechaDeEntrega, setFechaDeEntrega] = useState('');
    const [prioridad, setPrioridad] = useState('Media');
    const [estado, setEstado] = useState('Pendiente');

    const [ task, setTask ] = useState({});

    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {

        const getTarea = async () => {

            try {
                
                const response = await axios.get(`http://localhost:3001/space/tareas/${id}`);
                const tarea = response.data;
                setNombre(tarea.nombre);
                setDescripcion(tarea.descripcion);
                setFechaDeEntrega(tarea.fechaDeEntrega);
                setPrioridad(tarea.prioridad);
                setEstado(tarea.estado);

                setTask(response.data);

            } catch (error) {
                
                console.log('Error al traer la tarea', error.message);

            }

        }

        getTarea();

    }, []);

    const handleSave = async (e) => {

        try {
            e.preventDefault();
    
            await axios.put(`http://localhost:3001/space/tareas/${id}`, {
                nombre,
                descripcion,
                fechaDeEntrega,
                prioridad,
                estado
            });
    
            navigate('/inicio/space');
            
        } catch (error) {
            
            console.log('Error al actualizar la tarea', error.message)

        }


    }

    const handleClick = () => {
        navigate(`/inicio/space/tarea/${id}`)
    }


    return (
        <div className='formulario form-123'>
  
        <div className='div-tittle-update'>
            <div onClick={handleClick}>
                <img id='img-back-task-update' src={back} alt="Volver" />
            </div>
            <h2 className='h2-actualizar'>ACTUALIZAR TAREA</h2>
        </div>

            

            <form onSubmit={handleSave}>
                <div className="username">
                    <input type="text" value={nombre} onChange={ e => setNombre(e.target.value)} required/>
                    <label>Nombre de la Tarea</label>
                </div>  
                <div className="username">
                    <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
                    <label className="fecha">Descripcion</label>
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
                    Guardar
                </button>
            </form>
        </div>
    )
}


export default ActualizarTarea;