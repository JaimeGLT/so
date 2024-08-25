import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import back from '../.././../../../icons/arrow-back-up-double.png'

import './DetailApunte.css';

const DetailApunte = ({ setChangePage }) => {

    const [apunteDetail, setApunteDetail] = useState({});

    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {    

        const getApunte = async () => {
            try {
                const apunte = await axios.get(`http://localhost:3001/space/apuntes/${id}`)
                setApunteDetail(apunte.data);
            } catch (error) {
                console.error('Error al obtener el apunte:', error);
            }
        }
    
                
        getApunte();


    }, [id]) 

    const handleDelete = () => {

            const eliminar = async () => {
                
                try {
                    await axios.delete(`http://localhost:3001/space/apuntes/${id}`);
                    navigate('/inicio/space');
                    
                } catch (error) {
                    
                    console.log('error eliminando el apunte ' + error.message);
                    
                }
            }
                
            eliminar();

    };

    const handleClickImg = () => {
        setChangePage('apunte');
        navigate('/inicio/space');
    }

    return (
        <div id='container-detail-Tarea'>
            <div className="detail-container">
                <img className='img-back-detail' src={back} alt="Volver" onClick={handleClickImg}/>
                <div className='body-task-detail'>
                    <h2>{apunteDetail.nombre}</h2>
                    <h3>Descripcion</h3>
                    <p className='descripcion-task-detail'>{apunteDetail.descripcion}</p>
                </div>

                <div className='buttons-task'>
                    <div className='div-button-task' id="div-button1">
                        <button className='button-1' onClick={handleDelete}>ELIMINAR</button>
                    </div>

                    <div className='div-button-task'>
                        <Link to={`/inicio/space/apunte/update/${id}`}>
                            <button className='button-2'>MODIFICAR</button>
                        </Link>

                    </div>
                </div>
            </div>
            </div>
    );

};

export default DetailApunte;