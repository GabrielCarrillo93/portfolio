import './CardProyecto.css'

// eslint-disable-next-line react/prop-types
const CardProyecto = ({setModal, setProy, id, proyectos, titulo}) => {
    
    return (
        <article className='card'>
            <h3>{titulo}</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, dolor, dolorum aperiam quaerat reprehenderit iste sunt dolore harum magni minus, ratione labore voluptas error repellendus architecto libero ea quis ad. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique nulla ipsum impedit dolor aperiam excepturi vero non adipisci, officiis aut velit praesentium, eum natus animi consequuntur debitis culpa illo ab.</p>
            <button
                onClick={() => {
                    setModal(true)
                    setProy(proyectos[id-1])
                }}>Ver más</button>

            
        </article>
    )
}
export default CardProyecto