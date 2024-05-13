import styles from "./BookForm.module.css"
import TextField from "../TextField"
import Button from "../Button"

import { useState, useEffect } from "react"
import axios from 'axios';
import { useLocation } from "react-router-dom";

const BookForm = () => {

    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const id = params.get('id');

    const [formData, setFormData] = useState ({
        id: '',
        title: '',
        author: '',
        edition: '',
        publication: ''        
    })

    const handleInputChange = (event) => {
        const {name, value} = event.target
        setFormData({...formData,[name]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (id) {
                await axios.put(`http://localhost:8080/api/v1/books/${id}`, formData);
                console.log("Livro alterado com sucesso!")
                window.location.href = "/listagemLivros";
            } else {
                await axios.post('http://localhost:8080/api/v1/books', formData);
                setFormData(
                    {
                        title: '',
                        author: '',
                        edition: '',
                        publication: '',
                    }                  
                )
            }
        } catch (error) {
            console.error('Deu ruim meu parça:', error);
        } 
    }

 
    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8080/api/v1/books/${id}`)
            .then(response => {
                const { id, title, author, edition, publication } = response.data;
                setFormData({
                    id,
                    title,
                    author,
                    edition,
                    publication
                });                
            })
            .catch(error => {
                console.error("Não deu boa mesmo", error);
            })
        }
    }, [id])

    return (
            <form className={styles.form} onSubmit={handleSubmit}>
                
                {
                    id &&
                    
                    <input type="hidden" name="id" value={formData.id}/>
                }

                <h2>Cadastro de livros</h2>
                <TextField 
                    value={formData.title} 
                    onChange={handleInputChange} 
                    name="title" 
                    label="Titulo:" 
                    placeholder="Nome do livro..."
                />
                <TextField 
                    value={formData.author} 
                    onChange={handleInputChange} 
                    name="author" 
                    label="Autor:" 
                    placeholder="Nome do autor..."
                />
                <TextField 
                    value={formData.edition} 
                    onChange={handleInputChange} 
                    name="edition" 
                    label="Edição:" 
                    placeholder="Edição do livro..."
                />
                <TextField 
                    value={formData.publication} 
                    onChange={handleInputChange} 
                    name="publication" 
                    label="Publicação:" 
                    placeholder="Ano de publicação..."
                    />
                <Button type="submit" label="Cadastrar"/>
            </form>
    )
}
export default BookForm