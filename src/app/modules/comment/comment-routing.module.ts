import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommentsComponent} from "./components/comments/comments.component";
import {CommentDetailsComponent} from "./components/comment-details/comment-details.component";
import {CommentResolver} from "./services";
import {CommentGuard} from "./guards";

const routes: Routes = [{
  path: '', component: CommentsComponent,canActivate:[CommentGuard], children:[
    {path: ':id', component: CommentDetailsComponent,canActivate:[CommentGuard], resolve: {data: CommentResolver}}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule { }
