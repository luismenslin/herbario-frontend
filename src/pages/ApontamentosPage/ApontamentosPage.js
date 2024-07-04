import { useState } from "react";
import axios from 'axios';
import NavBar from "../../components/NavBar";
import Apontamento from "../../components/apontamento";
import styles from "./ApontamentosPage.module.css";

const ApontamentosPage = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [apontamentos, setApontamentos] = useState([]);

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    }

    const fetchApontamentos = async () => {
        if (!selectedDate) {
            alert("Por favor, selecione uma data.");
            return;
        }

        try {
            const response = await axios.get(`http://localhost:8080/api/v1/apontamentos/bydate?date=${selectedDate}`);
            setApontamentos(response.data);
        } catch (error) {
            console.error("Erro ao buscar apontamentos:", error);
            setApontamentos([]);
        }
    }

    return (
        <div>
            <NavBar />
            <div className={styles.datePickerContainer}>
                <label className={styles.datePickerLabel}>Escolha a data</label>
                <input type="date" value={selectedDate} onChange={handleDateChange} className={styles.datePicker} />
                <button onClick={fetchApontamentos} className={styles.fetchButton}>Buscar Apontamentos</button>
            </div>
            <div className={styles.apontamentosList}>
                {apontamentos.length > 0 ? (
                    apontamentos.map((apontamento, index) => (
                        <Apontamento key={index} apontamento={apontamento} />
                    ))
                ) : (
                    <p>Nenhum apontamento encontrado para a data selecionada.</p>
                )}
            </div>
        </div>
    );
}

export default ApontamentosPage;