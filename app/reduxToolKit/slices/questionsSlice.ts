import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { rootState } from '../store';

// type initialStateType = {
//     javaScript: any{}
// }

// const initialState: object = {
//     JavaScript: {
//         Question1: {
//             title: 'What is JavaScript?',
//             options: {
//                 optioin1: 'JavaScript is a scripting language used to make the website interactive',
//                 optioin2: 'JavaScript is an assembly language used to make the website interactive',
//                 optioin3: 'JavaScript is a compiled language used to make the website interactive',
//                 optioin4: 'None of the mentioned'
//             },
//             answer: 'JavaScript is a scripting language used to make the website interactive',
//             answered: false,
//             answerGiven: ''
//         },
//         Question2: {
//             title: 'You can use a text string as a literal value or assign it to a variable.',
//             options: {
//                 optioin1: 'True',
//                 optioin2: 'false',
//             },
//             answer: 'True',
//             answered: false,
//             answerGiven: ''
//         },
//         Question3: {
//             title: 'Javascript is an _____ language?',
//             options: {
//                 optioin1: 'Object-oriented',
//                 optioin2: 'Object-based',
//                 optioin3: 'Procedural',
//                 optioin4: 'None of above'
//             },
//             answer: 'Object-oriented',
//             answered: false,
//             answerGiven: ''
//         },
//         Question4: {
//             title: `
//             Match the follwing -
//               ceil(): 
//               floor(): 
//               write(): 
//               focus(): 
//               trim(): `,
//             options: {
//                 option1: 'Returns the next integer less than or equal to given number.',
//                 option2: 'Returns next integer greater than or equal to given number.',
//                 option3: 'Removes white spaces from both sides of string.',
//                 option4: 'Sets focus to current window.',
//                 option5: 'Writes HTML expression or JavaScript code to a document.'
//             },
//             answer: 'Object-oriented',
//             answered: false,
//             answerGiven: ''
//         },
//         Question5: {
//             title: 'How can we add an element to array in Javascript?',
//             options: {
//                 optioin1: 'using the spread operator',
//                 optioin2: 'using array.concat() method',
//                 optioin3: 'using array.push() method',
//                 optioin4: 'None of above'
//             },
//             answers: {
//                 optioin1: 'using the spread operator',
//                 optioin2: 'using array.concat() method',
//                 optioin3: 'using array.push() method'
//             },
//             answered: false,
//             answerGiven: ''
//         },
//     },
//     TypeScript: {}

// }

// const initialState: any[] = [];

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
            // console.log('action.payload', action.payload)
            // console.log('After selecting language',state)

        },
        answerQuestion: (state, action: PayloadAction<{questionId: number, answer: any, answered: boolean}>) => {
            state.questions[action.payload.questionId].answerGiven = action.payload.answer;
            state.questions[action.payload.questionId].answered = action.payload.answered;
            // console.log('Question in Reducer', action.payload.questionId,':')
            // console.log( state.questions[action.payload.questionId])
            console.log('Answer in questionSlice', action.payload.answer)
            console.log('Answer in state', state.questions[action.payload.questionId].answerGiven)
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