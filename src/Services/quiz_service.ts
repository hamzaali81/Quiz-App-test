import { stringify } from 'querystring';
import { QuestionType,Quiz } from '../Types/quiz_types';


const shuffleArray = (array: any[])=> [...array].sort(()=> Math.random() - 0.5)

export const getQuizDetails= async(totalQuestion: number,level: string):Promise<QuestionType[]> =>{
    const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuestion}&difficulty=${level}&type=multiple`);
    // let data:QuestionType[] =await res.json();
    let {results} =await res.json();
    // console.log(results);
    // return result
    const quiz:QuestionType[] = results.map((questionObj:Quiz,ind: number)=>{
        return {
            question: questionObj.question,
            answer: questionObj.correct_answer,
            option: shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer))
        }
    })
    // return data:
    return quiz
}
