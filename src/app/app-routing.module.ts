import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children:[
      {path:'users', loadChildren:()=> import('./modules').then(value => value.UsersModule)},
      {path:'posts', loadChildren:()=> import('./modules').then(value => value.PostsModule)},
      {path:'comments', loadChildren:()=> import('./modules').then(value => value.CommentsModule)}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
