import logo from '../../assets/img/logo-blanco.png'
import './hero.css'

const Hero = () => {
    return (
    <section className="hero">
        <img src={logo} alt="Logo Andal Minerales" />
        <h1>Andal Minerales</h1>
    </section>
    )
}

export { Hero }