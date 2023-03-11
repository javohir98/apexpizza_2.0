import { apiSlice } from "./apiSlice";

export const extendedOrderApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        setOrder: builder.mutation({
            query: (data) => ({
                url: '/api/orders/web',
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }),
        })
    })
})

export const {
   useSetOrderMutation
} = extendedOrderApiSlice