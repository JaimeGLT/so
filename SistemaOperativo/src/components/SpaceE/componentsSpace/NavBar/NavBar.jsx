import './NavBar.css';
import note from '../../../../icons/clipboard-text.png';
import book from '../../../../icons/book.png';
import calendar from '../../../../icons/calendar-month (1).png';
import pencil from '../../../../icons/pencil.png';

const NavBar = ({ setChangePage }) => {

    const handleClickApuntes = () => {
        console.log('Clic en Apuntes'); 
        setChangePage('apunte');
    };

    const handleClickTareas = () => {
        console.log('Clic en Tareas'); 
        setChangePage('tarea');
    }

    return (
        <div className='navBar-container'>
            <div className='div-img'>
                <img className='img-navBar' src={note} onClick={handleClickApuntes} />
            </div>
            <div className='div-img'>
                <img className='img-navBar' src={book} onClick={handleClickTareas} />
            </div>
            <div className='div-img'>
                <img className='img-navBar' src={calendar} />
            </div>
        </div>
    );
};

export default NavBar;