import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'cb8e568851mshf842b7004c18709p1b62cbjsn66c7e1a49d1f');

            return headers
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world' }),
    })
});

export const {
    useGetTopChartsQuery,
} = shazamCoreApi