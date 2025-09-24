import apiSlice from "./apiSlice";

const vehiclesApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder) => {
        return {
            getAllVehicles:builder.query({
                query: (value)=> {
                    return {
                        url:'/vehicleManagement.json',
                        method: 'GET',
                    }
                },
                transformResponse: async (data) => {
                    await new Promise((res) => setTimeout(res, 2000));
                    return data?.vehicleManagementData || [];
                }
            })
        }
    }
})

export const {useGetAllVehiclesQuery} = vehiclesApiSlice;