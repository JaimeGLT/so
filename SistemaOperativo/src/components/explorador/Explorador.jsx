import React, { useState } from 'react';
import documentos from '../../icons2/buscar.png'
import descargar from '../../icons2/descarga-directa.png'
import discoLocal from '../../icons2/disco-local.png'
import galeria from '../../icons2/imagen.png'
import video from '../../icons2/leccion-de-video.png'
import cancion from '../../icons2/musica (1).png'
import carpeta from '../../icons2/icono-de-carpeta.png'
import musica from '../../icons2/reproductor-de-musica.png'
import repvideo from '../../icons2/video.png'
import desc from '../../icons2/descargar.png'
import docWord from '../../icons2/documento-de-word.png'
import rar from '../../icons2/raro.png'

import './Explorador.css';

function Explorador() {
  const [selectedFolder, setSelectedFolder] = useState(null);

  const openFolder = (folderName) => {
    setSelectedFolder(folderName);
  };

  const renderFolderContent = () => {
    switch (selectedFolder) {
      case 'Documentos':
        return <div className='div-principal-carpetas'>
          <div className='div-carpetas'>
            <img className='icono-carpeta' src={carpeta} alt="" />
            <label htmlFor="">Universidad</label>
          </div>
          <div className='div-carpetas'>
            <img className='icono-carpeta' src={carpeta} alt="" />
            <label htmlFor="">Tareas</label>
          </div>
          <div className='div-carpetas'>
            <img className='icono-carpeta' src={carpeta} alt="" />
            <label htmlFor="">Trabajo</label>
          </div>
        </div>;
      case 'Imágenes':
        return <div className='div-principal-carpetas'>
          <div className='div-carpetas'>
            <img className='icono-carpeta' src={carpeta} alt="" />
            <label htmlFor="">Familia</label>
          </div>
          <div className='div-carpetas'>
            <img className='icono-carpeta' src={carpeta} alt="" />
            <label htmlFor="">Cumpleaños</label>
          </div>
          <div className='div-carpetas'>
            <img className='icono-carpeta' src={carpeta} alt="" />
            <label htmlFor="">Recuerdos</label>
          </div>
          <div className='div-carpetas'>
            <img className='icono-carpeta' src={carpeta} alt="" />
            <label htmlFor="">2015-a</label>
          </div>
          <div className='div-carpetas'>
            <img className='icono-carpeta' src={carpeta} alt="" />
            <label htmlFor="">Cuba</label>
          </div>
          <div className='div-carpetas'>
            <img className='icono-carpeta' src={carpeta} alt="" />
            <label htmlFor="">Islas Canarias</label>
          </div>
        </div>;
      case 'Música':
        return <div className='div-principal-carpetas'>
          <div className='div-carpetas'>
            <img className='icono-carpeta' src={cancion} alt="" />
            <label htmlFor="">Americo - Por Siempre</label>
          </div>
          <div className='div-carpetas'>
            <img className='icono-carpeta' src={cancion} alt="" />
            <label htmlFor="">Bee Gees - Stayin Alive</label>
          </div>
          <div className='div-carpetas'>
            <img className='icono-carpeta' src={cancion} alt="" />
            <label htmlFor="">Don Omar - Zumba</label>
          </div>
          <div className='div-carpetas'>
            <img className='icono-carpeta' src={cancion} alt="" />
            <label htmlFor="">Don Omar - Salio el Sol</label>
          </div>
          <div className='div-carpetas'>
            <img className='icono-carpeta' src={cancion} alt="" />
            <label htmlFor="">Rafaga - Vete</label>
          </div>
          <div className='div-carpetas'>
            <img className='icono-carpeta' src={cancion} alt="" />
            <label htmlFor="">Rafaga - Mentirosa</label>
          </div>
          <div className='div-carpetas'>
            <img className='icono-carpeta' src={cancion} alt="" />
            <label htmlFor="">Rafaga - Una Cerveza</label>
          </div>
          <div className='div-carpetas'>
            <img className='icono-carpeta' src={cancion} alt="" />
            <label htmlFor="">Romeo Santos - Eres Mia</label>
          </div>
          <div className='div-carpetas'>
            <img className='icono-carpeta' src={cancion} alt="" />
            <label htmlFor="">18 Kilates feat</label>
          </div>
          <div className='div-carpetas'>
            <img className='icono-carpeta' src={carpeta} alt="" />
            <label htmlFor="">mix Cumbias</label>
          </div>
          <div className='div-carpetas'>
            <img className='icono-carpeta' src={carpeta} alt="" />
            <label htmlFor="">mix Reggaeton</label>
          </div>
          <div className='div-carpetas'>
            <img className='icono-carpeta' src={carpeta} alt="" />
            <label htmlFor="">mix Bachata</label>
          </div>
          <div className='div-carpetas'>
            <img className='icono-carpeta' src={carpeta} alt="" />
            <label htmlFor="">mix Salsa</label>
          </div>
          <div className='div-carpetas'>
            <img className='icono-carpeta' src={carpeta} alt="" />
            <label htmlFor="">Clasicos 80s</label>
          </div>
          <div className='div-carpetas'>
            <img className='icono-carpeta' src={carpeta} alt="" />
            <label htmlFor="">Clasicos 90s</label>
          </div>
        </div>;
      case 'Videos':
        return <div className='div-principal-carpetas'>
        <div className='div-carpetas'>
          <img className='icono-carpeta' src={carpeta} alt="" />
          <label htmlFor="">Cumpleaños</label>
        </div>
        <div className='div-carpetas'>
          <img className='icono-carpeta' src={carpeta} alt="" />
          <label htmlFor="">Viajes</label>
        </div>
        <div className='div-carpetas'>
          <img className='icono-carpeta' src={repvideo} alt="" />
          <label htmlFor="">Americo - Por Siempre</label>
        </div>
        <div className='div-carpetas'>
          <img className='icono-carpeta' src={repvideo} alt="" />
          <label htmlFor="">Bee Gees - Stayin Alive</label>
        </div>
        <div className='div-carpetas'>
          <img className='icono-carpeta' src={repvideo} alt="" />
          <label htmlFor="">Marisol - Bailar</label>
        </div>
      </div>;
      case 'Descargas':
        return <div className='div-principal-carpetas'>
        <div className='div-carpetas'>
          <img className='icono-carpeta' src={desc} alt="" />
          <label htmlFor="">Driver-Booster</label>
        </div>
        <div className='div-carpetas'>
          <img className='icono-carpeta' src={desc} alt="" />
          <label htmlFor="">j56sms-ksr</label>
        </div>
        <div className='div-carpetas'>
          <img className='icono-carpeta' src={docWord} alt="" />
          <label htmlFor="">celarrr</label>
        </div>
        <div className='div-carpetas'>
          <img className='icono-carpeta' src={docWord} alt="" />
          <label htmlFor="">apuntesdia2</label>
        </div>
        <div className='div-carpetas'>
          <img className='icono-carpeta' src={desc} alt="" />
          <label htmlFor="">2dlucs-ctr</label>
        </div>
        <div className='div-carpetas'>
          <img className='icono-carpeta' src={rar} alt="" />
          <label htmlFor="">Minecraft</label>
        </div>
      </div>;
      case 'Disco Local C':
        return <div className='div-principal-carpetas'>
        <div className='div-carpetas'>
          <img className='icono-carpeta' src={carpeta} alt="" />
          <label htmlFor="">Adjustment Program</label>
        </div>
        <div className='div-carpetas'>
          <img className='icono-carpeta' src={carpeta} alt="" />
          <label htmlFor="">Archivos de Programa</label>
        </div>
        <div className='div-carpetas'>
          <img className='icono-carpeta' src={carpeta} alt="" />
          <label htmlFor="">Archivos de Programa x86</label>
        </div>
        <div className='div-carpetas'>
          <img className='icono-carpeta' src={carpeta} alt="" />
          <label htmlFor="">ESD</label>
        </div>
        <div className='div-carpetas'>
          <img className='icono-carpeta' src={carpeta} alt="" />
          <label htmlFor="">PerfLogs</label>
        </div>
        <div className='div-carpetas'>
          <img className='icono-carpeta' src={carpeta} alt="" />
          <label htmlFor="">Usuarios</label>
        </div>
        <div className='div-carpetas'>
          <img className='icono-carpeta' src={carpeta} alt="" />
          <label htmlFor="">Windows</label>
        </div>
        <div className='div-carpetas'>
          <img className='icono-carpeta' src={carpeta} alt="" />
          <label htmlFor="">XboxGames</label>
        </div>
      </div>;
      default:
        return <p>Selecciona una carpeta para ver su contenido.</p>;
    }
  };

  return (
    <div className="file-explorer">
      <div className="main-content">
        <nav className="sidebar">
          <div className="file-item" onClick={() => openFolder('Documentos')}>
            <img src={documentos} alt="Carpeta de Documentos" className="file-icon" />
            <span className="file-name">Documentos</span>
          </div>
          <div className="file-item" onClick={() => openFolder('Imágenes')}>
            <img src={galeria} alt="Carpeta de Imágenes" className="file-icon" />
            <span className="file-name">Imágenes</span>
          </div>
          <div className="file-item" onClick={() => openFolder('Música')}>
            <img src={musica} alt="Carpeta de Música" className="file-icon" />
            <span className="file-name">Música</span>
          </div>
          <div className="file-item" onClick={() => openFolder('Videos')}>
            <img src={video} alt="Carpeta de Videos" className="file-icon" />
            <span className="file-name">Videos</span>
          </div>
          <div className="file-item" onClick={() => openFolder('Descargas')}>
            <img src={descargar} alt="Carpeta de Descargas" className="file-icon" />
            <span className="file-name">Descargas</span>
          </div>
          <div className="file-item" onClick={() => openFolder('Disco Local C')}>
            <img src={discoLocal} alt="Disco Local C" className="file-icon" />
            <span className="file-name">Disco Local C</span>
          </div>
        </nav>
        <div className="content-area">
          {renderFolderContent()}
        </div>
      </div>
    </div>
  );
}

export default Explorador;
