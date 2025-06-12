import languages from "../../data/languages";
import style from "./Language.module.css"
import { useState } from "react";

const LanguageComponent = () => {
    const [language, setLanguage] = useState(1)
    return(
        <>
            <div className={style.buttonContainer}>
                {languages.map(({id, title}) => ( // destrutturazione già nel map
                    <button className={language === id ? "on" : " "} key={id} onClick={() => setLanguage(id)}>{title}</button>
                ))}
            </div>
            <div className={style.descriptionContainer}>{languages[language-1].description}</div>
        </>
    )
}


export default LanguageComponent