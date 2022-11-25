import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { rootState } from '../store';

const initialState = {
    language: '',
    questions: <any>[]
};

export const questionsSlice = createSlice({
    name:'questions',
    initialState,
    reducers: {
        selectLanguage: (state, action: PayloadAction<any>) => {
            state.language = action.payload.language;
            state.questions = action.payload.questions;
            // console.log('After selecting language',state)
        },
        answerQuestion: (state, action: PayloadAction<{questionId: number, answer: any, answered: boolean}>) => {
            state.questions[action.payload.questionId].answerGiven = action.payload.answer;
            state.questions[action.payload.questionId].answered = action.payload.answered;
            // console.log('QuestionID in Reducer', action.payload.questionId,':')
            // console.log( state.questions[action.payload.questionId])
            console.log('Answer in questionSlice', action.payload.answer)
            // console.log('Answer in state', state.questions[action.payload.questionId].answerGiven)
            // console.log('Answer type', typeof action.payload.answer)
        },
       
    }
});

export const { answerQuestion, selectLanguage } = questionsSlice.actions;

export const selectQuestion = (state: rootState) => state.question;

export default questionsSlice.reducer;















// ceil(): Returns next integer greater than or equal to given number.
// floor(): Returns the next integer less than or equal to given number.
// write(): Writes HTML expression or JavaScript code to a document.
// focus(): Sets focus to current window.
// trim(): Removes white spaces from both sides of string.

// answerQuestion: (state, action: PayloadAction<{language: string, question: string, answer: string}>) => {
        //     state[action.payload.language][action.payload.question].answerGiven = action.payload.answer
        //     state[action.payload.language][action.payload.question].answered = true
        //     console.log('state[action.payload.language]', state[action.payload.language])
        //     console.log('action.payload.language', action.payload.language)
        //     console.log('action.payload.question', action.payload.question)
        //     console.log('action.payload.answer', action.payload.answer)
        //     console.log(`state['JavaScript']`, state['JavaScript']['Question1'])
        // }