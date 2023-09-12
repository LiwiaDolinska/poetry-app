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


    return <>
        <h1>wiersz</h1>
        <div className="poem-box">
            {
                chosenPoem == null ?
                    "loading..." :
                    <div>{chosenPoem.lines.map(line => <div>{line}</div>)}</div>
            }
        </div>

    </>
}

export default RandomPoem;