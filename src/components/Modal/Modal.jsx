import { Icon } from '@iconify/react/dist/iconify.js'
import './Modal.css'
import { useContext, useEffect } from 'react'
import { ModalContext } from '../../Context'

// eslint-disable-next-line react/prop-types
const Modal = () => {
    const modal = useContext(ModalContext)
    const proyecto = modal[2] 
    
    const handleCloseClick = () => {
        modal[1](null)
    }
    return (
        <section className='modal'>
            <Icon 
                icon="jam:close-rectangle"
                className='icon'
                onClick={handleCloseClick}
                />
            <h1>{proyecto.titulo}</h1>
            <div className='izq'>
                <img 
                    src={proyecto.imagen} 
                    alt={proyecto.titulo} />
                <hr />
                <h2>Descripción</h2>
                <p className='desc'>{proyecto.descripcion}</p>
            </div>
            <div className='der'>
                <h2>Tecnologías usadas</h2>
                <ul>
                    {proyecto.tecnologias.map((el, i) => <li key={i}>{el}</li>)}
                </ul>
                <hr />
                <h2>Dependencias usadas</h2>
                <ul>
                    {proyecto.librerias?.map((el, i) => <li key={i}>{el}</li>)}
                </ul>
                <hr />
                <div className="botones">
                    <a href={proyecto.demo} target="_blank">Demo</a>
                    <a href={proyecto.codigo} target="_blank">Código</a>
                </div>
            </div>
        </section>
    )
}
export default Modal