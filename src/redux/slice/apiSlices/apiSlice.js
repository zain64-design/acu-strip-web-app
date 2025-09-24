import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_DEV, BASE_API_PROD } from "../../../libs/constant";

export const apiSlice = createApi({
    reducerPath: 'dataGet',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NODE_ENV === 'production' ? BASE_API_PROD : BASE_API_DEV }),
    endpoints: (builder) => {
        return {
            getAllUserData: builder.query({
                query: (value) => {
                    return {
                        url: '/userManagement.json',
                        method: 'GET'
                    }
                },
                transformResponse: async (data) => {
                    await new Promise((res) => setTimeout(res, 2000));
                    // throw new Error("Custom test error: Something went wrong"); 
                    return data?.userManagementData || [];
                },
                validateStatus: (response, result) => {
                    return result?.userManagementData ? true : false;
                },
            })
        }
    }
})

export default apiSlice;

export const { useGetAllUserDataQuery } = apiSlice;