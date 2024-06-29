import {Component, OnInit} from '@angular/core';
import {QuestionService} from "../../../services/question.service";
import {Question} from "../../../types/question";
import {NgForOf} from "@angular/common";
import {ScoreService} from "../../../services/score.service";
import {AnswerService} from "../../../services/answer.service";

@Component({
  selector: 'app-trivia',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './trivia.component.html',
  styleUrl: './trivia.component.css'
})
export class TriviaComponent implements OnInit {
  activeQuestion: Question | null = null;

  constructor(private questionService: QuestionService, private answerService: AnswerService, private scoreService: ScoreService) {
  }

  ngOnInit(): void {
    this.nextQuestion();
  }

  nextQuestion() {
    this.questionService.randomQuestion.subscribe(
      (question) => {
        this.activeQuestion = question
      }
    );
  }

  answerQuestion(answerId: number) {
    this.answerService.answerQuestion(answerId).subscribe(
      (points) => {
        this.scoreService.updateScore(points);
      }
    );

    this.nextQuestion();
  }
}
