import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL = "https://cdn.contentful.com/spaces/vveq832fsd73/entries?content_type=car";
const TOKEN = "VPmo2U661gTnhMVx0pc0-CtahNg_aqS5DuneLtYfO1o";


export const fetchCarList = createAsyncThunk(
    'carlist/fetchCarList',
    async () => {
        const response = await axios.get(API_URL, {
            headers: {
                'Authorization': 'Bearer ' + TOKEN
            }
        })
        return response.data
    }
)

interface CarListState {
    carlist: any,
    status: 'idle' | 'loading' | 'failed'
}
const initialState: CarListState = {
    carlist: [],
    status: 'idle'
}

export const CarListSlice = createSlice({
    name: 'carlist',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCarList.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchCarList.fulfilled, (state, action) => {
                state.carlist = action.payload.items
            })
    }
})


export const selectCarList = (state: any) => state.carlist.carlist
// export const selectMinPrice = (state: any) => state.carlist.carlist[0].fields.price
export const selectMaxPrice = (state: any) => state.carlist.carlist[state.carlist.carlist.length - 1].fields.price

export default CarListSlice.reducer
