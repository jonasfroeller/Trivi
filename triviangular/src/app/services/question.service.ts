import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";
import {Question} from "../types/question";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpClient: HttpClient) {
  }

  get randomQuestion() {
    const URL = environment.BACKEND_SERVICE.ENDPOINT.QUESTION.RANDOM;
    console.log("randomQuestion() |", URL);

    return this.httpClient.get<Question>(URL)
      .pipe(tap(r => {
        console.log(r)
      }));
  }

  answerQuestion(answerId: number) {
    const URL = environment.BACKEND_SERVICE.ENDPOINT.ANSWER.CHECK(answerId);
    console.log("answerQuestion() |", URL);

    return this.httpClient.get<number>(URL) // returns points. 0 means wrong => send score to backend, reset points
      .pipe(tap(r => {
        console.log("points:", r)
      }));
  }
}
