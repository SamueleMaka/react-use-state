
const SingleLanguage = ({id, title, active, onClick}) =>{
    return (
        <button 
            className={active ? "on" : " "} 
            onClick={() => onClick(id)}> 
            {title} 
        </button>
    )

}

export default SingleLanguage 