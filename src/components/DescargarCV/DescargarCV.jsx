import { Icon } from '@iconify/react'
import './DescargarCV.css'

const DescargarCV = () => {
    return (
        <section className="descarga">
            <h1>Descargar CV</h1>
            <Icon icon="vscode-icons:file-type-pdf2" style={{fontSize: "64px", transform: "translateX(-5px)"}}/>
            <a href="files/GabrielIvanCarrillo.pdf" download>Descargar</a>
        </section>
    )
}
export default DescargarCV