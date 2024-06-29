import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {tap} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private httpClient: HttpClient) {
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
