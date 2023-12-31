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

const StyledVerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #282c34;
  color: #fff;
`;

const StyledProgressBarContainer = styled.div`
  width: 100%;
  height: 20px;
  background-color: #ddd;
  border-radius: 10px;
  margin-bottom: 20px;
  overflow: hidden;
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
  color: #333;
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

const StyledProgress = styled.div<{ progress: number }>`
  width: ${(props) => props.progress}%;
  height: 100%;
  background-color: #4caf50;
  border-radius: 10px;
  transition: width 0.3s ease;
`;

const StyledMarioIcon = styled.img`
  width: 30px; /* Adjust the size as needed */
`;
function QuestionCard({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}: Props) {
  const progress = ((questionNr - 1) / totalQuestions) * 100;

  return (
    <StyledVerticalContainer>
      <StyledProgressBarContainer>
        <StyledProgress progress={progress}>
          {/* Replace the Mario emoji with the Mario icon */}
          <StyledMarioIcon
            src="https://th.bing.com/th/id/OIP.qcbpyuAQwAlBx46BanNxhAHaHk?rs=1&pid=ImgDetMain"
            alt="Mario Icon"
          />
        </StyledProgress>
      </StyledProgressBarContainer>

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
    </StyledVerticalContainer>
  );
}

export default QuestionCard;
