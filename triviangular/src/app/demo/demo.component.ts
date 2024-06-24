import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  names: String[] = ['Homer', 'Marge', 'Bart', 'Lisa', 'Maggie']
}
