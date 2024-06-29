const BACKEND_HOST = "http://127.0.0.1:8080";
const BACKEND_BASE_PATH = "api";

export const environment = {
  BACKEND_SERVICE: {
    HOST: BACKEND_HOST,
    BASE_PATH: BACKEND_BASE_PATH,
    API_URL: `${BACKEND_HOST}/${BACKEND_BASE_PATH}`,
    ENDPOINT: {
      ANSWER: {
        PATH: `${BACKEND_HOST}/${BACKEND_BASE_PATH}/answers`
      },
      QUESTION: {
        PATH: `${BACKEND_HOST}/${BACKEND_BASE_PATH}/questions`
      },
      TOPIC: {
        PATH: `${BACKEND_HOST}/${BACKEND_BASE_PATH}/topics`
      },
      SCORE: {
        PATH: `${BACKEND_HOST}/${BACKEND_BASE_PATH}/scores`
      }
    }
  }
};
