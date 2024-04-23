
import { useContext } from 'react'
import './CardProyecto.css'
import { ModalContext } from '../../Context'

// eslint-disable-next-line react/prop-types
const CardProyecto = ({titulo, descripcion, proyecto}) => {
    const modal = useContext(ModalContext)
    return (
            <article className='card'>
                <h3>{titulo}</h3>
                <p>{descripcion}</p>
                <button
                    onClick={() => {
                        modal[1](true)
                        modal[3](proyecto)
                    }}>Ver más</button>
            </article>
    )
}
export default CardProyecto