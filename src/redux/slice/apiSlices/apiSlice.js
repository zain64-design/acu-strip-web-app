import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_DEV, BASE_API_PROD } from "../../../libs/constant";

export const apiSlice = createApi({
    reducerPath: 'dataGet',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NODE_ENV === 'production' ? BASE_API_PROD : BASE_API_DEV }),
    endpoints: (builder) => {
        return {
            getUserManagementData: builder.query({
                query: (value) => {
                    return {
                        url: '/userManagement.json',
                        method: 'GET'
                    }
                },
                transformResponse: async (data) => {
                    await new Promise((res) => setTimeout(res, 2000));
                    return data?.userManagementData || [];
                }
            })
        }
    }
})

export default apiSlice;

export const { useGetUserManagementDataQuery } = apiSlice;