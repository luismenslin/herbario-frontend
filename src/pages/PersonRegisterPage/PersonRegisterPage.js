import styles from "./PersonRegisterPage.module.css"
import NavBar from "../../components/NavBar"
import PersonForm from "../../components/PersonForm"

const PersonRegisterPage = () => {
    return (
        <section className={styles.PersonRegisterPage}>
            <NavBar/>
            <PersonForm/>
        </section>
    )
}
export default PersonRegisterPage