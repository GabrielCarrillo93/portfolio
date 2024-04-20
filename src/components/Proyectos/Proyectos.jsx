import './Proyectos.css'
import CardProyecto from '../CardProyecto/CardProyecto'
import { useState } from 'react'
import { useEffect } from 'react';

const Proyectos = () => {
    const [proyecto, setProyecto] = useState([]);
    
    useEffect( () => {
        const getProyectos = async () => {
            try {
                const resp = await fetch("src/data.json");
                if (!resp.ok) throw new Error;
                const data = await resp.json();
                setProyecto(data.proyectos)
            } catch (error) {
                console.log(error);
            }
        }
        getProyectos();
    }, [])

  return (
    <section className="proyectos" >
        <h1>Proyectos</h1>
        <div className='cards'>
        {proyecto.map((el) => <CardProyecto titulo={el.titulo} key={el.id} descripcion={el.descripcion}/>)}
        </div>
    </section>
  )
}
export default Proyectos