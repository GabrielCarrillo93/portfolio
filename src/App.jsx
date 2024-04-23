import './App.css'
import '@fontsource-variable/montserrat'
import '@fontsource/salsa'
import AboutMe from './components/AboutMe/AboutMe'
import Contacto from './components/Contacto/Contacto'
import DescargarCV from './components/DescargarCV/DescargarCV'
import Experiencia from './components/Experiencia/Experiencia'
import Proyectos from './components/Proyectos/Proyectos'
import Tecnologias from './components/Tecnologias/Tecnologias'
import Modal from './components/Modal/Modal'
import { useState } from 'react'
import Certificados from './components/Certificados/Certificados'

function App() {
    const [modal, setModal] = useState(true);
    return (
        <>
            <main>
                <AboutMe />
                <Proyectos />
                <Contacto />
                <DescargarCV />
                <Tecnologias />
                <Certificados />
                {modal && <Modal setModal={setModal}/>}
            </main>
        </>
    )
}

export default App
