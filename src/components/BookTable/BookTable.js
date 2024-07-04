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

    const [dataLock, setDataLock] = useState([])
    const [loadLock, setLoadLock] = useState(false)

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
    
    useEffect(() => {
        if (!loadLock) {
            axios.get('http://localhost:8080/api/v1/lockbooks')
                .then(response => {
                    setDataLock(response.data)
                    setLoadLock(true)
                })
                .catch(error => {
                    console.error("Não deu boa em buscar os dados parça", error)
                })
        }
    }, [loadLock])

    const openDeleteModal = (bookId) => {
        setSelectedBookId(bookId)
        setOpenModal(true)
    }

    const isBookLocked = (bookId) => {
        return dataLock.some(lock => lock.book.id === bookId && lock.dataUnlocked === null);
    }

    const handleUnlock = (bookId) => {
        axios.put(`http://localhost:8080/api/v1/lockbooks/unlock/${bookId}`)
            .then(response => {
                setDataLock(dataLock.filter(lock => lock.book.id !== bookId))
                console.log("Livro devolvido")
            })
            .catch(error => {
                console.error("Não deu pra deslocar o livro:", error)
            })
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
                            <td className={styles.rotina}>
                                <button>
                                    <Link className={styles.link} to={`/cadastroLivros?id=${book.id}`}>Alterar</Link>
                                </button>
                                <button className={styles.excluir} onClick={() => openDeleteModal(book.id)}>Excluir</button>
                            </td>
                            <td>
                                {isBookLocked(book.id) ? <button className={styles.isLocado} onClick={() => handleUnlock(book.id)}>Locado</button> : <button className={styles.isDisponivel}>Disponível</button>}
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