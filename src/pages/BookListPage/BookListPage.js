import BookTable from "../../components/BookTable/BookTable"
import NavBar from "../../components/NavBar"
import styles from "./BookListPage.module.css"

const BookListPage = () => {
    return (
        <section>
            <NavBar/>
            <BookTable/>
        </section>
    )
}

export default BookListPage