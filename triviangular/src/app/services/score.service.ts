import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Subject, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  points = new Subject<number>();

  constructor(private httpClient: HttpClient) {
  }

  updateScore(points: number) {
    console.log("updateScore()");
    this.points.next(points);
  }

  saveScore(score: number) {
    const URL = environment.BACKEND_SERVICE.ENDPOINT.SCORE.ROOT;
    console.log("saveScore() |", URL, score);

    return this.httpClient.post<unknown>(URL, score) // save score
      .pipe(tap(r => {
        console.log(r)
      }));
  }
}
