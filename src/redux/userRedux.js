import { createSlice } from "@reduxjs/toolkit";

const useSlice = createSlice({
    name: "use",
    initialState: {
        currentUser: null,
        ifFetching: false,
        error: false
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        logoutUser: (state) => {

        }
    }
});

export const { loginStart, loginSuccess, loginFailure,logoutUser } = useSlice.actions
export default useSlice.reducer;