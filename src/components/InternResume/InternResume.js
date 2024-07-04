import styles from "./InternResume.module.css"
import { useState } from "react"
import axios from 'axios'

const InternResume = () => {

    const [formData, setFormData] = useState({
        estagiario: '',
        descricao: '',
        dataCadastro: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const dataCadastro = new Date().toISOString()
        const formDataWithDate = { ...formData, dataCadastro }

        try {
            await axios.post('http://localhost:8080/api/v1/apontamentos', formDataWithDate)
            alert('Apontamento realizado com sucesso!')
            setFormData({
                estagiario: '',
                descricao: '',
                dataCadastro: ''
            })
        } catch (error) {
            console.error('Erro ao realizar apontamento:', error)
            alert('Não foi possível realizar o apontamento. Tente novamente.')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Quem vai realizar o apontamento?</label>
            <select name="estagiario" value={formData.estagiario} onChange={handleChange}>
                <option value="">Selecione</option>
                <option value="Alana">Alana</option>
                <option value="Felipe">Felipe</option>
                <option value="Marciellen">Marciellen</option>
            </select>

            <label>Resumo do dia</label>
            <textarea 
                name="descricao" 
                value={formData.descricao} 
                onChange={handleChange} 
                placeholder="Digite o que você fez hoje..." 
            />

            <button type="submit">Apontar hora</button>
        </form>
    )
}

export default InternResume