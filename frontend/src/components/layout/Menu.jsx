import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons'

import { Link } from 'react-router-dom'

const Menu = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <FontAwesomeIcon icon={faCalendarCheck} /> TodoApp
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuItens" aria-controls="menuItens" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="menuItens">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" aria-current="page">Tarefas</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link" aria-current="page">Sobre</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu