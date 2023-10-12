import RandomPoem from "../components/RandomPoem"
import SearchInput from "../components/SearchInput"
import "./styles.css"

function MainPage({ onSubmit }) {

    return <div className="background">
        <SearchInput onEvent={onSubmit} />
        <RandomPoem />
    </div>
}

export default MainPage