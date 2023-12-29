import React, { useState } from "react";
import { fetchQuizQuestions, Question } from "./Api";
import QuestionCard from "./components/QuestionCard";
import { Difficulty } from "./Api";
import Results from "./Results";

const TOTAL_QUESTIONS = 10;

type UserAnswer = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

function App() {
  const [loading, setLoading] = useState(false);
  const [number, setNumber] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (selectedAnswer: string) => {
    if (!gameOver) {
      // Check user's answer against correct answer
      const correct = questions[number].correct_answer === selectedAnswer;

      // Update score
      if (correct) {
        setScore((prev) => prev + 1);
      }

      // Save user's answer
      const userAnswer: UserAnswer = {
        question: questions[number].question,
        answer: selectedAnswer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };

      setUserAnswers((prev) => [...prev, userAnswer]);

      // Move on to the next question
      nextQuestion();
    }
  };

  const nextQuestion = () => {
    // Move on to the next question if not the last question
    const nextQuestionNumber = number + 1;

    if (nextQuestionNumber === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestionNumber);
    }
  };

  return (
    <div
      className="App"
      style={{
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        color: "#333",
      }}
    >
      <h1 style={{ fontSize: "2em", margin: "20px 0", color: "#4caf50" }}>
        REACT QUIZ
      </h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button
          style={{
            backgroundColor: "#4caf50",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            padding: "10px 20px",
            fontSize: "1em",
            cursor: "pointer",
          }}
          onClick={startTrivia}
        >
          Start
        </button>
      ) : null}
      {!gameOver ? (
        <p style={{ fontSize: "1.5em", marginTop: "20px" }}>Score: {score}</p>
      ) : null}
      {loading && (
        <p style={{ fontSize: "1.2em", marginTop: "20px" }}>
          Loading Questions...
        </p>
      )}
      {!loading && !gameOver && (
        <QuestionCard
          questionNr={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={[
            ...questions[number].incorrect_answers,
            questions[number].correct_answer,
          ]}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      )}
      {!gameOver &&
      userAnswers.length === number + 1 &&
      number === TOTAL_QUESTIONS - 1 ? (
        <button
          style={{
            backgroundColor: "#4caf50",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            padding: "10px 20px",
            fontSize: "1em",
            marginTop: "20px",
            cursor: "pointer",
          }}
          onClick={nextQuestion}
        >
          Next Question
        </button>
      ) : null}
      {true && <Results userAnswers={userAnswers} score={score} />}
    </div>
  );
}

export default App;
