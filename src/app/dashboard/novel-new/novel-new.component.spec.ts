import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovelNewComponent } from './novel-new.component';

describe('NovelNewComponent', () => {
  let component: NovelNewComponent;
  let fixture: ComponentFixture<NovelNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovelNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovelNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
