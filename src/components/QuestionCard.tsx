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

const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

const QuestionCardContainer = styled.div`
  width: 400px;
  padding: 20px;
  margin: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Number = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const QuestionText = styled.p`
  font-size: 20px;
  margin-bottom: 15px;
`;

const AnswerButton = styled.button`
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
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
    <QuizContainer>
      <QuestionCardContainer>
        <Number>
          Question: {questionNr} / {totalQuestions}
        </Number>

        <QuestionText dangerouslySetInnerHTML={{ __html: question }} />

        <div>
          {answers.map((answer, index) => (
            <div key={index}>
              <AnswerButton
                disabled={userAnswer}
                onClick={() => callback(answer)}
              >
                <span dangerouslySetInnerHTML={{ __html: answer }} />
              </AnswerButton>
            </div>
          ))}
        </div>
      </QuestionCardContainer>
    </QuizContainer>
  );
}

export default QuestionCard;
