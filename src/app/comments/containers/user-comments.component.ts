import { Component, OnInit } from '@angular/core';
import {SentimentType, UserComment} from './user-comment';

@Component({
  selector: 'pt-user-comments',
  templateUrl: './user-comments.component.html',
  styleUrls: ['./user-comments.component.scss']
})
export class UserCommentsComponent implements OnInit {
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
