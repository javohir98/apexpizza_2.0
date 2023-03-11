export interface IProduct {
    id: string
    name: string
    photo_small: string
    photo_medium: string
    photo_original: string
    description: string
    items: IProductItem[]
    price: number
    is_pizza: boolean
}

export interface IProductItem {
    id: string
    photo_small: string
    photo_medium: string
    photo_original: string
    size: string
    option: string
    price: number
    index: string
}

export interface IProductItemSizes {
    items: IProductItem[]
    size: string
} 

export interface IProductItemGroup {
    count: number
    sizes: IProductItemSizes[]
}

export interface IProductGroup {
    id?: string
    index?: string
    name?: string
    products?: IProduct[]
}

export interface IResponseData {
    count: number
    data: IProductGroup[]
}

export interface IBanner {
    id: string
    name: string
    photo_small: string
    photo_medium: string
    photo_original: string
    type: string
}

export interface IBannerGroup {
    count: number
    banners: IBanner[]
}

export interface ICartProducts {
    qty: number
    size: string
    option: string
    product_id: string
    product: string
    price: number
    photo?: string
}