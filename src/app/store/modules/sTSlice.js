import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isPortfolioST: false,
};

const sTSlice = createSlice({
    name: 'screentransform',
    initialState,
    reducers: {
        setPortfolioST: (state, actions) => {
            state.isPortfolioST = actions.payload;
        },
    },
});

export const sTActions = sTSlice.actions;
export default sTSlice.reducer;
