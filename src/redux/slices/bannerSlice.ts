import { IBannerGroup } from "../../types/types";
import { apiSlice } from "./apiSlice";

export const extendedBannerApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getBanners: builder.query({
            query: (type) => ({
                url: `/api/config/banner/8a80a06d-4b29-45ab-88ec-63390443ea8d?type=${type}`,
                method: 'GET'
            }),
            transformResponse: (response: {data: IBannerGroup}, meta, args) => response.data,
            providesTags: ['Banner']
        })
    })
})

export const {
    useGetBannersQuery
} = extendedBannerApiSlice