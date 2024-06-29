export const BACKEND_SERVICE = (BACKEND_HOST: string, BACKEND_BASE_PATH: string) => {
  return {
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
          RANDOM: `${BACKEND_HOST}/${BACKEND_BASE_PATH}/questions/random`,
          OF_TOPIC: (topicId: number) => {
            return `${BACKEND_HOST}/${BACKEND_BASE_PATH}/topics/${topicId}/questions`
          }
        },
        TOPIC: {
          ROOT: `${BACKEND_HOST}/${BACKEND_BASE_PATH}/topics/`
        },
        SCORE: {
          ROOT: `${BACKEND_HOST}/${BACKEND_BASE_PATH}/scores/`,
          HIGH_SCORES: (limit: number) => {
            return `${BACKEND_HOST}/${BACKEND_BASE_PATH}/scores/top/${limit}`;
          }
        }
      }
    }
  }
}
