import './Modal.css'

const Modal = () => {
    return (
        <section className='modal'>
            <h1>Titulo del proyecto</h1>
            <div className='izq'>
                <img src="src/assets/img/Opera Instantánea_2024-04-16_195628_gabrielcarrillo93.github.io.png" alt="" />
                <hr />
                <h2>Descripción</h2>
                <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quo tempore atque laboriosam qui maxime nulla reprehenderit porro quaerat necessitatibus. Architecto nobis totam corporis error doloremque, suscipit enim culpa debitis?</p>

            </div>
            <div className='der'>
                <h2>Tecnologías usadas</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                </ul>
                <hr />
                <h2>Dependencias usadas</h2>
                <ul>
                    <li>Vite + React</li>
                    <li>Iconify</li>
                    <li>GH Pages</li>
                </ul>
                <hr />
                <div className="botones">
                    <a href="#" target="_blank">Demo</a>
                    <a href="#" target="_blank">Código</a>
                </div>
            </div>
        </section>
    )
}
export default Modal