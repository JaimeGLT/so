import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import back from '../.././../../../icons/arrow-back-up-double.png'

import './TareaDetail.css';

const TareaDetail = () => {

    const [tareaDetails, setTareaDetails] = useState({});

    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {    

        const getTarea = async () => {
            try {
                const tarea = await axios.get(`http://localhost:3001/space/tareas/${id}`)
                setTareaDetails(tarea.data);
            } catch (error) {
                console.error('Error al obtener la tarea:', error);
            }
        }
    
                
        getTarea();


    }, [id]) 

    const handleDelete = () => {

            const eliminar = async () => {
                
                try {
                    await axios.delete(`http://localhost:3001/space/tareas/${id}`);
                    navigate('/inicio/space');
                    
                } catch (error) {
                    
                    console.log('error eliminando la tarea ' + error.message);
                    
                }
            }
                
            eliminar();

    };

    const handleClickImg = () => {
        navigate('/inicio/space');
    }

    return (
        <div id='container-detail-Tarea'>
            <div className="detail-container">
                <img className='img-back-detail' src={back} alt="Volver" onClick={handleClickImg}/>
                <div className='body-task-detail'>
                    <h2>{tareaDetails.nombre}</h2>
                    <h3>Descripcion</h3>
                    <p className='descripcion-task-detail'>{tareaDetails.descripcion}</p>
                    <p>Estado: <span className={tareaDetails.estado === 'Pendiente' ? 'detail-e-red' : tareaDetails.estado === 'EnProgreso' ? 'detail-e-yellow' : 'detail-e-green'}>{tareaDetails.estado}</span></p>
                    <p>Prioridad: <span className={tareaDetails.prioridad === 'Baja' ? 'detail-p-green' : tareaDetails.prioridad === 'Media' ? 'detail-p-yellow' : 'detail-p-red'} >{tareaDetails.prioridad}</span></p>
                    <p>Fecha De Entrega: <span className='fecha-detail-task'>{tareaDetails.fechaDeEntrega}</span></p>
                </div>

                <div className='buttons-task'>
                    <div className='div-button-task' id="div-button1">
                        <button className='button-1' onClick={handleDelete}>ELIMINAR</button>
                    </div>

                    <div className='div-button-task'>
                        <Link to={`/inicio/space/tarea/update/${id}`}>
                            <button className='button-22'>MODIFICAR</button>
                        </Link>

                    </div>
                </div>
            </div>
            </div>
    );

};

export default TareaDetail;