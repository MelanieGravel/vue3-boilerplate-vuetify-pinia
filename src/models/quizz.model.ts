export interface Quizz {
  title: string,
  questions: QuizzItem[],
}

export interface QuizzItem {
  question: string,
  answers: string[],
  goodAnswerIndexes: number[],
  explanation?: string,
}

export interface QuizzMistake {
  question: string,
  correctAnswers: string[],
  userAnswers: string[],
  explanation: string,
}