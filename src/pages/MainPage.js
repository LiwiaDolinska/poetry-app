import RandomPoem from "../components/RandomPoem"
import SearchInput from "../components/SearchInput"

function MainPage({ onSubmit }) {

    return <>
        <SearchInput onEvent={onSubmit} />
        <RandomPoem />
    </>
}

export default MainPage