import styles from "./NavBar.module.css"
import logo from "../../images/herbario.png"

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarContent}>
                <img src={logo} alt="Logo do herbario"/>
                <h1 className={styles.title}>HERBARIO - JOI</h1>
            </div>
            <ul className={styles.navbarList}>
                <li>Home</li>
                <li>Livros</li>
                <li>Pessoas</li>
                <li>Rotinas</li>
            </ul>
        </nav>
    )
}
export default NavBar