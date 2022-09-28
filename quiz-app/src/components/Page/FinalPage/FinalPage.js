import React from 'react'
import Card from '../../Card/Card'
import './FinalPage.css'
const FinalPage = (
  score,
  setShowFinalPage,
  setShowStartingPage,
  topScore,
  setTopScore,
  setScore,
  // username,
  // setUserName

) => {
  const handleClick=()=>{
    if (score>topScore) {
      setTopScore(score);
    }

    setShowFinalPage(false);
    setShowStartingPage(true);
    setScore(0);
    // setUserName("");
  }
  return (
    <Card>
        <h1 className='heading'>You reached the end of the game!</h1>
    
        <h1 className='primary_text'>Your final score is: </h1>
        <h1 className='final_score'>{score}</h1>
        <button className='play_again_btn' onClick={handleClick}>Play Again</button>
    

    </Card>
  )
}

export default FinalPage