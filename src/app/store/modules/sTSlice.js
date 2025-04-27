import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    miniProjectST: false,
    projectST: false,
};

const sTSlice = createSlice({
    name: 'screentransform',
    initialState,
    reducers: {
        setMiniProjectST: (state, actions) => {
            state.miniProjectST = actions.payload;
        },
        setProjectST: (state, actions) => {
            state.projectST = actions.payload;
        },
    },
});

export const sTActions = sTSlice.actions;
export default sTSlice.reducer;
