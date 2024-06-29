import {Topic} from "./topic";
import {Answer} from "./answer";

export interface Question {
  text: string;
  topics: Topic[];
  answers: Answer[];
}
