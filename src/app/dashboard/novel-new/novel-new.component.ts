import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'

@Component({
  selector: 'novel-new',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './novel-new.component.html',
  styleUrl: './novel-new.component.css'
})
export class NovelNewComponent {
  newNovelForm = new FormGroup({
    novelTitle: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(100)
    ]),
  })

  onSubmit() {
    console.log(this.newNovelForm.value);
  }
}
