import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {ScoreService} from "../../../services/score.service";

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
  highScores: number[] = [];

  constructor(private scoreService: ScoreService) {
  }

  ngOnInit(): void {
    this.scoreService.getHighScores(5).subscribe(r => {
      this.highScores = r;
    })
  }
}
