import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {ScoreService} from "../../../services/score.service";
import {Score} from "../../../types/highscore";

@Component({
  selector: 'app-highscore',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './highscore.component.html',
  styleUrl: './highscore.component.css'
})
export class HighscoreComponent implements OnInit {
  highScores: Score[] = [];

  constructor(private scoreService: ScoreService) {
  }

  ngOnInit(): void {
    this.scoreService.getHighScores(5).subscribe(r => {
      this.highScores = r;
    })
  }
}
