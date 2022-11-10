
import {  createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
        checkkey: "",
        userIDS: 0
    },
    reducers: {
        addProduct: (state, action) => {
            
            const id = action.payload._id;
            const objIndex = state.products.findIndex((e => e._id === id && e.color === action.payload.color && e.size === action.payload.size));
            if (objIndex > -1) {
                state.products[objIndex].quantity += action.payload.quantity;
            } else {
                state.quantity += 1;
                state.userIDS += 1;
                state.products.push({ ...action.payload, "idcart": state.userIDS });
                state.checkkey = "";
            }
            state.total += action.payload.price * action.payload.quantity;
        },
        increment: (state, id) => {
            console.log(state.products)
            const objIndex = state.products.findIndex((e => e.idcart === id.payload));

            if (objIndex > -1) {
                state.products[objIndex].quantity += 1;
                state.total += state.products[objIndex].price * 1;
            }
        },
        decrement: (state, id) => {
            const objIndex1 = state.products.findIndex((e => e.idcart === id.payload));
            if (objIndex1 > -1) {
                state.total -= state.products[objIndex1].price * 1;
                state.products[objIndex1].quantity -= 1;
                if (state.products[objIndex1].quantity < 1) {
                    state.products.splice(objIndex1, 1);
                    state.quantity -= 1;
                }
                
            }
            //
        },
        clearAllCart: (state) => {

            // From here we can take action only at this "counter" state
            // But, as we have taken care of this particular "logout" action
            // in rootReducer, we can use it to CLEAR the complete Redux Store's state
        }
    }
});


export const { addProduct, clearAllCart, increment, decrement } = cartSlice.actions
export default cartSlice.reducer;

