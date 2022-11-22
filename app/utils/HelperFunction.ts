export const calculate = (language: any) => {
    let marksScored = 0;
    let marksLost = 0;
    console.log('caclulate running')
    console.log('language in calculate', language)
    for (let i = 0; i < language.questions.length; i++) {
        let typeOfAnswer = typeof language.questions[i].answerGiven;
        console.log('typeOfAnswer', typeOfAnswer)
        switch (typeOfAnswer) {
            case 'string':
                if (language.questions[i].answer === language.questions[i].answerGiven) {
                    marksScored = marksScored + 20;
                } else {
                    marksLost = marksLost - 20;
                }
                break;
            case 'object':
                if (language.questions[i].answerGiven.length > 1) {
                    for (let j = 0; j < language.questions[i].answer.length; j++) {
                        if (language.questions[i].answer[j] === language.questions[i].answerGiven[j]) {
                            marksScored = marksScored + 20;
                        } else {
                            marksLost = marksLost - 20;
                        }
                    }
                } else {
                    marksLost = marksLost - 20;
                }
            // default: console.log('Something went wrong in calculating result');
            //     break;
        }
    }
    return { marksScored, marksLost }
}