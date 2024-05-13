import styles from "./TextField.module.css"

const TextField = ({label, placeholder, onChange, name, value}) => {
    return (
        <div className={styles.textfield}>
            <label>{label}</label>
            <input value={value} placeholder={placeholder} onChange={onChange} name={name}/>
        </div>
    )
}

export default TextField