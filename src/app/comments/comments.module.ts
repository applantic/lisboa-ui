import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserCommentsComponent} from './containers/user-comments.component';
import {RouterModule} from '@angular/router';
import {ClarityModule} from '@clr/angular';
import { CommentComponent } from './components/comment/comment.component';
import { AddCommentComponent } from './containers/add-comment/add-comment.component';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserCommentsComponent,
      },
      {
        path: 'add-comment',
        component: AddCommentComponent,
      },
    ]),
  ],
  declarations: [UserCommentsComponent, CommentComponent, AddCommentComponent]
})
export class CommentsModule { }
