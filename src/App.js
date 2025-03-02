
import {useEffect, useState} from "react";
import CardList from "./components/CardList";
import TitleGroup from "./components/TitleGroup";
import getAndSetRepositories from "./utils/getAndSetRepositories";

const App = () => {
    const [repositories, setRepositories] = useState([])
    const serverUrl = 'http://localhost:8000/api'

    useEffect(()=>{
        getAndSetRepositories(serverUrl, setRepositories)
    }, [])
    return (
        <>
            <TitleGroup serverUrl={serverUrl} setRepositories={setRepositories} />
            <CardList repositories={repositories} />
        </>
    );
}

export default App;
