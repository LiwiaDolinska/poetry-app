import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./styles.css"

function SearchInput({ onEvent }) {
    const [inputValue, setInputValue] = useState("")
    const navigate = useNavigate();

    function handleSubmit(e) {

        e.preventDefault();
        const data = inputValue
        onEvent(data)
        navigate("searchedQuestion") // `searchedQuestion?search=${inputValue}`
        setInputValue("")
    }

    return <form onSubmit={handleSubmit}>
        <input value={inputValue} onChange={event => setInputValue(event.target.value)}></input>
        <button className="submit-button" type="submit" > Szukaj</button>
    </form>

}

export default SearchInput