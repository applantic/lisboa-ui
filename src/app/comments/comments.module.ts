import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserCommentsComponent} from './components/containers/user-comments.component';
import {RouterModule} from '@angular/router';
import {ClarityModule} from '@clr/angular';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserCommentsComponent,
      },
    ]),
  ],
  declarations: [UserCommentsComponent]
})
export class CommentsModule { }
