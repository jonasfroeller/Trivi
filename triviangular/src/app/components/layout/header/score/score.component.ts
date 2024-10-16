import {Component, OnDestroy, OnInit} from '@angular/core';
import {ScoreService} from "../../../../services/score.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent implements OnInit, OnDestroy {
  scoreSubscription: Subscription = new Subscription();
  isInitialRender: boolean = true;
  score: number = 0;
  previousScore: number = 0;

  constructor(private scoreService: ScoreService, private router: Router) {
    this.score = this.scoreService.getCurrentScore();
    this.previousScore = this.score;
  }

  ngOnInit(): void {
    this.scoreSubscription = this.scoreService.points.subscribe(
      (points) => {
        console.log("Score changed |", points);

        if (this.isInitialRender) {
          this.isInitialRender = false;
          this.score = points;
        } else {
          this.score = points;

          const delta = points - this.previousScore;
          if (delta === 0) {
            console.log("Redirecting...");
            void this.router.navigateByUrl('/submit');
          }

          this.previousScore = this.score;
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.scoreSubscription.unsubscribe();
  }
}
