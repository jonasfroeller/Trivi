import {Routes, UrlSegment} from '@angular/router';
import {TriviaComponent} from "./components/route/trivia/trivia.component";
import {NotFoundComponent} from "./components/route/not-found/not-found.component";
import {HighscoreComponent} from "./components/route/highscore/highscore.component";
import {TopicComponent} from "./components/route/topic/topic.component";

export function triviaMatcher(segments: UrlSegment[]) {
  const paths = ['', 'home', 'root', 'trivia', 'play', 'game'];
  const matched = paths.includes(segments[0]?.path) || segments.length === 0;
  return matched ? { consumed: segments } : null;
}

export function highScoresMatcher(segments: UrlSegment[]) {
  const paths = ['high-scores', 'highscores'];
  return paths.includes(segments[0]?.path) ? {consumed: segments} : null;
}

export const routes: Routes = [
  {
    title: "Trivia",
    matcher: triviaMatcher,
    component: TriviaComponent
  },
  {
    title: "High Scores",
    matcher: highScoresMatcher,
    component: HighscoreComponent
  },
  {
    title: "Topic Questions",
    path: "questions/:topic-id",
    component: TopicComponent
  },
  {
    title: "404 Not Found",
    path: "**",
    component: NotFoundComponent
  }
];
