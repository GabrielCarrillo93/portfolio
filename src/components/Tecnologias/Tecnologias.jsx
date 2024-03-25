import CajaTec from '../CajaTec/CajaTec'
import './Tecnologias.css'

const Tecnologias = () => {
    return (
        <section className="tecnologia">
            <h1>Tecnologías</h1>
            <div className="cont">
                <CajaTec 
                    nombre="HTML5"
                    clase="html" 
                    icono="devicon:html5"
                    />
                <CajaTec 
                    nombre="CSS3"
                    clase="css" 
                    icono="devicon:css3"
                    />
                <CajaTec 
                    nombre="JavaScript"
                    clase="javascript" 
                    icono="devicon:javascript"
                    />
                <CajaTec 
                    nombre="TypeScript"
                    clase="typescript" 
                    icono="devicon:typescript"
                    />
                <CajaTec 
                    nombre="Bootstrap"
                    clase="bootstrap" 
                    icono="devicon:bootstrap"
                    />
                <CajaTec 
                    nombre="React"
                    clase="react" 
                    icono="devicon:react"
                    />
                <CajaTec 
                    nombre="React Native"
                    clase="react-native" 
                    icono="devicon:react"
                    />
                <CajaTec 
                    nombre="VisualStudioCode"
                    clase="vsc" 
                    icono="logos:visual-studio-code"
                    />
                <CajaTec 
                    nombre="Git"
                    clase="git" 
                    icono="devicon:git"
                    />
                <CajaTec 
                    nombre="Github"
                    clase="github" 
                    icono="devicon:github"
                    />
            </div>
        </section>
    )
}
export default Tecnologias