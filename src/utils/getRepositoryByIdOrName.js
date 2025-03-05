import axios from "axios";

const getRepositoryByIdOrName = async (serverUrl, id, name, setRepositories) => {
    const response = await axios.get(`${serverUrl}/search/?id=${id}&name=${name}`)
    if(Array.isArray(response.data)) {
        await setRepositories(response.data)
        return
    }
    await setRepositories(response.data.rows)
}

export default getRepositoryByIdOrName;