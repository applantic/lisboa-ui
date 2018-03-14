import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Validators, FormBuilder, FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'pt-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      repeatPassword: ['', [Validators.required]]
    });
  }

  register() {
    this.authService
      .register(this.form.value)
      .subscribe();
  }

}
