import {fetchDate} from "./fetchDate";

const getAndSetRepositories = async (serverUrl, setRepositories) => {
    const data = await fetchDate(serverUrl)
    await setRepositories(data)
};

export default getAndSetRepositories