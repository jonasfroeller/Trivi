import {Component, OnDestroy, OnInit} from '@angular/core';
import {ScoreService} from "../../../../services/score.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent implements OnInit, OnDestroy {
  scoreSubscription: Subscription = new Subscription();
  score: number = 0;

  constructor(private scoreService: ScoreService) {
  }

  ngOnInit(): void {
    this.scoreSubscription = this.scoreService.points.subscribe(
      (points) => {
        if (points <= 0) {
          this.scoreService.saveScore(this.score).subscribe(
            () => {
              this.score = 0;
            }
          );
        } else {
          this.score += points;
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.scoreSubscription.unsubscribe();
  }
}
