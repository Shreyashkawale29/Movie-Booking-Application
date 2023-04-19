import axios from 'axios'
export const getAllMovie = async () => {
    const res = await axios.get("movie/")
        .catch((err) =>
            console.log(err));
    
    if (res.status !== 200) {
        return console.log("No Data");
    }
    const data = await res.data;
    return data;
}