import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SubmitComponent} from './submit.component';

describe('SubmitComponent', () => {
  let component: SubmitComponent;
  let fixture: ComponentFixture<SubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
