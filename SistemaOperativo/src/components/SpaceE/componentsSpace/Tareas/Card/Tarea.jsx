import { useState, useEffect } from "react";
import axios from 'axios';
import moment from 'moment';
import AgregarTarea from "../AgregarTarea/AgregarTarea";
import Select from 'react-select';
import { Link } from "react-router-dom";
import filter from '../../../../../icons/filter-off (1).png'
import create from '../../../../../icons/circle-plus.png'
import back from '../../../../../icons/arrow-back-up-double.png'
import './Tarea.css';

const Tarea = ({ setChangePage }) => {
    const [tasks, setTasks] = useState([]);
    const [filtroEstado, setFiltroEstado] = useState('');
    const [filtroPrioridad, setFiltroPrioridad] = useState('');
    const [taskFilter, setTaskFilter] = useState([]);
    const [nuevaTarea, setNuevaTarea] = useState(false);
    const [filterByName, setFilterByName] = useState('');
    const [ recargarPagina, setRecargarPagina ] = useState(false);

    const optionsEstado = [
        { value: 'Pendiente', label: 'Pendiente' },
        { value: 'EnProgreso', label: 'En Progreso' },
        { value: 'Completada', label: 'Completada' }
    ];

    const optionsPrioridad = [
        { value: 'Baja', label: 'Baja' },
        { value: 'Media', label: 'Media' },
        { value: 'Alta', label: 'Alta' }
    ];

    useEffect(() => {
        const getTasks = async () => {
            try {
                const response = await axios.get('http://localhost:3001/space/tareas');
                setTasks(response.data);
            } catch (error) {
                console.log(error.message + " AXIOS TAREA");
            }
        }

        getTasks();
    }, [recargarPagina])

    useEffect(() => {
        const filteredTasks = tasks.filter(task => {

            if (!filterByName && !filtroEstado && !filtroPrioridad) {
                return true; // Mostrar todas las tareas
            }

            // Aplicar los filtros según corresponda
            if (filterByName && task.nombre.toLowerCase().includes(filterByName.toLowerCase())) {

                return true;
            }
            if (filtroEstado && task.estado === filtroEstado) {
 
                return true;
            }
            if (filtroPrioridad && task.prioridad === filtroPrioridad) {

                return true;
            }
            // Si no se aplica ningún filtro, devolver true para incluir la tarea
            return false;
        });
    
        setTaskFilter(filteredTasks);
    }, [filterByName, filtroEstado, filtroPrioridad, tasks]);
    
    
    


    const handleChangeEstado = (e) => {
        setFiltroEstado(e.value);
    }

    const handleChangePrioridad = (e) => {
        setFiltroPrioridad(e.value);
    }

    const handleClick = () => {
        setFiltroEstado('');
        setFiltroPrioridad('');
    };

    const handleClickNewTask = () => {
        setNuevaTarea(true);
    }

    const handleChangeName = (e) => {
        setFilterByName(e.target.value);
    }


    return (
        <div className="div-principal-tarea">
            {nuevaTarea ? (
                <div className='container-volver'>
                    <img src={back} className="volver" onClick={() => { setRecargarPagina(!recargarPagina); setNuevaTarea(false); setChangePage('tarea') }}/>
                </div>
            ) : (
                <div className='contenedor-barra'>
                    <div className='nav-bar' id='search-task'>
                        <input className='search' type="text" value={filterByName} onChange={handleChangeName} placeholder="Nombre de la Tarea" />
                    </div>

                    <div className='nav-bar'>
                        <Select
                            className='select'
                            options={optionsEstado}
                            value={optionsEstado.find(option => option.value === filtroEstado)}
                            onChange={handleChangeEstado}
                            placeholder="Selecciona el estado..."
                            isSearchable={true}

                        />
                    </div>

                    <div className='nav-bar' onClick={handleClick}>
                        <img src={filter}/>
                    </div>

                    <div className='nav-bar'>
                        <Select
                            className='select'
                            options={optionsPrioridad}
                            value={optionsPrioridad.find(option => option.value === filtroPrioridad)}
                            onChange={handleChangePrioridad}
                            placeholder="Selecciona la prioridad..."
                            isSearchable={true}
                        />
                    </div>

                    <div className='nav-bar div-img-task'>
                        <img className='img-create-task' src={create} onClick={handleClickNewTask}/>
                    </div>
                </div>
            )}
            <div className="contenedor-tarea">
                {nuevaTarea ? (
                    <AgregarTarea />
                ) : (
                    taskFilter.map(task => (
                        <div className='card' key={task.id}>
                            <h3>{task.nombre}</h3>
                            <div className='body-card-task'>
                                <p>Fecha de Entrega: <span className='fecha-ent'>{moment(task.fechaDeEntrega).format('DD/MM/YYYY')}</span></p>
                                <p>Prioridad: <span className={task.prioridad === 'Baja' ? 'span-task-green' : task.prioridad === 'Media' ? 'span-task-yellow' : 'span-task-red' }>{task.prioridad}</span></p>
                                <p>Estado: <span className={task.estado === 'Completada' ? 'span-task-green' : task.estado === 'EnProgreso' ? 'span-task-yellow' : 'span-task-red'}>{task.estado}</span></p>

                            </div>
                            <Link to={`/inicio/space/tarea/${task.id}`}>
                                <button>Ver tarea</button>
                            </Link>
                        </div>
                    ))
                )}
            </div>

        </div>
    );
};

export default Tarea;
