import { IProductItemGroup, IResponseData } from "../../types/types";
import { apiSlice } from "./apiSlice";

export const extendedProductApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getProducts: builder.query({
            query: () => ({
                url: '/api/config/products/v2/8a80a06d-4b29-45ab-88ec-63390443ea8d',
                method: 'GET',
            }),
            transformResponse: (response: {data: IResponseData}, meta, args) => response.data,
            providesTags: ['Product']
        }),
        getItemsOfProduct: builder.mutation({
            query: ({id}) => ({
                url: `/api/config/items/${id}`,
                method: 'GET',
            }),
            transformResponse: (response: {data: IProductItemGroup}, meta, args) => response.data,
        })
    })
})

export const {
    useGetProductsQuery,
    useGetItemsOfProductMutation
} = extendedProductApiSlice