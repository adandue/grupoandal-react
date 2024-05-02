import piedra from '../../assets/img/piedra.jpg'
import './rocaYeso.css'

const RocaYeso = () => {
    return (
        <section className="roca-yeso">
            <img src={piedra} alt="Logo Andal Minerales" />
            <h2>Roca de Yeso</h2>
        </section>
    )
}

export { RocaYeso }