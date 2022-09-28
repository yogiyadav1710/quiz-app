import React from 'react'
// import { questions } from '../../../questions';
import Card from '../../Card/Card'
import './Question.css';


const Question = ({
    questionIndex,
    setQuestionIndex,
    questions,
    setShowQuestionPage,
    setShowFinalPage,
    score,
    setScore
}) => {
            const handleClick=(isCorrect)=>{
                if (questionIndex<9) {
                    if(isCorrect) {
                        setScore((score)=>(score+=10));
                    } 
                    setQuestionIndex((prevIndex)=>prevIndex+1);

                } else {
                    if (isCorrect) {
                        setScore((score)=> (score+=10));
                    }
                    setShowQuestionPage(false);
                    setShowFinalPage(true);
                }
            }
// console.log(questions);
// questions.map((question)=>{
//     <li>{questions.questionText}</li>
// })

    return (
        <Card>
            <h1 className='question'>{questions[questionIndex].questionText}</h1>

            <div className='answers'>
                {questions[questionIndex].answers((answer,index)=>{
                        <div className='answer' key={index} onClick={()=> handleClick(answer.correctAnswer)}><p>{answer.answerText}</p></div>
                })}
                
                
            </div>
            <div className='answers'>
                <div className='answer'>
                    <p>Answer</p>
                </div>
            </div>
            <div className='answers'>
                <div className='answer'>
                    <p>Answer</p>
                </div>
            </div>
            <div className='answers'>
                <div className='answer'>
                    <p>Answer</p>
                </div>
            </div>
            <div className='answers'>
                <div className='answer'>
                    <p>Answer</p>
                </div>
            </div>

{/* questions.map((question)=>{
    <li>{questions.questionText}</li>
}) */}

            <p className='score'>
                Score:  <span>{}score</span>
            </p>
            <p className='question_number'>
                Question <span>{questionIndex+1}</span>
            </p>

        </Card>
    )
}

export default Question