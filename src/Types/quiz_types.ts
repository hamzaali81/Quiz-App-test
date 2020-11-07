import React from 'react';
export type Quiz = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers:  string[]
    question: "What is the highest grossing film of all time (without adjusting for inflation)?"
    type: string
}

export type QuestionType={
    question: string,
    answer: string,
    option: string[]
}

export type questionPropsType = {
    question: string
    options: string[],
    callback: (e:React.FormEvent<EventTarget>, ans:string)=>void
}