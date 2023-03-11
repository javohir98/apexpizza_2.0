import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const basicAuth = {
    AUTH_PASS:'fstfdpswd',
    AUTH_USER:'fstfduser'
}

const credentials = btoa(basicAuth.AUTH_USER + ':' + basicAuth.AUTH_PASS)


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://apex-go.lavina.tech',
        prepareHeaders: (headers) => {
            headers.set('Access-Control-Allow-Origin', '*')
            headers.set('Access-Control-Allow-Credentials', 'true')
            headers.set('Authorization', `Basic ${credentials}`)
            return headers
        },    
    }),
    tagTypes: ['Product', 'Banner', 'Upsales'],
    endpoints: builder => ({})
})