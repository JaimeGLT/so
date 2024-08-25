import restart from '../../icons/rotate.png'
import power from '../../icons/power (1).png'
import suspender from '../../icons/moon (1).png'
import "./dialog.css"

const Dialog = ({ setApagas, setReinicias, setSuspender }) => {

    const setApagarr = () => {
        setApagas(true);
    }

    const setReiniciar = () => {
        setReinicias(true)

        setTimeout(() => {
            setReinicias(false)
        }, 12000);

    }

    const setSuspendes = () => {
        setSuspender(true);
    }

    return (
        <div className="dialog-container">
            <div className="start-menus">
                <div className="start-menu-options" id="startMenuOptions">
                    <div className='div-menu-apagar-reiniciar' onClick={setSuspendes}>
                        <img src={suspender} alt=""/>
                        <p>Suspender</p>
                    </div>
                    <div className='div-menu-apagar-reiniciar' onClick={setReiniciar}>
                        <img src={restart} alt=""/>
                        <p>Reiniciar</p>
                    </div>
                    <div className='div-menu-apagar-reiniciar' onClick={setApagarr}>
                        <img src={power} alt="" />
                        <p>Apagar</p>
                    </div>


                </div>
            </div>
        </div>

    )

};

export default Dialog;