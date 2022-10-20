import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as CarListService from '../../services/carlist.service';

export const fetchCarList = createAsyncThunk(
    'carlist/fetchCarList',
    async () => {
        try {
            const response = await CarListService.getCarList()
            return response.data;
        } catch (error) {
            console.log(error);
        }
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
                state.carlist = action.payload.items;
            })
    }
})


export const selectCarList = (state: any) => state.carlist.carlist
// export const selectMinPrice = (state: any) => state.carlist.carlist[0].fields.price
// export const selectMaxPrice = (state: any) => state.carlist.carlist[state.carlist.carlist.length - 1].fields.price

export default CarListSlice.reducer
