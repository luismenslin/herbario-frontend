import styles from "./BookForm.module.css"
import TextField from "../TextField"
import Button from "../Button"

import { useState } from "react"
import axios from 'axios';

const BookForm = () => {

    const [formData, setFormData] = useState ({
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
        console.log(`Vou mandar para a API ${formData}`);
        try {
            const response = await axios.post('http://localhost:8080/api/v1/books', formData);
            console.log('Foi criado dentro do banco o objeto:', response.data);
        } catch (error) {
            console.error('Deu ruim meu parça:', error);
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
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