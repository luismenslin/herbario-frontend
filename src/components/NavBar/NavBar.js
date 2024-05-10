import styles from "./NavBar.module.css"

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarContent}>
                <img src="https://collectory.sibbr.gov.br/collectory/data/collection/Herbario_JOI.png" alt="Herbario's logo"/>
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