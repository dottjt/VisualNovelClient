import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovelAllComponent } from './novel-all.component';

describe('NovelAllComponent', () => {
  let component: NovelAllComponent;
  let fixture: ComponentFixture<NovelAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovelAllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovelAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
