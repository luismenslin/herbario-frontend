
import NavBar from "../../components/NavBar"
import styles from "./LockBookPage.module.css"
import {useState, useEffect} from "react"

import LockBookTable from "../../components/LockBookTable"

const LockBookPage = () => {

    return (
        <div>
            <NavBar/>
            <LockBookTable/>
       </div>
    )
}
export default LockBookPage