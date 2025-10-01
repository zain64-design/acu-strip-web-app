import apiSlice from "./apiSlice";

const salesAnalyticsApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder) => {
        return {
            getAllSales:builder.query({
                query: (value)=> {
                    return {
                        url:'/stats.json',
                        method: 'GET',
                    }
                },
                transformResponse: async (data) => {
                    // await new Promise((res) => setTimeout(res, 3000));
                    return data?.salesAnalytics || [];
                }
            })
        }
    }
})

export const {useGetAllSalesQuery} = salesAnalyticsApiSlice;