import apiSlice from "./apiSlice";

const orderStatsApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder) => {
        return {
            getAllOrder:builder.query({
                query: (value)=> {
                    return {
                        url:'/stats.json',
                        method: 'GET',
                    }
                },
                transformResponse: async (data) => {
                    // await new Promise((res) => setTimeout(res, 3000));
                    return data?.orderStats  || [];
                }
            })
        }
    }
})

export const {useGetAllOrderQuery} = orderStatsApiSlice;