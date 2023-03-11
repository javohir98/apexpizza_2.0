import { ICartProducts } from "../../types/types"

interface IOrder {
    qty: number
    size: string
    option: string
    product_id: string
    product: string
}

export const deleteKeyForOrder = (object: ICartProducts[]) => {
    let tempArr: IOrder[] = []
    object?.forEach((item: ICartProducts) => {
        tempArr.push({
            qty: item.qty,
            size: item.size,
            option: item.option ?? "",
            product_id: item.product_id,
            product: item.product
        })
    })
    return tempArr
}