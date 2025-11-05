import apiSlice from "./apiSlice";

const statsApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder) => {
        return {
            getAllDailyStats:builder.query({
                query: (value)=> {
                    return {
                        url:'/stats.json',
                        method: 'GET',
                    }
                },
                transformResponse: async (data) => {
                    // await new Promise((res) => setTimeout(res, 3000));
                    return data?.statsData || [];
                }
            }),
            // getAllWeeklyStats:builder.query({
            //     query:(value)=> {
            //         return{
            //             url: ''
            //         }
            //     }
            // })
        }
    }
})

export const {useGetAllDailyStatsQuery} = statsApiSlice;