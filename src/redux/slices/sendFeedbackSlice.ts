import { apiSlice } from "./apiSlice";

export const extendedSendFeedbackApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        sendFeedback: builder.mutation({
            query: (data) => ({
                url: '/api/customer/reviews/',
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
   useSendFeedbackMutation
} = extendedSendFeedbackApiSlice