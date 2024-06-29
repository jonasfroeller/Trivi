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

  getTopicQuestions(topicId: number) {
    const URL = environment.BACKEND_SERVICE.ENDPOINT.QUESTION.OF_TOPIC(topicId);
    console.log("getTopicQuestions() |", URL);

    return this.httpClient.get<Question[]>(URL)
      .pipe(tap(r => {
        console.log(r)
      }));
  }
}
