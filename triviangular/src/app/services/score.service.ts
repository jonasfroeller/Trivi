import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {Score, ScoreSubmission} from "../types/highscore";

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private pointsSubject = new BehaviorSubject<number>(0);
  points = this.pointsSubject.asObservable();

  constructor(private httpClient: HttpClient) {
  }

  updateScore(points: number) {
    console.log("updateScore()");
    this.pointsSubject.next(this.pointsSubject.value + points);
  }

  getCurrentScore(): number {
    console.log("getCurrentScore()");
    return this.pointsSubject.value;
  }

  resetScore() {
    console.log("resetScore()");
    this.pointsSubject.next(0);
  }

  saveScore(score: ScoreSubmission): Observable<unknown> {
    const URL = environment.BACKEND_SERVICE.ENDPOINT.SCORE.ROOT;
    console.log("saveScore() |", URL, score);

    return this.httpClient.post<unknown>(URL, score).pipe(
      tap(r => {
        console.log(r);
        this.resetScore();
      })
    );
  }

  getHighScores(limit: number = 5): Observable<Score[]> {
    const URL = environment.BACKEND_SERVICE.ENDPOINT.SCORE.HIGH_SCORES(limit);
    console.log("getHighScores() |", URL);

    return this.httpClient.get<Score[]>(URL).pipe(
      tap(r => {
        console.log(r);
      })
    );
  }
}
