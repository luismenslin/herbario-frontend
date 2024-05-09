import styles from "./TextField.module.css"

const TextField = ({label, placeholder}) => {
    return (
        <div className={styles.textfield}>
            <label>{label}</label>
            <input placeholder={placeholder}/>
        </div>
    )
}

export default TextField