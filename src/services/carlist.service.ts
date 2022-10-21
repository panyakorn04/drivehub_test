import axios from "axios";

const API_URL = "https://cdn.contentful.com/spaces/vveq832fsd73/entries?content_type=car";
const TOKEN = "VPmo2U661gTnhMVx0pc0-CtahNg_aqS5DuneLtYfO1o";



export const getCarList = async (): Promise<any> => {
    const response = await axios.get<any>(API_URL, {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    })
    return response;
}