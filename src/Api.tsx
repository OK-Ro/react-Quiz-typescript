import { shuffleArray } from "./utils";

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}
export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  try {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const response = await fetch(endpoint);
    const data = await response.json();

    console.log("Fetched data:", data);

    if (data.response_code === 5) {
      // Too Many Requests, handle accordingly
      console.warn("API rate limit exceeded. Please wait and try again later.");
      return [];
    }

    if (!data.results || !Array.isArray(data.results)) {
      throw new Error("Invalid data structure or no results in the response.");
    }

    return data.results.map((question: Question) => ({
      ...question,
      answers: shuffleArray([
        ...question.incorrect_answers,
        question.correct_answer,
      ]),
    }));
  } catch (error) {
    console.error("Error fetching quiz questions:", error);
    throw error;
  }
};
