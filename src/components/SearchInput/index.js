import { useEffect, useState } from "react"
import { json, useNavigate } from "react-router-dom";
import "./styles.css"

function SearchInput() {
    const [inputValue, setInputValue] = useState("")
    const navigate = useNavigate();


    function handleSubmit(e) {
        e.preventDefault();
        navigate(`searchedQuestion?search=${inputValue}`)
        setInputValue("")
    }

    return <form onSubmit={handleSubmit}>
        <input className="input" value={inputValue} onChange={event => setInputValue(event.target.value)}></input>
        <button className="submit-button" type="submit" > Szukaj</button>
    </form>

}

export default SearchInput