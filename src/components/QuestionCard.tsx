import React from "react";
import styled from "styled-components";

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNr: number;
  totalQuestions: number;
};

const StyledQuizContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #282c34;
  color: #fff;
`;

const StyledQuestionCardContainer = styled.div`
  width: 600px;
  padding: 40px;
  margin: 20px;
  border: 2px solid #61dafb;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const StyledNumber = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const StyledQuestionText = styled.p`
  font-size: 24px;
  margin-bottom: 30px;
`;

const StyledAnswerButton = styled.button`
  margin-bottom: 20px;
  padding: 15px;
  width: 100%;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }

  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
`;

function QuestionCard({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}: Props) {
  return (
    <StyledQuizContainer>
      <StyledQuestionCardContainer>
        <StyledNumber>
          Question: {questionNr} / {totalQuestions}
        </StyledNumber>

        <StyledQuestionText dangerouslySetInnerHTML={{ __html: question }} />

        <div>
          {answers.map((answer, index) => (
            <div key={index}>
              <StyledAnswerButton
                disabled={userAnswer !== undefined}
                onClick={() => callback(answer)}
              >
                <span dangerouslySetInnerHTML={{ __html: answer }} />
              </StyledAnswerButton>
            </div>
          ))}
        </div>
      </StyledQuestionCardContainer>
    </StyledQuizContainer>
  );
}

export default QuestionCard;
