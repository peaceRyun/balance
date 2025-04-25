import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isPortfolioST: false,
};

const sTSlice = createSlice({
    name: 'screentransform',
    initialState,
    reducers: {
        setPortfolioST: (state) => {
            state.isPortfolioST = !state.isPortfolioST;
        },
    },
});

export const sTActions = sTSlice.actions;
export default sTSlice.reducer;
