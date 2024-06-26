import styles from "./ModalLockBook.module.css"
import SelectInput from "../SelectInput/SelectInput"

const ModalLockBook = ({isOpen,funcao,objeto,setOpenModal}) => {
    if(isOpen) {
        return (
            <div className={styles.background}>
            <div className={styles.container}>
                <SelectInput/>
                <div className={styles.buttonContainer}>
                    <button className={styles.confirmButton} onClick={() => {
                        funcao(objeto)
                        setOpenModal(false)
                    }}>
                        Locar Livro!
                    </button>
                    <button className={styles.cancelButton} onClick={() => setOpenModal(false)}>Cancelar</button>
                </div>
            </div>
        </div>
        )
    }
}
export default ModalLockBook