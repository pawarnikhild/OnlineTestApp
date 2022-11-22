import { createSlice } from "@reduxjs/toolkit";
// import { PayloadAction } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

import type { rootState } from '../store'


type initialStateType = {
    name: string
    email: string
    phoneNo: number | string
    preferedLanguage: string
}

const initialState: initialStateType = {
    name: '',
    email: '',
    phoneNo: 0,
    preferedLanguage: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<{name: string, email: string, phoneNo: string, preferedLanguage: string}>) => {
            state.name = action.payload.name
            state.email = action.payload.email
            state.phoneNo = action.payload.phoneNo
            state.preferedLanguage = action.payload.preferedLanguage
            console.log('initialState in userReducer',state)
        }

    }
});

export const { addUser } = userSlice.actions;

export const selectUser = (state: rootState) => state.user

export default userSlice.reducer;