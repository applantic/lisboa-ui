import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'pt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) {}

  ngOnInit() {
  }

  login() {
    const userData = {
      username: 'jedynakpoczta@gmail.com',
      password: 'Pass123!'
    };

    this.authService
      .login(userData)
      .subscribe();

    return false;
  }

}
