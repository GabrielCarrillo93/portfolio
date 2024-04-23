import { useState } from 'react'
import CardCertificado from '../CardCertificado/CardCertificado'
import './Certificados.css'
import { useEffect } from 'react';

const Certificados = () => {
    const [certs, setCerts] = useState([]);

    useEffect(() => {
        const getCerts = async () => {
            try {
                const resp = await fetch("src/data.json");
                if (!resp.ok) throw new Error;
                const data = await resp.json();
                setCerts(data.certificados)
            } catch (error) {
                console.log(error);
            }
        }
        getCerts()
    }, [])

    return (
        <section className='certificados'>
            <h1>Certificados</h1>
            <div className='lista'>
                {certs.toReversed().map((el, i) => <CardCertificado 
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