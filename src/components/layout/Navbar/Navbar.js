import styles from './Navbar.module.css'

import { Link } from 'react-router-dom'

import Container from '../Container/Container'
import logo from '../../../img/logo-station-21.png'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container customClass='navbarContent'>
                <Link to="/">
                    <img className={styles.logo} src={logo} alt="Station21"/>
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/">Login</Link></li>
                </ul>
            </Container>
        </nav>
    );
}

export default Navbar