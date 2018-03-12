import {Component, Input, OnInit} from '@angular/core';
import {SentimentType, UserComment} from '../../containers/user-comment';

@Component({
  selector: 'pt-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input()
  comment: UserComment;
  positive = SentimentType.POSITIVE;
  negative = SentimentType.NEGATIVE;

  constructor() {
  }

  ngOnInit() {
  }

}
