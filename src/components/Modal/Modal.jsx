import { Icon } from '@iconify/react/dist/iconify.js'
import './Modal.css'

// eslint-disable-next-line react/prop-types
const Modal = ({ setModal }) => {
    
    const handleCloseClick = () => {
        setModal(null)
    }
    return (
        <section className='modal'>
            <Icon 
                icon="jam:close-rectangle"
                className='icon'
                onClick={handleCloseClick}
                />
            <h1>Titulo</h1>
            <div className='izq'>
                <img 
                    src="" 
                    alt="" />
                <hr />
                <h2>Descripción</h2>
                <p className='desc'></p>
            </div>
            <div className='der'>
                <h2>Tecnologías usadas</h2>
                <ul>
                    
                </ul>
                <hr />
                <h2>Dependencias usadas</h2>
                <ul>
                    
                </ul>
                <hr />
                <div className="botones">
                    <a href="#" target="_blank">Demo</a>
                    <a href="#" target="_blank">Código</a>
                </div>
            </div>
        </section>
    )
}
export default Modal