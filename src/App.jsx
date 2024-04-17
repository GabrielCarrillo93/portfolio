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

function App() {
    const [modal, setModal] = useState(null);
    return (
        <>
            <main>
                <AboutMe />
                <Proyectos />
                <Contacto />
                <DescargarCV />
                <Tecnologias />
                <Experiencia />
                {modal && <Modal setModal={setModal}/>}
            </main>
        </>
    )
}

export default App
