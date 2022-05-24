import {Component, OnInit} from '@angular/core';
import {PostsService} from "../../services/posts.service";
import {IPost} from "../../interfaces";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: IPost[];

  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void {
    this.postsService.getAll().subscribe(value => this.posts = value)
  }
}
