import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'pt-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public openDropdownFlag = false;

  constructor() {}

  ngOnInit() {
  }

  mouseEnterDropdown() {
    this.openDropdownFlag = true;
  }

  mouseLeaveDropdown() {
    this.openDropdownFlag = false;
  }
}
