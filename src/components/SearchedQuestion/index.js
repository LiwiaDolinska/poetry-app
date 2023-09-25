import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";

function SearchedQuestion() {
    const [data, setData] = useState(null)
    const [sorting, setSorting] = useState("asc")
    const [searchInput, setSearchInput] = useState("")
    let [searchParams] = useSearchParams();
    const searchValue = searchParams.get("search")

    const fetchData = useCallback(() => {
        fetch(`https://poetrydb.org/author/${searchValue}`)
            .then(response => response.json())
            .then(data => setData(data))
    }, [searchValue])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    const searchResult = data !== null ? data.filter((poem) => poem.title.startsWith(searchInput)) : null

    const sortedPoems = searchResult !== null ? searchResult.sort((first, second) => {
        const firstLinecount = parseInt(first.linecount)
        const secondLinecount = parseInt(second.linecount)
        if (sorting === "asc") {
            return firstLinecount > secondLinecount ? 1 : -1;
        } if (sorting === "desc") {
            return firstLinecount > secondLinecount ? -1 : 1;
        } if (sorting === "alf") {
            return first.title > second.title ? 1 : -1;
        }
    }) : null

    return <>
        <label>Sortuj:</label>
        <select value={sorting} onChange={e => setSorting(e.target.value)} >
            <option value="asc">Od najkrótszego</option>
            <option value="desc">Od najdłuższego</option>
            <option value="alf">Alfabetycznie</option>
        </select>
        <input placeholder="Wyszukaj" onChange={e => setSearchInput(e.target.value.toUpperCase())}></input>
        <p>Znalezione dla hasła: {searchValue}</p>
        <div>
            {sortedPoems == null ?
                "loading" :
                sortedPoems.map((poem) => <div>
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

// małe litery
// komunikat pusta lista
// nie tylko 1 słowo tytułu