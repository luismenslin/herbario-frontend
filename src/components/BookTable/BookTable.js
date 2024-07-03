import styles from "./BookTable.module.css"
import { useState, useEffect } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"
import ModalDelete from "../ModalDelete"

const BookTable = () => {
    const [openModal, setOpenModal] = useState(false)
    const [selectedBookId, setSelectedBookId] = useState(null)

    const [data, setData] = useState([])
    const [load, setLoad] = useState(false)

    const handleDelete = (bookId) => {
        axios.delete(`http://localhost:8080/api/v1/books/${bookId}`)
            .then(response => {
                setData(data.filter(book => book.id !== bookId))
                console.log("Livro excluído")
                setOpenModal(false)
                setSelectedBookId(null)
            })
            .catch(error => {
                console.error("Não deu pra excluir meu parça:", error)
            })
    }

    useEffect(() => {
        if (!load) {
            axios.get('http://localhost:8080/api/v1/books')
                .then(response => {
                    setData(response.data)
                    setLoad(true)
                })
                .catch(error => {
                    console.error("Não deu boa em buscar os dados parça", error)
                })
        }
    }, [load])

    const openDeleteModal = (bookId) => {
        setSelectedBookId(bookId)
        setOpenModal(true)
    }

    return (
        <>
            <table className={styles.booktable}>
                <thead className={styles.tableheader}>
                    <tr className={styles.tablecolumn}>
                        <th className={styles.tablecolumnname}>Título</th>
                        <th className={styles.tablecolumnname}>Autor</th>
                        <th className={styles.tablecolumnname}>Edição</th>
                        <th className={styles.tablecolumnname}>Publicação</th>
                        <th className={styles.tablecolumnname}>Funções</th>
                        <th className={styles.tablecolumnname}>Locado</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(data) && data.map((book, index) => (
                        <tr key={index}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.edition}</td>
                            <td>{book.publication}</td>
                            <td>
                                <button>
                                    <Link className={styles.link} to={`/cadastroLivros?id=${book.id}`}>Alterar</Link>
                                </button>
                                <button onClick={() => openDeleteModal(book.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                
            </table>
            {openModal && selectedBookId && (
                <ModalDelete
                    funcao={handleDelete}
                    isOpen={openModal}
                    objeto={selectedBookId}
                    setOpenModal={setOpenModal}
                />
            )}            
        </>
    )
}

export default BookTable