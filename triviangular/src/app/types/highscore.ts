export interface ScoreSubmission {
  nickname: string;
  email: string;
  country: string;
  age: number;
  points: number;
}

export interface Score extends ScoreSubmission {
  id: number;
  nickname: string;
  email: string;
  country: string;
  age: number;
  dateSubmitted: string;
  points: number;
}
