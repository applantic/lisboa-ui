import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'pt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router) {}

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    this.authService
      .login(this.form.value)
      .do(() => this.router.navigate(['ogloszenia']))
      .subscribe();
  }

}
