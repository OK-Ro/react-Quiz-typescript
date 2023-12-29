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

const StyledResultsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #282c34;
  color: #61dafb;
`;

const StyledResultCard = styled.div`
  width: 600px;
  padding: 40px;
  border: 2px solid #61dafb;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const ResultTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
`;

const ResultText = styled.p`
  font-size: 18px;
  margin-bottom: 15px;
`;

const StyledResultList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledResultListItem = styled.li`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Results: React.FC<ResultsProps> = ({ userAnswers, score }) => {
  return (
    <StyledResultsContainer>
      <StyledResultCard>
        <ResultTitle>Your Score: {score}</ResultTitle>
        <ResultText>Results:</ResultText>
        <StyledResultList>
          {userAnswers.map((answer, index) => (
            <StyledResultListItem key={index}>
              {answer.question} - Your Answer: {answer.answer} -{" "}
              {answer.correct ? "Correct" : "Incorrect"}
            </StyledResultListItem>
          ))}
        </StyledResultList>
      </StyledResultCard>
    </StyledResultsContainer>
  );
};

export default Results;
