import { ICartProducts } from "../../types/types"

export const calcAllPrice = (cartProducts: ICartProducts[]) => {
    return cartProducts?.reduce((previousValue: number, currentValue: ICartProducts) => {
        return previousValue + currentValue.price * currentValue.qty
    }, 0)
}

export const calcAllLength = (cartProducts: ICartProducts[]) => {
    return cartProducts?.reduce((previousValue: number, currentValue: ICartProducts) => {
        return previousValue + currentValue.qty
    }, 0)
}