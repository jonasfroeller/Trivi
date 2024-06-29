import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavigationComponent} from "./components/layout/header/navigation/navigation.component";
import {NgForOf} from "@angular/common";
import {FooterComponent} from "./components/layout/footer/footer.component";
import {MainComponent} from "./components/layout/main/main.component";
import {HeaderComponent} from "./components/layout/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, NgForOf, FooterComponent, MainComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'triviangular';
}
