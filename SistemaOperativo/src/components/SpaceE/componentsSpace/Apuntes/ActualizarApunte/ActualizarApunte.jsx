import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import back from '../../../../../icons/arrow-back-up-double.png';
import axios from 'axios';
import './ActualizarApunte.css';

const ActualizarApunte = () => {

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [ apunte, setApunte ] = useState({});

    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {

        const getApunte = async () => {

            try {
                
                const response = await axios.get(`http://localhost:3001/space/apuntes/${id}`);
                const apunte = response.data;
                setNombre(apunte.nombre);
                setDescripcion(apunte.descripcion);

                setApunte(response.data);

            } catch (error) {
                
                console.log('Error al traer el apunte', error.message);

            }

        }

        getApunte();

    }, []);

    const handleSave = async (e) => {

        try {
            e.preventDefault();
    
            await axios.put(`http://localhost:3001/space/apuntes/${id}`, {
                nombre,
                descripcion
            });
    
            navigate('/inicio/space');
            
        } catch (error) {
            
            console.log('Error al actualizar la tarea', error.message)

        }


    }

    const handleClick = () => {
        navigate(`/inicio/space/apunte/${id}`)
    }


    return (
        <div className='formularios form-123'>
  
        <div className='div-tittle-update'>
            <div onClick={handleClick}>
                <img id='img-back-task-update' src={back} alt="Volver" />
            </div>
            <h2 className='h2-actualizar'>Actualizar Apunte</h2>
        </div>
            

            <form onSubmit={handleSave}>
                <div className="username">
                    <input type="text" value={nombre} onChange={ e => setNombre(e.target.value)} required/>
                    <label>Nombre del Apunte</label>
                </div>  
                <div className="jajaja">
                    <label htmlFor='apunte-create-textarea' class="fecha-apunte-create">Descripcion</label>
                    <textarea id='apunte-create-textarea' cols='51' rows='10' type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
                </div>

                <button className='button-agregars' type='submit'>
                    Guardar
                </button>
            </form>
        </div>
    )

}


export default ActualizarApunte;