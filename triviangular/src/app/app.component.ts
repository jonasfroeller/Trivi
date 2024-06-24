import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavigationComponent} from "./navigation/navigation.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'triviangular';
}
