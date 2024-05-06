import './App.css'
import '@fontsource-variable/montserrat'
import '@fontsource/salsa'
import AboutMe from './components/AboutMe/AboutMe'
import Contacto from './components/Contacto/Contacto'
import DescargarCV from './components/DescargarCV/DescargarCV'
import Proyectos from './components/Proyectos/Proyectos'
import Tecnologias from './components/Tecnologias/Tecnologias'
import Modal from './components/Modal/Modal'
import { useEffect, useState } from 'react'
import {ModalContext} from './Context'
import Certificados from './components/Certificados/Certificados'

function App() {
    const [modal, setModal] = useState(null)
    const [proyectos, setProyectos] = useState([])
    const [certificados, setCertificados] = useState([])
    const [mostrar, setMostrar] = useState({})

    useEffect(() => {
        const getData = async () => {
            try {
                const resp = await fetch("https://my-json-server.typicode.com/GabrielCarrillo93/fake-server-portfolio/db");
                if (!resp.ok) throw new Error;
                const data = await resp.json();
                setCertificados(data.certificados)
                setProyectos(data.proyectos)
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    }, [])

    return (
        <>
                <ModalContext.Provider value={[modal, setModal, mostrar, setMostrar]}>
                    <main>
                        <AboutMe />
                        <Proyectos proyectos={proyectos}/>
                        <Contacto />
                        <DescargarCV />
                        <Tecnologias />
                        <Certificados certificados={certificados}/>
                        {modal && <Modal/>}
                    </main>
                </ModalContext.Provider>
                
        </>
    )
}

export default App
