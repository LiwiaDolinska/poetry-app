import { useState } from "react";
import { useEffect } from "react";
import "./styles.css"

function RandomPoem() {
    const [chosenPoem, setChosenPoem] = useState(null)
    console.log(chosenPoem)
    useEffect(() => {
        let ignore = false;
        fetch("https://poetrydb.org/random")
            .then(response => response.json())
            .then(data => {
                if (!ignore) {
                    setChosenPoem(data[0]);
                }
            })
        return () => {
            ignore = true;
        }
    }, [])

    if (chosenPoem === null) {
        return "loading"
    }

    return <>
        <p className="title">{chosenPoem.title}</p>
        <p className="author">{chosenPoem.author}</p>
        <div className="poem-box">
            <div>{chosenPoem.lines.map(line => <div>{line}</div>)}</div>

        </div>

    </>
}

export default RandomPoem;