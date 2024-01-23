import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobtrackerComponent } from './jobtracker.component';

describe('JobtrackerComponent', () => {
  let component: JobtrackerComponent;
  let fixture: ComponentFixture<JobtrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobtrackerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobtrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
