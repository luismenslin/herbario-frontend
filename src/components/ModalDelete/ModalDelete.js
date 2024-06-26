import styles from "./ModalDelete.module.css"

const ModalDelete = ({isOpen,funcao,objeto,setOpenModal}) => {
    if(isOpen) {
        return (
            <div className={styles.background}>
            <div className={styles.container}>
                <p className={styles.message}>Deseja realmente excluir?</p>
                <div className={styles.buttonContainer}>
                    <button className={styles.confirmButton} onClick={() => {
                        funcao(objeto)
                        setOpenModal(false)
                    }}>
                        Sim
                    </button>
                    <button className={styles.cancelButton} onClick={() => setOpenModal(false)}>Cancelar</button>
                </div>
            </div>
        </div>
        )
    }
    
}
export default ModalDelete