import styles from "./PersonForm.module.css"
import TextField from "../TextField"
import Button from "../Button"

import { useState, useEffect } from "react"
import axios from 'axios';
import { useLocation } from "react-router-dom";

const PersonForm = () => {

    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const id = params.get('id');

    const [formData, setFormData] = useState ({
        id: '',
        name: '',
        graduation: '',
        phone: ''    
    })

    const handleInputChange = (event) => {
        const {name, value} = event.target
        setFormData({...formData,[name]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (id) {
                await axios.put(`http://localhost:8080/api/v1/person/${id}`, formData);
                window.location.href = "/listagemPessoas";
            } else {
                await axios.post('http://localhost:8080/api/v1/person', formData);
                setFormData(
                    {
                        name: '',
                        graduation: '',
                        phone: ''    
                    }                  
                )
            }
        } catch (error) {
            console.error('Deu ruim meu parça:', error);
        } 
    }

 
    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8080/api/v1/person/${id}`)
            .then(response => {
                const { id, name, graduation, phone } = response.data;
                setFormData({
                    id,
                    name,
                    graduation,
                    phone
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

                <h2>Cadastro de pessoas</h2>
                <TextField 
                    value={formData.name} 
                    onChange={handleInputChange} 
                    name="name" 
                    label="Nome:" 
                    placeholder="Nome da pessoa..."
                />
                <TextField 
                    value={formData.graduation} 
                    onChange={handleInputChange} 
                    name="graduation" 
                    label="Graduação:" 
                    placeholder="Graduação..."
                />
                <TextField 
                    value={formData.phone} 
                    onChange={handleInputChange} 
                    name="phone" 
                    label="Celular:" 
                    placeholder="N° do celular..."
                />
                
                <Button type="submit" label="Cadastrar"/>
            </form>
    )
}
export default PersonForm