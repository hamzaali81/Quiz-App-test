import React,{ useEffect,useState } from 'react';
import { getQuizDetails } from './Services/quiz_service';
import { QuestionType,Quiz } from './Types/quiz_types'
import QuestionCard from './Components/QuestionCard';
import './App';

const App = () => {  

  let [quiz,setQuiz] = useState<QuestionType[]>([])
  let [currentStep,setCurrentStep] = useState(0);
  useEffect(() => {
    // getQuizDetails(10,'easy')
    async function fetchData() {
      const questions:QuestionType[] = await getQuizDetails(5,'easy');
      console.log(questions);
      setQuiz(questions);
    }
    fetchData()
  },[]);
  
   const handleSubmit = (e:React.FormEvent<EventTarget>, userAns: string)=>{
     e.preventDefault();
     
     console.log(userAns);
     
     if(currentStep !== quiz.length-1)
        setCurrentStep(++currentStep)
     else {
       alert('Quiz Complete')
       setCurrentStep(0)
      }
   }


  if(!quiz.length)
  return <h3>Loading...</h3>
  
  return (
    <div className="App">
      <QuestionCard options={quiz[currentStep].option} question={quiz[currentStep].question} callback={handleSubmit}/>
    </div>
  );
}

export default App;
