import axios from "axios";
import {fetchDate} from "./fetchDate";

export const updateDate =  async (url) => {
    await axios.put(url)
    return fetchDate(url)
}
