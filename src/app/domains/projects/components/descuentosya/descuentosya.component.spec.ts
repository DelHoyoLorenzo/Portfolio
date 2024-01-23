import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescuentosyaComponent } from './descuentosya.component';

describe('DescuentosyaComponent', () => {
  let component: DescuentosyaComponent;
  let fixture: ComponentFixture<DescuentosyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescuentosyaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescuentosyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
