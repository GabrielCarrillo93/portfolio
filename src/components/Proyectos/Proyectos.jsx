import CardProyecto from '../CardProyecto/CardProyecto'
import './Proyectos.css'

const Proyectos = () => {
  return (
    <section className="proyectos" >
        <h1>Proyectos</h1>
        <div className='cards'>
            <CardProyecto />
            <CardProyecto />
            <CardProyecto />
            <CardProyecto />
            <CardProyecto />
            <CardProyecto />
        </div>
    </section>
  )
}
export default Proyectos