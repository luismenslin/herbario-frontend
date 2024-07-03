import styles from "./InternResume.module.css"
const InternResume = () => {
    return (
        <form>
                <label>Quem vai realizar o apontamento?</label>
                <select>
                    <option>Alana</option>
                    <option>Felipe</option>
                    <option>Marciellen</option>
                </select>

                <label>Resumo do dia</label>

                <textarea placeholder="Digite oque você fez hoje..."/>

                <button type="submit">Apontar hora</button>
        </form>
    )
}
export default InternResume