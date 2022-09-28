import React, { useState } from 'react'
import { questions } from '../../../questions';
import Question from './Question'

const QuestionPage = ( {
    score,
    setScore,
    setShowQuestionpage,
    setShowFinalPage
}) => {
    const [questionIndex, setQuestionindex ]=useState(0);
    // const [questiondata,setQuestionData]=useState([])

    // const data=async () =>{
    //     const result = await axios.get("http://localhost:3000/questions")
    //     console.log("questions:"+result.data)
    //     // setQuestionData(result);
    // }

    console.log("sdjshd"+questions);
  return (
    <>
        <Question 
            questionIndex={questionIndex}
            questions={questions}
            setQuestionindex={setQuestionIndex}
            setShowQuestionpage={setShowQuestionpage}
            setShowFinalPage={setShowFinalPage}
            score={score}
            setScore={setScore}
        />

    </>
  )
}

export default QuestionPage