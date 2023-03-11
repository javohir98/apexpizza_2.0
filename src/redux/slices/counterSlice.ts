import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartProducts } from "../../types/types";

interface IState {
    cartProducts: ICartProducts[] | null
    closeX: boolean
    setNumber?: number
}

const initialState: IState = {
    cartProducts: null,
    closeX: false,
    setNumber: parseInt('')
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addToBasket: (state, action: PayloadAction<ICartProducts>) => {
            if(state.cartProducts === null) {
                state.cartProducts = [action.payload]
            } else {
                const sameProduct = state.cartProducts.some(
                    (el: ICartProducts) => 
                        el.product_id === action.payload.product_id && el.size === action.payload.size && el.option === action.payload.option,
                );
                if (!sameProduct) {
                    state.cartProducts = [...state.cartProducts, action.payload];
                } else {
                    state.cartProducts = state.cartProducts.map((el: ICartProducts) => {
                        if (el.product_id === action.payload.product_id && el.size === action.payload.size && el.option === action.payload.option) {
                            return { ...el, qty: action.payload.qty };
                        } else {
                            return el;
                        }
                    });
                }
            }
        },
        deleteToBasket: (state) => {
            state.cartProducts = null
        },
        getRekomend: (state,action) => {
            state.cartProducts = action.payload;
        },
        increment: (state, { payload }) => {
            if(state.cartProducts !== null) {
                state.cartProducts = state.cartProducts.map((el: ICartProducts, idx: number) => {
                    if (idx === payload) {
                        return {...el,qty:el.qty + 1}
                    }
                    return el;
                })
            }
       },
        decrement: (state, { payload }) => {
            if(state.cartProducts !== null) {
                const search = state.cartProducts.find((_, idx) => idx === payload);
        
                if (search?.qty === 1) {
                    state.cartProducts = state.cartProducts.filter((_, idx) => idx !== payload);
                } else {
                    state.cartProducts = state.cartProducts.map((el, idx) => {
                        if (idx === payload) {
                            return {...el, qty: el.qty - 1};
        
                        }
                        return el;
                    });
                }
            }
        },
        knowX: (state , { payload }) => {
            state.closeX = payload;
        },
        number: (state, action) => {
            state.setNumber = action.payload
        }
    }
})

export const { addToBasket, deleteToBasket, getRekomend, increment, decrement, knowX, number } = counterSlice.actions;
export default counterSlice.reducer