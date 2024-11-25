import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const key = import.meta.env.VITE_API_KEY
// Note: Change v1 to v2 on rapid api

const cryptoApiHeaders = {
    'x-rapidapi-key': key,
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
}

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://coinranking1.p.rapidapi.com' }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers=1&orderBy=marketCap&orderDirection=desc&limit=${count}&offset=0`),
        }),

        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),

        getCryptoHistory: builder.query({
            query: ({ id, timePeriod }) => createRequest(`coin/${id}/history?timePeriod=${timePeriod}`),
        }),

        getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
        }),

        getGlobalStats: builder.query({
            query: () => createRequest("/stats?referenceCurrencyUuid=yhjMzLPhuIDl")
        })
    }),
});

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetExchangesQuery,
    useGetCryptoHistoryQuery,
    useGetGlobalStatsQuery,
} = cryptoApi;


