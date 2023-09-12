import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function SearchedQuestion() {
    const [data, setData] = useState(null)
    const [sorting, setSorting] = useState("asc")
    let [searchParams] = useSearchParams();
    const searchValue = searchParams.get("search")

    const fetchData = () => {
        fetch(`https://poetrydb.org/author/${searchValue}`)
            .then(response => response.json())
            .then(data => setData(data))
    }

    useEffect(() => {
        fetchData()
    }, [])

    return <>
        <label>Sortuj:</label>
        <select>
            <option value="asc">Od najkrótszego</option>
            <option value="desc">Od najdłuższego</option>
        </select>
        <p>Znalezione dla hasła: {searchValue}</p>
        <div>
            {data == null ?
                "loading" :
                data.map((poem) => <div>
                    <p><strong>{poem.title}</strong></p>
                    <p>{poem.author}</p>
                    <p>{poem.lines.map((line) => <div>
                        {line}
                    </div>)}</p>
                </div>)}
        </div>

    </>
}

export default SearchedQuestion