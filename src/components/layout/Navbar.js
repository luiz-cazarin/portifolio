import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar () {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <p>LC.</p>
            </div>
            <div className={styles.listbtn}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">HOME</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/projects">PROJECTS</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/">CONTACT</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/">LOGIN</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}