import './Proyectos.css'
import CardProyecto from '../CardProyecto/CardProyecto'

const Proyectos = () => {

    
  return (
    <section className="proyectos" >
        <h1>Proyectos</h1>
        <div className='cards'>
            <CardProyecto />
        </div>
    </section>
  )
}
export default Proyectos