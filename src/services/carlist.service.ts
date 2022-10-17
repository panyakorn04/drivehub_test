import axios from "axios";

const API_URL = "https://cdn.contentful.com/spaces/vveq832fsd73/entries?content_type=car";
const TOKEN = "VPmo2U661gTnhMVx0pc0-CtahNg_aqS5DuneLtYfO1o";

const getCarList = () => {
    axios.get(API_URL, {
        headers: {
            'Authorization': 'Bearer ' + TOKEN
        }
    })
}

const CarListService = {
    getCarList
}
export default CarListService
