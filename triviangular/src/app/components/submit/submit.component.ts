import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {ScoreService} from "../../services/score.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-submit',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './submit.component.html',
  styleUrl: './submit.component.css'
})
export class SubmitComponent implements OnInit, OnDestroy {
  score: number = 0;
  scoreSubscription: Subscription = new Subscription();
  form = new FormGroup({
    nickname: new FormControl('nickname', [Validators.required, Validators.min(1)]),
    email: new FormControl('email@domain.tld', [Validators.required, Validators.email]),
    age: new FormControl(69, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.min(13)]),
    country: new FormControl('country'),
    accept: new FormControl(true, [Validators.required, Validators.requiredTrue]),
  })

  constructor(private scoreService: ScoreService, private router: Router) {
    this.score = this.scoreService.getCurrentScore();
  }

  onSend() {
    console.log("onSend()");

    if (this.form.valid) {
      console.log({
        ...this.form.value,
        points: this.score
      });

      this.scoreService.saveScore({
        nickname: String(this.form.value.nickname),
        email: String(this.form.value.email),
        country: String(this.form.value.country),
        age: Number(this.form.value.age),
        points: this.score,
      }).subscribe(
        () => {
          void this.router.navigateByUrl('/play');
        }
      );
    }
  }

  ngOnInit(): void {
    this.scoreSubscription = this.scoreService.points.subscribe(
      (points) => {
        this.score = points;
      }
    );
  }

  ngOnDestroy(): void {
    this.scoreSubscription.unsubscribe();
  }
}
