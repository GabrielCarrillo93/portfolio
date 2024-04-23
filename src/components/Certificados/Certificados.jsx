/* eslint-disable react/prop-types */
import CardCertificado from '../CardCertificado/CardCertificado'
import './Certificados.css'
const Certificados = ({certificados}) => {
    return (
        <section className='certificados'>
            <h1>Certificados</h1>
            <div className='lista'>
                {certificados.toReversed().map((el, i) => <CardCertificado 
                    key={i}
                    nombre={el.titulo}
                    fecha={el.fecha}
                    plataforma={el.plataforma}
                    imagen={el.imagen}/>)}
            </div>
        </section>
    )
}
export default Certificados