import axios from "axios";

const getRepositoryById = async (serverUrl, inputId, setRepositories) => {
    const response = await axios.get(`${serverUrl}/${inputId}`)
    await setRepositories(response.data.rows)
}

export default getRepositoryById;