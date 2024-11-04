import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cantBeStrider } from '../../../shared/validators/validators';

@Component({
  templateUrl: './register-page.component.html',
})

export class RegisterPageComponent {
  public myForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required , Validators.email]],
      username: ['', [Validators.required, cantBeStrider]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]]
    });
  }

  isValidField(field: string) {
    // TODO: obtener validacion desde un servicio
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }
}
