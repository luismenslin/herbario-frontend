import style from "./LockBookTable.module.css";
import { useState, useEffect } from "react";
import axios from 'axios'

const LockBookTable = () => {

    const [livros, setLivros] = useState([])
    const [pessoas, setPessoas] = useState([])
    const [loadLivros, setLoadLivros] = useState(false)
    const [loadPessoas, setLoadPessoas] = useState(false)
    
    useEffect(() => {
        if (!loadLivros) {
            axios.get('http://localhost:8080/api/v1/books')
                .then(response => {
                    setLivros(response.data)
                    setLoadLivros(true)
                })
                .catch(error => {
                    console.error("Não deu boa em buscar os dados parça", error)
                })
        }
    }, [loadLivros])
    
        useEffect(() => {
            if (!loadPessoas) {
                axios.get('http://localhost:8080/api/v1/person')
                    .then(response => {
                        setPessoas(response.data)
                        setLoadPessoas(true)
                    })
                    .catch(error => {
                        console.error("Não deu boa em buscar os dados parça", error)
                    })
            }
        }, [loadPessoas])

    return (
        <div>
            <h2>Locar Livro</h2>
            <form>
                    
                <select>
                    {livros.map(livro => (<option value={livro.id}>{livro.title}</option>))}
                </select>

                <select>
                    {pessoas.map(pessoas => (<option value={pessoas.id}>{pessoas.name}</option>))}
                </select>

                <button type="submit">Locar Livro!</button>

            </form>
        </div>
    )
}
export default LockBookTable