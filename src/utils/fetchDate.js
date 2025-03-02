import axios from "axios";

export const fetchDate =  async (url) => {
    const response = await axios.get(url)
    return response.data.rows
}
