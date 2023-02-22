export interface QuizzItem {
  question: string,
  answers: string[],
  goodAnswerIndex: number,
  explanation?: string,
}

export interface QuizzMistake {
  question: string,
  goodAnswer: string,
  wrongAnswer: string,
  explanation: string,
}