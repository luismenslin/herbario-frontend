import styles from "./TextField.module.css"

const TextField = ({label, placeholder, onChange, name}) => {
    return (
        <div className={styles.textfield}>
            <label>{label}</label>
            <input placeholder={placeholder} onChange={onChange} name={name}/>
        </div>
    )
}

export default TextField