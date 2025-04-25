import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isPortfolioST: false,
};

const sTSlice = createSlice({
    name: 'screentransform',
    initialState,
    reducers: {
        setPortfolioST: (state, action) => {
            state.isPortfolioST = !action.payload;
        },
    },
});

export const sTActions = sTSlice.actions;
export default sTSlice.reducer;
