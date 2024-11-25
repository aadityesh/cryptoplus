import { configureStore } from '@reduxjs/toolkit';

import { cryptoApi } from '../services/cryptoApi.js';
import { cryptoNewsApi } from '../services/cryptoNewsApi.js';

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(cryptoApi.middleware)
        .concat(cryptoNewsApi.middleware),
});