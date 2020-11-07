import { log } from 'console';
import React,{useState} from 'react';
import { QuestionType, Quiz, questionPropsType } from './../Types/quiz_types';


const QuestionCard: React.FC<any> = ({
    question,
    options,
    callback 
}) => {
    let [selectedAns, setSelectedAns] = useState("");
    const handleSelection=(ev:any)=>{
          console.log(ev.target.value);
          setSelectedAns(ev.target.value)
    }

    // console.log(question, options);

    return (
        <div className="question-container">
            <h1>Question Card</h1>
            <div className="question">
                {question}
            </div>

            <form onSubmit={(e:React.FormEvent<EventTarget>)=>callback(e,selectedAns)}>
                {options.map((opt: string, ind: number) => {
                    return <div key={ind}>

                        <label>
                            <input type="radio" name="opt" value={opt} onChange={handleSelection} required checked={selectedAns === opt}/>
                            {opt}

                        </label>
                    </div>

                })}
                <input type="submit"/>
            </form>
        </div>
    )
}


export default QuestionCard;