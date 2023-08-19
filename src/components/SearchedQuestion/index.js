function SearchedQuestion(props) {
    const { setData } = props

    return <>
        <p>Znalezione dla hasła: {setData}</p>
    </>
}

export default SearchedQuestion