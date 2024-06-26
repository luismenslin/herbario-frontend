import SelectInput from "../../components/SelectInput/SelectInput"
import NavBar from "../../components/NavBar"
import styles from "./LockBookPage.module.css"
import ModalLockBook from "../../components/ModalLockBook"

const LockBookPage = () => {
    return (
        <div>
            <NavBar/>
            <SelectInput/>
            <ModalLockBook/>
        </div>
    )
}
export default LockBookPage