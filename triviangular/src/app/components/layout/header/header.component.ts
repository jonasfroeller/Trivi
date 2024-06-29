import {Component} from '@angular/core';
import {NavigationComponent} from "./navigation/navigation.component";
import {ScoreComponent} from "./score/score.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NavigationComponent,
    ScoreComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
