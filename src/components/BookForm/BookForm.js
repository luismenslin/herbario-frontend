import styles from "./BookForm.module.css"
import TextField from "../TextField"
import Button from "../Button"

const BookForm = () => {
    return (
        <form className={styles.form}>
            <h2>Cadastro de livros</h2>
            <TextField label="Titulo:" placeholder="Nome do livro..."/>
            <TextField label="Autor:" placeholder="Nome do autor..."/>
            <TextField label="Edição:" placeholder="Edição do livro..."/>
            <TextField label="Publicação:" placeholder="Ano de publicação..."/>
            <Button label="Cadastrar"/>
        </form>
    )
}
export default BookForm