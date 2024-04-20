import './CardProyecto.css'

// eslint-disable-next-line react/prop-types
const CardProyecto = ({titulo, descripcion}) => {
    
    return (
        <article className='card'>
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
            <button>Ver más</button>
        </article>
    )
}
export default CardProyecto