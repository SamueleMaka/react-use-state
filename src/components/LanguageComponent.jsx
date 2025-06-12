import languages from "../../data/languages";
import style from "./Language.module.css"
import { useState } from "react";
import SingleLanguage  from "./SingleLanguage";

const LanguageComponent = () => {
    const [language, setLanguage] = useState(1) // salvo l'ID nella variabile reattiva
    return(
        <>
            <div className={style.buttonContainer}>
                {languages.map(({id, title}) => ( // destrutturazione già nel map
                    <SingleLanguage 
                        key={id}
                        id={id}
                        title={title}
                        active={language === id}
                        onClick={() => setLanguage(id)}
                    />
                ))}
            </div>
            <div className={style.descriptionContainer}>{languages[language-1].description}</div>
        </>
    )
}


export default LanguageComponent