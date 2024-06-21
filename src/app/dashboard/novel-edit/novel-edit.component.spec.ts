import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovelEditComponent } from './novel-edit.component';

describe('NovelEditComponent', () => {
  let component: NovelEditComponent;
  let fixture: ComponentFixture<NovelEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovelEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovelEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
