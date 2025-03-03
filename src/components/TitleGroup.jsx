import {Button, TextField} from "@mui/material";
import updateAndSetRepositories from "../utils/updateAndSetRepositories";
import {useEffect, useState} from "react";
import getRepositoryById from "../utils/getRepositoryById";
import getAndSetRepositories from "../utils/getAndSetRepositories";

const titleGroupStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
}

const TitleGroup = ({serverUrl, setRepositories}) => {
    const [inputId, setInputId] = useState('');
    // const [error, setError] = useState(null)

    useEffect(() => {
        // if (+inputId === 0) {
        //     setError('Id не может быть 0!')
        // }
        // if (inputId.includes('.')) {
        //     setError('Введите целое число!')
        // }
        // if (!Number.isInteger(+inputId)) {
        //     setError('Id не может содержать буквы!')
        // }
        if (Number.isInteger(+inputId) && !inputId.includes('.') && +inputId !== 0) {
            // setError(null)
            getRepositoryById(serverUrl, inputId, setRepositories)
        } else {
            getAndSetRepositories(serverUrl, setRepositories)
        }
    }, [inputId])
    return (
        <div style={titleGroupStyle}>
            <h1 style={{textAlign: "center", color: 'white'}}>Топ репозиториев(по звездам)</h1>
            <Button variant="contained" onClick={() => updateAndSetRepositories(serverUrl, setRepositories)}>Обновить</Button>
            <Button variant="contained" onClick={() => setRepositories([])}>Удалить</Button>
            <TextField id="outlined-basic"
                       // label={error==null ? 'Введите id' : error }
                       label="Введите id!"
                       variant="outlined" onChange={(event) => setInputId(event.target.value)} />

        </div>
    )
}

export default TitleGroup;