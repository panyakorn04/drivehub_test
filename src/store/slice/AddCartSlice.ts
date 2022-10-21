import { createSlice } from "@reduxjs/toolkit";


interface AddCartState {
	cart: any;
	total: number;
	totalItems: number;
	discount: number;
	grandTotal: number;
}

const initialState = {
	cart: [],
	total: 0,
	totalItems: 0,
	discount: 0,
	grandTotal: 0,
};

const modalSlice = createSlice({
	name: "cart",
	initialState: localStorage.getItem("cartItems")
		? JSON.parse(localStorage.getItem("cartItems") || "")
		: initialState,
	reducers: {
		ADD_TO_CART: (state: AddCartState, action: any) => {

			const { photo, price, title } = action.payload.fields;
			const { id } = action.payload.sys;
			const { quantity } = action.payload;
			const { total, totalItems } = state;
			const item = {
				id,
				photo,
				price,
				title,
				quantity: quantity ? quantity : 1,
			};
			const inCart = state.cart.find((item: any) => item.id === id);
			if (inCart) {
				state.cart = state.cart.map((item: any) =>
					item.id === id
						? { ...item, quantity: item.quantity + 1 }
						: item
				);
			}
			const productIndex = state.cart.findIndex(
				(item: any) => item.id === id
			);
			if (productIndex === -1) {
				state.cart.push(item);
			}
			state.total = total + price;
			state.totalItems = totalItems + 1;
			state.discount = 0;
			state.grandTotal = state.total - state.discount;
			localStorage.setItem("cartItems", JSON.stringify(state));
		},
		REMOVE_FROM_CART: (state: AddCartState, action) => {
			const { id } = action.payload;
			const { total, totalItems } = state;
			const productIndex = state.cart.findIndex(
				(item: any) => item.id === id
			);
			const product = state.cart[productIndex];
			if (product.quantity > 1) {
				state.cart = state.cart.map((item: any) =>
					item.id === id
						? { ...item, quantity: item.quantity - 1 }
						: item
				);
			} else {
				state.cart = state.cart.filter((item: any) => item.id !== id);
			}
			state.total = total - product.price;
			state.totalItems = totalItems - 1;
			state.discount = 0;
			state.grandTotal = state.total - state.discount;
			localStorage.setItem("cartItems", JSON.stringify(state));
		},
		DECREASE_CART(state: AddCartState, action: any) {
			const { id } = action.payload;
			const { total, totalItems } = state;
			const productIndex = state.cart.findIndex(
				(item: any) => item.id === id
			);
			const product = state.cart[productIndex];
			if (product.quantity > 1) {
				state.cart = state.cart.map((item: any) =>
					item.id === id
						? { ...item, quantity: item.quantity - 1 }
						: item
				);
			} else {
				state.cart = state.cart.filter((item: any) => item.id !== id);
			}
			state.total = total - product.price;
			state.totalItems = totalItems - 1;
			state.discount = 0;
			state.grandTotal = state.total - state.discount;
			localStorage.setItem("cartItems", JSON.stringify(state));
		},
		INCREASE_CART(state: AddCartState, action: any) {
			console.log("INCREASE_CART", action.payload);
			const { id } = action.payload;
			const { total, totalItems } = state;
			const productIndex = state.cart.findIndex(
				(item: any) => item.id === id
			);
			const product = state.cart[productIndex];
			state.cart = state.cart.map((item: any) =>
				item.id === id ? { ...item, quantity: item.quantity + 1 } : item
			);
			state.total = total + product.price;
			state.totalItems = totalItems + 1;
			state.discount = 0;
			state.grandTotal = state.total - state.discount;
			localStorage.setItem("cartItems", JSON.stringify(state));
		},
		CLEAR_CART(state: AddCartState) {
			state.cart = [];
			state.total = 0;
			state.totalItems = 0;
			state.discount = 0;
			state.grandTotal = 0;
			localStorage.removeItem("cartItems");
		}
	},
});

export const { ADD_TO_CART, REMOVE_FROM_CART, DECREASE_CART, INCREASE_CART, CLEAR_CART } = modalSlice.actions;

export const selectCart = (state: any) => state.cart;
export const selectTotal = (state: any) => state.cart.total;
export const selectTotalItems = (state: any) => state.cart.totalItems;
export const selectDiscount = (state: any) => state.cart.discount;
export const selectGrandTotal = (state: any) => state.cart.grandTotal;

export default modalSlice.reducer;
