import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostsService} from "../../services/posts.service";
import {IPost} from "../../interfaces";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: IPost;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private postsService: PostsService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['post']

      if (state) {
        this.post = state;
      } else {
        this.postsService.getById(id).subscribe(value => this.post = value)
      }
    })
  }

}
