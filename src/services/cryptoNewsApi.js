import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const key = import.meta.env.VITE_API_KEY

const newsHeaders = {
    'x-rapidapi-key': key,
    'x-rapidapi-host': 'crypto-news16.p.rapidapi.com'
}

const createRequest = (url) => ({ url, headers: newsHeaders })

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://crypto-news16.p.rapidapi.com' }),
    endpoints: (builder) => ({
        getTopCryptoNews: builder.query({
            query: () => createRequest(`/news/top/9`),
        }),
        getAllCryptoNews: builder.query({
            query: () => createRequest(`/news/all`),
        }),

    }),
});

export const { useGetTopCryptoNewsQuery, useGetAllCryptoNewsQuery } = cryptoNewsApi