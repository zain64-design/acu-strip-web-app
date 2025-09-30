import apiSlice from "./apiSlice";

const statsApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder) => {
        return {
            getAllStats:builder.query({
                query: (value)=> {
                    return {
                        url:'/stats.json',
                        method: 'GET',
                    }
                },
                transformResponse: async (data) => {
                    await new Promise((res) => setTimeout(res, 2000));
                    return data?.statsData || [];
                }
            })
        }
    }
})

export const {useGetAllStatsQuery} = statsApiSlice;