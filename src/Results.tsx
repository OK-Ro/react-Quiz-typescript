import React from "react";
import styled from "styled-components";

type UserAnswer = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

type ResultsProps = {
  userAnswers: UserAnswer[];
  score: number;
};

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

const ResultCard = styled.div`
  width: 400px;
  padding: 20px;
  margin: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ResultText = styled.p`
  font-size: 20px;
  margin-bottom: 15px;
`;

const Results: React.FC<ResultsProps> = ({ userAnswers, score }) => {
  return (
    <ResultsContainer>
      <ResultCard>
        <ResultText>Your Score: {score}</ResultText>
        <ResultText>Results:</ResultText>
        <ul>
          {userAnswers.map((answer, index) => (
            <li key={index}>
              {answer.question} - Your Answer: {answer.answer} -{" "}
              {answer.correct ? "Correct" : "Incorrect"}
            </li>
          ))}
        </ul>
      </ResultCard>
    </ResultsContainer>
  );
};

export default Results;
