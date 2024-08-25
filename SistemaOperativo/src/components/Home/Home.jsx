import { useNavigate } from 'react-router-dom';
import { useState } from "react"
import chrome from "../../icons/cromo.png"
import discord from "../../icons/discordia.png"
import inicio from "../../icons/pagina-de-inicio.png"
import notas from "../../icons/publicalo.png"
import apagarr from "../../icons/power (1).png"
import musica from "../../icons/music.png"
import usuario from "../../icons/user.png"
import galeria from "../../icons/photo.png"
import calendario from "../../icons/calendar-month.png"
import ajustes from "../../icons/settings-2.png"
import paintMenu from "../../icons/pintar.png"
import notasMenu from "../../icons/lapiz.png"
import wordMenu from "../../icons/palabra.png"
import powerPointMenu from "../../icons/powerpoint.png"
import excelMenu from "../../icons/sobresalir.png"
import notionMenu from "../../icons/icons8-notion-24.png"
import canvaMenu from "../../icons/icons8-canva-48 (1).png"
import spotifyMenu from "../../icons/icons8-spotify-24.png"
import ankiMenu from "../../icons/icons8-incluso-48.png"
import scanMenu from "../../icons/icons8-adobe-escanear--48.png"
import chessMenu from "../../icons/icons8-ajedrez-48.png"
import exp from "../../icons/carpeta (1).png"

import papelera from "../../icons/basura.png"
import carpeta from '../../icons/carpeta.png'
import space from '../../icons/space.png'


import Dialog from '../Dialog/Dialog';
import Apagar from '../Apagado/Apagar/Apagar';
import Reinciar from '../Apagado/Reiniciar/Reiniciar';
import "./home.css"
import Explorador from '../explorador/Explorador';
import Suspender from '../Apagado/Suspender/Suspender';

const Home = () => {

    const [ contr, setContr ] = useState(false);
    const [ powerMenu, setPowerMenu ] = useState(false);
    const [ apagas, setApagas ] = useState(false);
    const [ reinicias, setReinicias ] = useState(false);
    const [ suspender, setSuspender ] = useState(false);
    const [ explorador, setExplorador ] = useState(false);

    const navigate = useNavigate();

    const handleClick = () => {
        setContr(!contr);
    }

    const handleSpace = () => {
        navigate('/inicio/space')
    }

    const handlePower = () => {
        setPowerMenu(!powerMenu)
    }

    const handleClickExp = () => {
        setExplorador(!explorador)
    }

    return (
        <div>

        {
            apagas ? <Apagar /> : reinicias ? <Reinciar /> : suspender ? <Suspender />
                : (
                    <>
                    <div className="background-image">
                    <div className='container-app-fondo'>
                        <div className='div-img-app-fondo'>
                            <img src={papelera} alt="" />
                            <label htmlFor="">Papelera de reciclaje</label>
                        </div>
                        <div className='div-img-app-fondo'>
                            <a href="https://www.microsoft.com/es-es/microsoft-365/free-office-online-for-the-web">
                                <img src={excelMenu} alt="" />
                            </a>
                                <label htmlFor="">Excel</label>
                        </div>
                        <div className='div-img-app-fondo'>
                            <a href="https://www.microsoft.com/es-es/microsoft-365/free-office-online-for-the-web">
                                <img src={powerPointMenu} alt="" />
                            </a>
                                <label htmlFor="">PowerPoint</label>
                        </div>
                        <div className='div-img-app-fondo'>
                            <a href="https://www.microsoft.com/es-es/microsoft-365/free-office-online-for-the-web">
                                <img src={wordMenu} alt="" />
                            </a>
                                <label htmlFor="">Word</label>
                        </div>
                        <div className='div-img-app-fondo'>
                            <a href="https://open.spotify.com/intl-es">
                                <img src={spotifyMenu} alt="" />
                            </a>
                                <label htmlFor="">Spotify</label>
                        </div>
                        <div className='div-img-app-fondo'>
                            <img src={space} alt="Space E" onClick={handleSpace} />
                            <label htmlFor="">Space E</label>
                        </div>
                        <div className='div-img-app-fondo'>
                            <a href="https://apps.ankiweb.net/">
                                <img src={ankiMenu} alt="" />
                            </a>
                                <label htmlFor="">Anki App</label>
                        </div>

                            <div className='div-img-app-fondo'>
                                <img src={notionMenu} alt="" />
                                <label htmlFor="">Notion App</label>
                            </div>

                        <div className='div-img-app-fondo'>
                            <img src={notasMenu} alt="" />
                            <label htmlFor="">Notas</label>
                        </div>
                        <div className='div-img-app-fondo'>
                            <img src={carpeta} alt="" />
                            <label htmlFor="">Mis imagenes</label>
                        </div>

                        {
                            explorador && <Explorador />
                        }

                    </div>
                    {
                        contr ? (

                            <div className="menu-desplegable">

                                <div className="menu-apagar">
                                    <div className="menu-apagar-image">
                                        <a href="">
                                            <img className="i-inicio-apagado" id="i-calendario" src={calendario} alt="Inicio/Apagado"/>
                                        </a>
                                    </div>

                                    <div className="menu-apagar-image">
                                        <a href="">
                                            <img className="i-inicio-apagado" id="i-photo" src={galeria} alt="Inicio/Apagado"/>
                                        </a>
                                    </div>
                                    <div className="menu-apagar-image">
                                        <img className="i-inicio-apagado" id="i-musica" src={musica} alt="Inicio/Apagado"/>
                                    </div>
                                    <div className="menu-apagar-image" id="i-user">
                                        <img className="i-inicio-apagado" id="i-user" src={usuario} alt="Inicio/Apagado"/>
                                    </div>

                                    {
                                        powerMenu && <Dialog setApagas={setApagas} setReinicias={setReinicias} setSuspender={setSuspender}/>
                                    }
                                    <div className="menu-apagar-image" id="i-settings">
                                        <img className="i-inicio-apagado"  src={ajustes} alt="Inicio/Apagado"/>
                                    </div>
                                    
                                    <div className="menu-apagar-image" id="i-inicio-apagado" onClick={handlePower}>
                                        <img className="i-inicio-apagado" src={apagarr} alt="Inicio/Apagado"/>
                                    </div>

                                </div>

                                <div className="menu-aplicaciones">
                                    <a href="https://paint.js.org/">
                                        <div className="div-aplicaciones">
                                            <img className="app-inicio" id="Paint" src={paintMenu} alt="" />
                                            <p className="p-app">Paint</p>
                                        </div>
                                    </a>
                                    <a href="https://es.anotepad.com/">
                                        <div className="div-aplicaciones">
                                            <img className="app-inicio " id="Notas" src={notasMenu} alt="" />
                                            <p className="p-app">Notas</p>
                                        </div>
                                    </a>
                                    <a href="https://www.microsoft.com/es-es/microsoft-365/free-office-online-for-the-web">
                                        <div className="div-aplicaciones">
                                            <img className="app-inicio inicio20" id="Word" src={wordMenu} alt="" />
                                            <p className="p-app">Word</p>
                                        </div>
                                    </a>
                                    <a href="https://www.microsoft.com/es-es/microsoft-365/free-office-online-for-the-web">
                                        <div className="div-aplicaciones">
                                            <img className="app-inicio inicio20" id="Powerpoint" src={powerPointMenu} alt="" />
                                            <p className="p-app">Power Point</p>
                                        </div>
                                    </a>
                                    <a href="https://www.microsoft.com/es-es/microsoft-365/free-office-online-for-the-web">
                                        <div className="div-aplicaciones">
                                            <img className="app-inicio inicio20" id="Excel" src={excelMenu} alt="" />
                                            <p className="p-app">Excel</p>
                                        </div>
                                    </a>
                                    <a href="https://www.notion.so/es-es">
                                        <div className="div-aplicaciones">
                                            <img className="app-inicio inicio20" src={notionMenu} alt="" />
                                            <p className="p-app">Notion App</p>
                                        </div>
                                    </a>
                                    <a href="https://www.canva.com/es_419/">
                                        <div className="div-aplicaciones">
                                            <img className="app-inicio " src={canvaMenu} alt="" />
                                            <p className="p-app">Canva App</p>
                                        </div>
                                    </a>
                                    <a href="https://open.spotify.com/intl-es">
                                        <div className="div-aplicaciones">
                                            <img className="app-inicio inicio20" src={spotifyMenu} alt="" />
                                            <p className="p-app">Spotify</p>
                                        </div>
                                    </a>
                                    <a href="https://apps.ankiweb.net/">
                                        <div className="div-aplicaciones">
                                            <img className="app-inicio " src={ankiMenu} alt="" />
                                            <p className="p-app">Anki App</p>
                                        </div>         
                                    </a>
                                    <a href="https://play.google.com/store/apps/details?id=com.adobe.scan.android&hl=es_BO">
                                        <div className="div-aplicaciones">
                                            <img className="app-inicio " src={scanMenu} alt="" />
                                            <p className="p-app">Adobe Scan: Escáner de PDF</p>
                                        </div>
                                    </a>
                                    <a href="https://www.chess.com/">
                                        <div className="div-aplicaciones">
                                            <img className="app-inicio inicio20" src={chessMenu} alt="" />
                                            <p className="p-app">Ajedrez</p>
                                        </div>
                                    </a>
                                </div>

                
                            </div>

                        ) : <div></div>
                    }
                    </div>

                    <div className="taskbar">

                        <div className="start-menu">
                            <button onClick={handleClick} className="start-button"><img className="google" src={inicio}/></button>                        
                        </div>


                        <div className="task-icons">

                            <div className="task-icon" id="chrome">
                                <a href="https://www.google.com/?hl=es">
                                    <img className="google" src={chrome}/>
                                </a>
                            </div>

                            <div className="task-icon" id="discord">
                                <a href="https://discord.com/">
                                    <img className="google" src={discord}/>
                                </a>
                            </div>

                            <div className="task-icon" id="notas" onClick={handleClickExp}>
                                <img className="google" src={exp}/>
                            </div>

                        </div>
                    </div>
                    </>

                )
        }


        </div>
    ) 

}

export default Home;