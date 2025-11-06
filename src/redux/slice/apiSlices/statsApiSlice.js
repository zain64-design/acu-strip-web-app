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
                    return data?.statsData?.daily || [];
                }
            }),
            getAllWeeklyStats:builder.query({
                query:(value)=> {
                    return{
                        url: '/stats.json',
                        method: 'GET',
                    }
                },
                transformResponse: async (data) => {
                    return data?.statsData?.weekly || [];
                }
            }),
            getAllMonthlyStats:builder.query({
                query:(value)=> {
                    return{
                        url: '/stats.json',
                        method: 'GET',
                    }
                },
                transformResponse: async (data) => {
                    return data?.statsData?.monthly || [];
                }
            }),
            getAllYearlyStats:builder.query({
                query:(value)=> {
                    return{
                        url: '/stats.json',
                        method: 'GET',
                    }
                },
                transformResponse: async (data) => {
                    return data?.statsData?.yearly || [];
                }
            })
        }
    }
})

export const {useGetAllDailyStatsQuery,useGetAllWeeklyStatsQuery,useGetAllMonthlyStatsQuery,useGetAllYearlyStatsQuery} = statsApiSlice;