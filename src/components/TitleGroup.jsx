import {Button} from "@mui/material";
import getAndSetRepositories from "../utils/getAndSetRepositories";
import {updateDate} from "../utils/updateDate";
import updateAndSetRepositories from "../utils/updateAndSetRepositories";

const titleGroupStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
}

const TitleGroup = ({serverUrl, setRepositories}) => {
    return (
        <div style={titleGroupStyle}>
            <h1 style={{textAlign: "center"}}>Топ репозиториев(по звездам)</h1>
            <Button variant="outlined" onClick={() => updateAndSetRepositories(serverUrl, setRepositories)}>Обновить</Button>
            <Button variant="outlined" onClick={() => setRepositories([])}>Удалить</Button>
        </div>
    )
}

export default TitleGroup;