import { Component, OnInit } from '@angular/core';
import {SentimentType, UserComment} from '../user-profile.model';

@Component({
  selector: 'pt-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.scss']
})
export class UserProfileComponent implements OnInit {
  comments: Array<UserComment>;
  positiveCount = 5;
  negativeCount = 3;

  constructor() { }

  ngOnInit() {
    this.comments = [
      new UserComment('Spoko krowa', SentimentType.POSITIVE, new Date(), 'Jan Kowalski'),
      new UserComment('Siano OK!', SentimentType.POSITIVE, new Date(), 'Henryk Jedynak'),
      new UserComment('Nie dostarczono mi zboża', SentimentType.NEGATIVE, new Date(), 'Anotnii Nowak'),
    ];
  }
}
