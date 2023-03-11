import { IResponseData } from "../../types/types";
import { apiSlice } from "./apiSlice";

export const extendedUpsalesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUpsales: builder.query({
            query: () => ({
                url: '/api/config/products/v2/8a80a06d-4b29-45ab-88ec-63390443ea8d?recommend=true',
                method: 'GET'
            }),
            transformResponse: (response: {data: IResponseData}, meta, args) => response.data,
            providesTags: ['Upsales']
        }),
    })
})

export const {
    useGetUpsalesQuery
} = extendedUpsalesApiSlice