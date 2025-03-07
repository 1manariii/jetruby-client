import {Button, Drawer, IconButton, Stack, TextField, Tooltip} from "@mui/material";
import updateAndSetRepositories from "../utils/updateAndSetRepositories";
import {useEffect, useState} from "react";
import getAndSetRepositories from "../utils/getAndSetRepositories";
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import getRepositoryByIdOrName from "../utils/getRepositoryByIdOrName";
import {idID} from "@mui/material/locale";

const titleGroupStyle = {
    width: "min-content",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    background: "rgba(255, 255, 255, 0.4)",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5.2px)",
    border: "1px solid rgba(0, 0, 0, 0.24)",
    padding: "1rem 2rem",
    margin: "1rem 0 0 1rem",
}

const TitleGroup = ({serverUrl, setRepositories}) => {
    const [inputId, setInputId] = useState('');
    const [open, setOpen] = useState(false);
    const [searchName, setSearchName] = useState('')
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    useEffect(() => {
        if (inputId.length > 0) {
            getRepositoryByIdOrName(serverUrl, inputId, null, setRepositories)
        }
        if (inputId.length === 0) {
            getAndSetRepositories(serverUrl, setRepositories)
        }
    }, [inputId])
    return (
    <>
        <Tooltip title="Нажмите, чтобы вызвать окно разработчика">
            <Button onClick={toggleDrawer(true)} size="large" variant="contained" color="primary" sx={{width: "min-content"}}>
                <SettingsIcon />
            </Button>
        </Tooltip>
        <Drawer open={open} onClose={toggleDrawer(false)} style={{background: 'none'}}>
            <div style={titleGroupStyle}>
                <Stack gap="1rem" direction="row">
                    <h2>Инструменты разработчика</h2>
                    <Stack alignItems="center" justifyContent="center">
                        <IconButton onClick={toggleDrawer(false)}>
                            <CloseIcon />
                        </IconButton>
                    </Stack>
                </Stack>
                <Stack gap="1rem" direction="column">
                    <TextField id="outlined-basic"
                               label="Введите id!"
                               value={inputId}
                               type='number'
                               width="70%"
                               variant="filled" onChange={(event) => {
                                   setInputId(event.target.value)
                                   setSearchName('')
                               }} />
                    <Stack gap="1rem" direction="row">
                        <TextField id="outlined-basic"
                                   label="Введите наименование!"
                                   value={searchName}
                                   type='search'
                                   width="70%"
                                   variant="filled" onChange={(event) => {
                            setSearchName(event.target.value)
                            setInputId('')
                        }} />
                        <Button variant="contained" onClick={async () => {
                            await getRepositoryByIdOrName(serverUrl, null, searchName, setRepositories)
                            await setOpen(false)
                        }}>Найти</Button>
                    </Stack>

                    <Stack gap="1rem" direction="row">
                        <Button variant="contained" onClick={async () => {
                            await updateAndSetRepositories(serverUrl, setRepositories)
                            await setOpen(false)
                        }}>Обновить</Button>
                        <Button variant="contained" onClick={() => {
                            setRepositories([])
                            setOpen(false)
                        }}>Удалить</Button>
                    </Stack>
                </Stack>
            </div>
        </Drawer>
    </>

    )
}

export default TitleGroup;