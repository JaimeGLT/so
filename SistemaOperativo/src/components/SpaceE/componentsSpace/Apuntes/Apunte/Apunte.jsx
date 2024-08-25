import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NewApunte from '../NewApunte/NewApunte';
import axios from 'axios';
import create from '../../../../../icons/circle-plus.png';
import back from '../../../../../icons/arrow-back-up-double.png';

import './Apuntes.css';

const Apunte = ({ setChangePage }) => {
    const [apuntes, setApuntes] = useState([]);
    const [ apuntesFiltered, setApuntesFiltered ] = useState([]);
    const [ contCrear, setContCrear ] = useState(false);
    const [ apuntesName, setApuntesName ] = useState('');
    const [ recargarPagina, setRecargarPagina ] = useState(false);

    useEffect(() => {
        const getApuntes = async () => {
            try {
                const allApuntes = await axios.get('http://localhost:3001/space/apuntes');
                setApuntes(allApuntes.data);
                setApuntesFiltered(allApuntes.data);
                console.log(apuntes);
            } catch (error) {
                console.log('Hubo un error al obtener los apuntes', error.message);
            }
        };
        getApuntes();
    }, [recargarPagina]);

    useEffect(() => {


        if(!apuntesName) return setApuntesFiltered(apuntes);
        
        const filteredApuntesByName = apuntes.filter(apunte => apunte.nombre.toLowerCase().includes(apuntesName.toLowerCase()));
        
        setApuntesFiltered(filteredApuntesByName);
        
        console.log(apuntesName)

        console.log(filteredApuntesByName)

    }, [apuntesName]);

    const descripcion = (desc) => {


        if(desc.length >= 21) {
            return desc.slice(0, 30) + '...';
        } else {
            return desc
        }
    }

    const handleClickCrear = () => {
        setContCrear(true);
        setApuntesName('');
    }

    return (

        <div className='div-principal-Apunte'>
            {
                contCrear ?
                    <div className='container-volver'>
                        <img src={back} className="volver" onClick={() => { setRecargarPagina(!recargarPagina);  setContCrear(false); setChangePage('apunte');}}/>
                    </div> 
                : (
                    <>
                        <div className='buscar-apunte'>

                            <div className='crear-apunte'>
                                <input type="text" placeholder='Buscar apunte...' value={apuntesName} onChange={e =>  setApuntesName(e.target.value)} />
                            </div>
                            <div className='contenedor-barra-apunte'>
                                <img src={create} alt="nuevo" onClick={handleClickCrear} />
                            </div>
                        </div>
                    </>
                ) 
            }
            {
                contCrear ? <NewApunte /> 
                :(
                    <div className='contenedor-body-apunte'>
                    {apuntesFiltered.map(apunte => (
                        <div className='Acard' key={apunte.id}>
                            <h3>{apunte.nombre}</h3>
                            <div className='body-card-apunte'>
                                <div className='content'>
                                    <p>{descripcion(apunte.descripcion)}</p>
                                </div>
                            </div>
                            <Link to={`/inicio/space/apunte/${apunte.id}`}>
                                <button>Ver Apunte</button>
                            </Link>
                        </div>
                    ))}
                </div>
                )
            }

        </div>
    );
};

export default Apunte;
