import logo from '../../assets/img/logo-blanco.png'
import './header.css'

const Header = () => {
    return (
        <>
        <header className="header">
        <img 
            alt="Logo Andal Minerales" 
            height="50"
            src={logo}
        />
        <nav class="menu">
            <ul>
                <li>
                    <a href="#gypsum" className="link">Gypsum</a>
                </li>
                <li>
                    <a href="#piedraYeso" className="link">Piedra de Yeso</a>
                </li>
                <li>
                    <a href="#yesoAgricola" className="link">Yeso Agrícola</a>
                </li>
                <li>
                    <a href="#yesoEspecial" className="link">Yesos Especiales</a>
                </li>
                <li>
                    <a href="#contacto" className="link">Contacto</a>
                </li>
            </ul>
        </nav>
        </header>
        </>
    )
}

export { Header }