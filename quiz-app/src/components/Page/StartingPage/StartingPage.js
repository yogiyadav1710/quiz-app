import React from 'react'
import Card from '../../Card/Card.js'
import './StartingPage.css'

const StartingPage = ({
  setShowStartingPage,
  setShowQuestionPage,
  topScore,
  userName,
  setUserName
}) => {

  const startQuiz= () =>{
    // if (userName.trim().length > 0) {
    //   setShowStartingPage(false);
    //   setShowQuestionPage(true);
    // }
  // console.log("sdsds");
    setShowStartingPage(false);
    setShowQuestionPage(true);
  };

  return (
    <Card >
        <h1 className="header">Welcome to Quiz Game</h1>
        {/* <h1 className="primary_text">Please Enter Your UserName</h1>
        <input 
          type='text' 
          className="username_input" 
          placeholder='Your UserName..' 
          value={username}  
          onChange={(e)=> setuserName(e.target.value)}
        /> */}
        <button className='start_btn' onClick={startQuiz}>Start Quiz</button>
        <p className='top_score'>top score: <span>{topScore}</span></p>
    </Card>
  )
}

export default StartingPage;