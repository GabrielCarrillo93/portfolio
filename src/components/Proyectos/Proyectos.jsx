/* eslint-disable react/prop-types */
import './Proyectos.css'
import CardProyecto from '../CardProyecto/CardProyecto'

const Proyectos = ({proyectos}) => {
    return (
        <section className="proyectos" >
            <h1>Proyectos</h1>
            <div className='cards'>
                {proyectos.map((el) => <CardProyecto titulo={el.titulo} key={el.id} descripcion={el.descripcion} proyecto={el}/>)}
            </div>
        </section>
    )
}
export default Proyectos