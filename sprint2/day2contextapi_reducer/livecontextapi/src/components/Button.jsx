import style from './Button.module.css'
import { useContext } from "react"
import { APPContext } from "./AppContextProvider"

function Button({ text, onClick }) {

    const [theme] = useContext(APPContext)

    return(
        <button className={`${style.buttonBase} ${
            theme === "light" ? style.buttonLight:style.buttonDark
        }`}>

        </button>
    )
}


export default Button