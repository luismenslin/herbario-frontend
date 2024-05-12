import styles from "./BookTable.module.css"
import {useState, useEffect} from "react"
import axios from 'axios'

const BookTable = () => {

    const [data, setData] = useState([])
    const [load, setLoad] = useState(false)

    const handleDelete = (bookId) => {
        axios.delete(`http://localhost:8080/api/v1/books/${bookId}`)
            .then(response => {
                setData(data.filter(book => book.id !== bookId))
                console.log("Livro excluido")
            })
            .catch(error => {
                console.error("não deu pra excluir meu parça:", error)
            })
    }

    useEffect(() => {
        if(!load) {
            axios.get('http://localhost:8080/api/v1/books')
                .then(response => {
                    console.log(response.data)
                    setData(response.data)
                    setLoad(true)
            })
            .catch(error => {
                console.error("Não deu boa em buscar os dados parça", error)
            })
        }
    }, [load])

    

    return (
        <table className="bookTable">
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Autor</th>
                    <th>Edição</th>
                    <th>Publicação</th>
                    <th>Funções</th>
                    <th>Locado</th>
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
                            <button>Alterar</button>
                            <button onClick={() => handleDelete(book.id)}>Excluir</button>
                        </td>
                        <td>
                            <button>Locar Livro</button>
                            <button>Devolver Livro</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default BookTable