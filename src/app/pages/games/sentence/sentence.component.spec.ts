import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenceComponent } from './sentence.component';

describe('SentenceComponent', () => {
  let component: SentenceComponent;
  let fixture: ComponentFixture<SentenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SentenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SentenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
