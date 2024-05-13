import styles from "./PersonTable.module.css"
import {useState, useEffect} from "react"
import axios from 'axios'
import { Link } from "react-router-dom"

const PersonTable = () => {

    const [data, setData] = useState([])
    const [load, setLoad] = useState(false)

    const handleDelete = (personId) => {
        axios.delete(`http://localhost:8080/api/v1/person/${personId}`)
            .then(response => {
                setData(data.filter(person => person.id !== personId))
                console.log("Livro excluido")
            })
            .catch(error => {
                console.error("não deu pra excluir meu parça:", error)
            })
    }

    useEffect(() => {
        if(!load) {
            axios.get('http://localhost:8080/api/v1/person')
                .then(response => {
                    setData(response.data)
                    setLoad(true)
            })
            .catch(error => {
                console.error("Não deu boa em buscar os dados parça", error)
            })
        }
    }, [load])

    

    return (
        <table className={styles.persontable}>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Celular</th>
                    <th>Graduação</th>
                    <th>Rotinas</th>
                </tr>
            </thead>
            <tbody>
                {Array.isArray(data) && data.map((person, index) => (
                    <tr key={index}>
                        <td>{person.name}</td>
                        <td>{person.phone}</td>
                        <td>{person.graduation}</td>
                        <td>
                            <button>
                                <Link className={styles.link} to={`/cadastroPessoas?id=${person.id}`}>Alterar</Link>
                            </button>
                            <button onClick={() => handleDelete(person.id)}>Excluir</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default PersonTable