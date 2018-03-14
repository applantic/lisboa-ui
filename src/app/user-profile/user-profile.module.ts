import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ClarityModule} from '@clr/angular';

import {CommentComponent} from './user-profile-page/comment/comment.component';
import {AddCommentComponent} from './user-profile-page/add-comment/add-comment.component';

import {UserProfileComponent} from './user-profile-page/user-profile-page.component';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule.forChild([{
      path: '',
      component: UserProfileComponent,
    }]),
  ],
  declarations: [
    UserProfileComponent,
    CommentComponent,
    AddCommentComponent
  ],
  exports: [],
})

export class UserProfileModule {}
