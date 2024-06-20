import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualNovelCreatorComponent } from './visual-novel-creator.component';

describe('VisualNovelCreatorComponent', () => {
  let component: VisualNovelCreatorComponent;
  let fixture: ComponentFixture<VisualNovelCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualNovelCreatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualNovelCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
