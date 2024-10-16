import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {ScoreService} from "../../../services/score.service";
import {Score} from "../../../types/highscore";

@Component({
  selector: 'app-high-score',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './high-score.component.html',
  styleUrl: './high-score.component.css'
})
export class HighScoreComponent implements OnInit {
  highScores: Score[] = [];

  constructor(private scoreService: ScoreService) {
  }

  ngOnInit(): void {
    this.scoreService.getHighScores(5).subscribe(r => {
      this.highScores = r;
    });
  }
}
