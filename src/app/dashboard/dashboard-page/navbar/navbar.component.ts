import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../auth/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'pt-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public openDropdownFlag = false;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  mouseEnterDropdown() {
    this.openDropdownFlag = true;
  }

  mouseLeaveDropdown() {
    this.openDropdownFlag = false;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['logowanie']);
  }
}
