import styles from "./apontamento.module.css";

const Apontamento = ({ apontamento }) => {
    return (
        <div className={styles.apontamento}>
            <p className={styles.estagiario}>Nome: {apontamento.estagiario}</p>
            <p className={styles.descricaoLabel}>Descrição:</p>
            <textarea 
                className={styles.descricaoTextarea}
                disabled 
                value={apontamento.descricao}>
            </textarea>
        </div>
    );
}

export default Apontamento;