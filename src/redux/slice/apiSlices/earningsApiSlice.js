import apiSlice from "./apiSlice";

const earningsApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder) => {
        return {
            getAllEarnings:builder.query({
                query: (value)=> {
                    return {
                        url:'/earningManagement.json',
                        method: 'GET',
                    }
                },
                transformResponse: async (data) => {
                    // await new Promise((res) => setTimeout(res, 2000));
                    return data?.earningManagementData || [];
                }
            })
        }
    }
})

export const {useGetAllEarningsQuery} = earningsApiSlice;