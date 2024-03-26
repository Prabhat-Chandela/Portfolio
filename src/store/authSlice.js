import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    status: false,
    signedUpUserData: null,
    userProfileData: null,
    loggedInUserData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signup: (state, action) => {
            state.signedUpUserData = action.payload.signedUpUserData
        },
        createProfile: (state , action) => {
            state.userProfileData = action.payload.userProfileData,
            state.status = true
        },
        updateProfile: (state , action)=>{
            state.userProfileData = null,
            state.userProfileData= action.payload.updatedUserProfileData
        },
        login: (state, action) => {
            state.status = true,
            state.loggedInUserData = action.payload.loggedInUserData
        },
        logout: (state) => {
            state.status = false,
            state.loggedInUserData = null,
            state.userProfileData = null,
            signedUpUserData = null
        }
    }
})


export const { login, logout, signup, createProfile, updateProfile } = authSlice.actions;

export default authSlice.reducer;