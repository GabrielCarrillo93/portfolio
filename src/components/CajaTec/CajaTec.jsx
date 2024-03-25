import { Icon } from '@iconify/react'
import './CajaTec.css'

// eslint-disable-next-line react/prop-types
const CajaTec = ({icono, clase, nombre}) => {
    return (
        <div 
            className={`caja ${clase}`}
            >
            <h4 className='titulo'>{nombre}</h4>
            <Icon icon={`:${icono}`} style={{ fontSize: '48px' }}/>
        </div>
    )
}
export default CajaTec