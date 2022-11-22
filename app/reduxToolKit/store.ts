import { configureStore } from "@reduxjs/toolkit";

import userReducer from './slices/userSlice'
import questionReducer from './slices/questionsSlice'
import resultReducer from './slices/resultSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        question: questionReducer,
        result: resultReducer

    }
});

export type rootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
