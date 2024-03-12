import './App.css'
import AboutMe from './components/AboutMe/AboutMe'
import Contacto from './components/Contacto/Contacto'
import DescargarCV from './components/DescargarCV/DescargarCV'
import Experiencia from './components/Experiencia/Experiencia'
import Proyectos from './components/Proyectos/Proyectos'
import Tecnologias from './components/Tecnologias/Tecnologias'

function App() {
    return (
        <>
            <main>
                <AboutMe />
                <Proyectos />
                <Contacto />
                <DescargarCV />
                <Tecnologias />
                <Experiencia />
            </main>
        </>
    )
}

export default App
