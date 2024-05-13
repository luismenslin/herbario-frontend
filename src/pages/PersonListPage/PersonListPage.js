import NavBar from "../../components/NavBar"
import PersonTable from "../../components/PersonTable"
import styles from "./PersonListPage.module.css"

const PersonListPage = () => {
    return (
        <section>
            <NavBar/>
            <PersonTable/>
        </section>
    )
}

export default PersonListPage