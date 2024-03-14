import { Icon } from '@iconify/react'
import './CajaTec.css'

// eslint-disable-next-line react/prop-types
const CajaTec = ({icono, clase, nombre}) => {
    return (
        <div 
            className={`caja ${clase}`}
            >
            <h2 className='titulo'>{nombre}</h2>
            <Icon icon={`:${icono}`} style={{ fontSize: '48px' }}/>
        </div>
    )
}
export default CajaTec