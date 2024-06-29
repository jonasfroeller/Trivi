import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgForOf} from "@angular/common";
import {TopicService} from "../../../../services/topic.service";
import {Topic} from "../../../../types/topic";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgForOf
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements OnInit {
  topics: Topic[] = [];

  constructor(private topicService: TopicService) {
  }

  ngOnInit(): void {
    this.topicService.topics.subscribe(r => {
      this.topics = r;
    })
  }
}
