import styles from "./BookRegisterPage.module.css"
import NavBar from "../../components/NavBar"
import BookForm from "../../components/BookForm"

const BookRegisterPage = () => {
    return (
        <section className={styles.BookRegisterPage}>
            <NavBar/>
            <BookForm/>
        </section>
    )
}
export default BookRegisterPage