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

    

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Dados do formulário:", formData)
        try {
            await axios.post(`http://localhost:8080/api/v1/lockbooks/lock?bookId=${formData.bookId}&personId=${formData.personId}`);
            setFormData({
                bookId: '',
                personId: ''
            });
            alert('Livro locado com sucesso!');
        } catch (error) {
            console.error('Deu ruim meu parça:', error);
            alert('Não foi possível locar o livro. Verifique os dados e tente novamente.');
        }
    }

    const handleBookChange = (event) => {
        setFormData({
            ...formData,
            bookId: event.target.value
        });
    }

    const handlePersonChange = (event) => {
        setFormData({
            ...formData,
            personId: event.target.value
        });
    }

    const [formData, setFormData] = useState ({
        bookId: '',
        personId: ''    
    })

    return (
        <div>
            <h2>Locar Livro</h2>
            <form onSubmit={handleSubmit}>
                <div className={style.campo}>
                    <label>Livro:</label>
                    <select value={formData.bookId} onChange={handleBookChange}>
                        <option value="">Selecione um livro</option>
                        {livros.map(livro => (<option key={livro.id} value={livro.id}>{livro.title}</option>))}
                    </select>
                </div>
                <div className={style.campo}>
                    <label>Pessoa:</label>
                    <select value={formData.personId} onChange={handlePersonChange}>
                        <option value="">Selecione uma pessoa</option>
                        {pessoas.map(pessoa => (<option key={pessoa.id} value={pessoa.id}>{pessoa.name}</option>))}
                    </select>
                </div>
                <button type="submit">Locar Livro!</button>
            </form>
        </div>
    )
}

export default LockBookTable;