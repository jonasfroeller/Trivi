import {TriviaAngularEnvironment} from "../app/types/trivia-angular-environment";

const BACKEND_HOST = "https://xxx.com";
const BACKEND_BASE_PATH = "api";

export const environment: TriviaAngularEnvironment = {
  BACKEND_SERVICE: {
    HOST: BACKEND_HOST,
    BASE_PATH: BACKEND_BASE_PATH,
    API_URL: `${BACKEND_HOST}/${BACKEND_BASE_PATH}`,
    ENDPOINT: {
      ANSWER: {
        ROOT: `${BACKEND_HOST}/${BACKEND_BASE_PATH}/answers`,
        CHECK: (answerId: number) => {
          return `${BACKEND_HOST}/${BACKEND_BASE_PATH}/answers/${answerId}/check`;
        }
      },
      QUESTION: {
        ROOT: `${BACKEND_HOST}/${BACKEND_BASE_PATH}/questions`,
        RANDOM: `${BACKEND_HOST}/${BACKEND_BASE_PATH}/questions/random`
      },
      TOPIC: {
        ROOT: `${BACKEND_HOST}/${BACKEND_BASE_PATH}/topics/`
      },
      SCORE: {
        ROOT: `${BACKEND_HOST}/${BACKEND_BASE_PATH}/scores/`
      }
    }
  }
};
