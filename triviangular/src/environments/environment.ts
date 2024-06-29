import {TriviaAngularEnvironment} from "../app/types/trivia-angular-environment";
import {BACKEND_SERVICE} from "./globals";

const BACKEND_HOST = "https://xxx.com";
const BACKEND_BASE_PATH = "api";

export const environment: TriviaAngularEnvironment = {
  ...BACKEND_SERVICE(BACKEND_HOST, BACKEND_BASE_PATH)
};
