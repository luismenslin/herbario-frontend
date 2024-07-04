import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <a href="https://jabot.jbrj.gov.br/v3/consulta.php">Acesse o Jabot</a>
        </footer>
    );
};

export default Footer;