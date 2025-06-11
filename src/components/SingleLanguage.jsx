import languages from "../../data/languages"

const singleLanguage = ({id, title, languages}) =>{
    <button className={language.id === id ? "on" : " "} key={id} onClick={() => setLanguage(languages[id-1])}>{title}</button>

}