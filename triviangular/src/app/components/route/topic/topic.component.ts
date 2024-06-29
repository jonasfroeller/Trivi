import {Component} from '@angular/core';
import {QuestionComponent} from "../../question/question.component";

@Component({
  selector: 'app-topic',
  standalone: true,
  imports: [
    QuestionComponent
  ],
  templateUrl: './topic.component.html',
  styleUrl: './topic.component.css'
})
export class TopicComponent {

}
