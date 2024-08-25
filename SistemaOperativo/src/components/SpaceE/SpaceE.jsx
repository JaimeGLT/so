import { useState,useEffect } from "react";
import Apunte from "./componentsSpace/Apuntes/Apunte/Apunte";
import NavBar from "./componentsSpace/NavBar/NavBar";
import Tarea from "./componentsSpace/Tareas/Card/Tarea";
import './SpaceE.css';
import Salir from "./componentsSpace/NavBar/Salir";

const SpaceE = ({ changePage, setChangePage }) => {


    console.log('Página actual:', changePage);  // Log para depuración

    return (
        <div>
            <Salir />
            <div className='contenedor-space'>
                <NavBar setChangePage={setChangePage} />
                {changePage === 'tarea' ? <Tarea setChangePage={setChangePage}/> : <Apunte setChangePage={setChangePage} />}
            </div>
        </div>
    );
};

export default SpaceE;