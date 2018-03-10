import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'main-wall-page',
  templateUrl: './main-wall-page.component.html',
  styleUrls: ['./main-wall-page.component.scss']
})
export class MainWallPageComponent implements OnInit {

  constructor(private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {

  }

  OnAddAnnouncement(){
    this.router.navigate(['../add-announcement'], { relativeTo: this.route })
  }

}