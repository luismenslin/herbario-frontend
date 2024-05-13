import styles from "./NavBar.module.css"
import logo from "../../images/herbario.png"
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarContent}>
                <img src={logo} alt="Logo do herbario"/>
                <h1 className={styles.title}>HERBARIO - JOI</h1>
            </div>
            <ul className={styles.navbarList}>
                <li>Home</li>
                <li>
                    <Link className={styles.link} to="/cadastroLivros">Cadastrar Livros</Link>
                </li>
                <li>
                    <Link className={styles.link} to="/listagemLivros">Listar Livros</Link>
                </li>
                <li>Cadastrar Pessoas</li>
                <li>Listar Pessoas</li>
            </ul>
        </nav>
    )
}
export default NavBar