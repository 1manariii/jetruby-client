import axios from "axios";

const getRepositoryByIdOrName = async (serverUrl, id, name, setRepositories) => {
    const response = await axios.get(`${serverUrl}/search?id=${id}&name=${name}`)
    return await setRepositories(response.data.rows)
}

export default getRepositoryByIdOrName;