import './App.css';
import { useState } from 'react'
import FinalPage from './components/Page/FinalPage/FinalPage';
import StartingPage from './components/Page/StartingPage/StartingPage'
import Question from './components/Page/Question/Question'

function App() {
  const [showStartingPage, setShowStartingPage] = useState(true);
  const [showQuestionPage, setShowQuestionPage] = useState(false);
  const [showFinalPage, setShowFinalPage] = useState(false);

  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  // const [userName, setUserName] = useState("")

  

  return (
    <>
      {showStartingPage && (
        <StartingPage
          setShowStartingPage={setShowStartingPage}
          setShowQuestionPage={setShowQuestionPage}
          topScore={topScore}
          // userName={userName}
          // setUserName={setUserName}
        />
      )} 
       {showQuestionPage && (
        <Question 
          score={score}
          setScore={setScore}
          setShowQuestionPage={setShowQuestionPage}
          setShowFinalPage={setShowFinalPage}
        />
      )}
      {showFinalPage && (
        <FinalPage 
          score={score}
          setScore={setScore}
          topScore={topScore}
          setTopScore={setTopScore}
          setShowStartingPage={setShowStartingPage}
          setShowFinalPage={setShowFinalPage}
          // userName={userName}
          // setUserName={setUserName}
        />
      )}
      {/* <StartingPage /> */}
    </>
  );
}

export default App;
