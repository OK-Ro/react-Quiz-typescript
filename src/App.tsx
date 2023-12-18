import React, { useState } from "react";
import { fetchQuizQuestions } from "./Api";
import QuestionCard from "./components/QuestionCard";
import { Difficulty } from "./Api";

const TOTAL_QUESTIONS = 20;

function App() {
  const [loading, setLoading] = useState(false);
  const [number, setNumber] = useState(0);
  const [questions, setQuetions] = useState([]);
  const [userAnwers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [game, setGame] = useState(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

  const startTrivia = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuetion = () => {};
  return (
    <div className="App">
      <h1>REACT QUIZ</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">Score:</p>
      <p>Loading Questions</p>
      {/* <QuestionCard
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnwers ? userAnwers[number] : undefined}
        callback={checkAnser}
      /> */}
      <button className="next" onClick={nextQuetion}></button>
    </div>
  );
}

export default App;
