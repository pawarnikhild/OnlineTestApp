import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import type { rootState } from '../store'

type initialStateType = {
    marksScored: number
    marksLost: number
    totalMarks: number
}

const initialState: initialStateType = {
    marksScored: 0,
    marksLost: 0,
    totalMarks: 100
}

const calculate = (state: any, language: any) => {
    let marksScored = 0;
    let marksLost = 0;
    console.log('caclulate running')
    for (let i = 0; i < language.questions.length; i++) {
        let typeOfAnswer = typeof language.questions[i].answerGiven;
        switch (typeOfAnswer) {
            case 'string':
                if (language.questions[i].answer === language.questions[i].answerGiven) {
                    marksScored = marksScored + 20;
                } else {
                    marksLost = marksLost + 20;
                }
                break;
            case 'object':
                let isAnswerCorrect = false;
                if (language.questions[i].answerGiven.length > 0) {
                    for (let j = 0; j < language.questions[i].answer.length; j++) {
                        if (language.questions[i].answer[j] === language.questions[i].answerGiven[j]) {
                            isAnswerCorrect = true;
                        } else {
                            isAnswerCorrect = false;
                            break;
                        }
                    }
                    if(isAnswerCorrect == true) {
                        marksScored = marksScored + 20;
                        console.log('Marks incresed')
                    } else {
                        marksLost = marksLost + 20;
                        console.log('Marks decreased')
                    }
                } else {
                    marksLost = marksLost + 20;
                }
            default: console.log('Something went wrong in calculating result');
                break;
        }
    }
    return { marksScored, marksLost }
}

export const resultSlice = createSlice({
    name: 'result',
    initialState,
    reducers: {
        calculateResult: (state, action: PayloadAction<any>) => {
            let marks = calculate(state, action.payload);
            state.marksScored = marks.marksScored;
            state.marksLost = marks.marksLost;
        }       
    }
});

export const { calculateResult } = resultSlice.actions;

export const selectUser = (state: rootState) => state.user

export default resultSlice.reducer;