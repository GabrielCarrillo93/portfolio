import { Icon } from '@iconify/react'
import './Contacto.css'

const Contacto = () => {
    return (
        <section className="contacto">
            <h1>Contacto</h1>
            <div className='links'>
                <a
                    href="mailto:gabrielcarrillo943@gmail.com?Subject=Contacto%20desde%20el%20portfolio&Body=Hola%20Gabriel,%20me%20contacto%20con%20vos%20porque%20vi%20tu%20portfolio"
                    target='_blank'
                >
                    <Icon icon="logos:google-gmail" style={{ fontSize: '32px' }}/>
                </a>
                <a 
                    href="https://wa.link/3cntmm"
                    target='_blank'
                >
                    <Icon icon="logos:whatsapp-icon" style={{ fontSize: '36px' }}/>
                </a>
                <a 
                    href="https://www.linkedin.com/in/gabriel-ivan-carrillo/"
                    target='_blank'
                >
                    <Icon icon="devicon:linkedin" style={{ fontSize: '32px' }}/>
                </a>
                <a 
                    href="https://github.com/GabrielCarrillo93"
                    target="_blank"
                >
                    <Icon icon="logos:github-icon" style={{ fontSize: '32px' }}/>
                </a>
            </div>
        </section>
    )
}
export default Contacto