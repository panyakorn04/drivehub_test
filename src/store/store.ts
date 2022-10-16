import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk';

import CarListReducer from './slice/CarListSlice'
import AddCartReducer from './slice/AddCartSlice'
const reducer = {
    carlist: CarListReducer,
    cart: AddCartReducer
}

const store = configureStore({
    reducer: reducer,
    devTools: true,
    middleware: [thunkMiddleware]
})

export default store;