import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {QuestionService} from "../../../services/question.service";
import {Question} from "../../../types/question";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-topic',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './topic.component.html',
  styleUrl: './topic.component.css'
})
export class TopicComponent implements OnInit {
  topicQuestions: Question[] = [];

  constructor(private questionService: QuestionService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(_params => {
      let topicId: number = Number(this.route.snapshot.paramMap.get('topic-id')!);

      this.questionService.getTopicQuestions(topicId).subscribe(r => {
        this.topicQuestions = r;
      })
    });
  }
}
