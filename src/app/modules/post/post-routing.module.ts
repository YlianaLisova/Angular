import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from "./components/posts/posts.component";
import {PostDetailComponent} from "./components/post-detail/post-detail.component";
import {PostResolver} from "./services";
import {PostGuard} from "./guards/post.guard";

const routes: Routes = [{
  path: '', component: PostsComponent,canActivate:[PostGuard], children: [
    {path: ':id', component: PostDetailComponent, resolve: {data: PostResolver}}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {
}
