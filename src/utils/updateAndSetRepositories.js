import {updateDate} from "./updateDate";

const updateAndSetRepositories = async (serverUrl, setRepositories) => {
    const data = await updateDate(serverUrl)
    await setRepositories(data)
};

export default updateAndSetRepositories;