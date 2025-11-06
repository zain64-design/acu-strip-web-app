import apiSlice from "./apiSlice";

const statsApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder) => {
        return {
            getDailyStats:builder.query({
                query: (value)=> {
                    return {
                        url:'/stats.json',
                        method: 'GET',
                    }
                },
                transformResponse: async (data) => {
                    await new Promise((res) => setTimeout(res, 1000));
                    // throw new Error("Custom test error: Something went wrong"); 
                    return data?.statsData?.daily || [];
                }
            }),
            getWeeklyStats:builder.query({
                query:(value)=> {
                    return{
                        url: '/stats.json',
                        method: 'GET',
                    }
                },
                transformResponse: async (data) => {
                    await new Promise((res) => setTimeout(res, 1000));
                    return data?.statsData?.weekly || [];
                }
            }),
            getMonthlyStats:builder.query({
                query:(value)=> {
                    return{
                        url: '/stats.json',
                        method: 'GET',
                    }
                },
                transformResponse: async (data) => {
                    await new Promise((res) => setTimeout(res, 1000));
                    return data?.statsData?.monthly || [];
                }
            }),
            getYearlyStats:builder.query({
                query:(value)=> {
                    return{
                        url: '/stats.json',
                        method: 'GET',
                    }
                },
                transformResponse: async (data) => {
                    await new Promise((res) => setTimeout(res, 1000));
                    return data?.statsData?.yearly || [];
                }
            })
        }
    }
})

export const {useLazyGetDailyStatsQuery,useLazyGetWeeklyStatsQuery,useLazyGetMonthlyStatsQuery,useLazyGetYearlyStatsQuery} = statsApiSlice;