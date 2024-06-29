export interface TriviaAngularEnvironment {
  BACKEND_SERVICE: {
    HOST: string;
    BASE_PATH: string;
    API_URL: string;
    ENDPOINT: {
      ANSWER: {
        ROOT: string;
        CHECK: (answerId: number) => string;
      },
      QUESTION: {
        ROOT: string;
        RANDOM: string;
      },
      TOPIC: {
        ROOT: string;
      },
      SCORE: {
        ROOT: string;
      }
    }
  }
}
