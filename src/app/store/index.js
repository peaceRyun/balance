import { configureStore } from '@reduxjs/toolkit';
import sTR from './modules/sTSlice';

export const store = configureStore({
    reducer: {
        sTR,
    },
});
