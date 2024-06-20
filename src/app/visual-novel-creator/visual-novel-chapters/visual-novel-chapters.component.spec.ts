import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualNovelChaptersComponent } from './visual-novel-chapters.component';

describe('VisualNovelChaptersComponent', () => {
  let component: VisualNovelChaptersComponent;
  let fixture: ComponentFixture<VisualNovelChaptersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualNovelChaptersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualNovelChaptersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
