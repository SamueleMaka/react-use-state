import languages from "../../data/languages";
import style from "./Language.module.css"
import { useState } from "react";

const LanguageComponent = () => {
    const [language, setLanguage] = useState(languages[0])
    return(
        <>
            <div className={style.buttonContainer}>
                {languages.map(({id, title}) => ( // destrutturazione già nel map
                    <button className={language.id === id ? "on" : " "} key={id} onClick={() => setLanguage(languages[id-1])}>{title}</button>
                ))}
            </div>
            <div className={style.descriptionContainer}>{languages[language.id -1].description}</div>
        </>
    )
}


export default LanguageComponent