import './CardCertificado.css'

// eslint-disable-next-line react/prop-types
const CardCertificado = ({imagen, nombre, fecha, plataforma}) => {
  return (
    <article className='certificado'>
        <div className='img-cert'>
            <img src={imagen} alt={nombre} /></div>
        <div className='info-cert'>
            <h3>{nombre}</h3>
            <h4>{plataforma}</h4>
            <span>{fecha}</span>
        </div>

    </article>
  )
}
export default CardCertificado