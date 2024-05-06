/* eslint-disable react/prop-types */
import CardCertificado from '../CardCertificado/CardCertificado'
import './Certificados.css'
const Certificados = ({certificados}) => {
    const handleScroll = (e) => {
        const delta = Math.max(-1, Math.min(1, (e.nativeEvent.wheelDelta || -e.nativeEvent.detail)))
        e.currentTarget.scrollLeft -= (delta * 50)
        e.preventDefault()
    }
    
    return (
        <section className='certificados'>
            <h1>Certificados</h1>
            <div className='lista' onWheel={handleScroll}>
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