import {Component, OnInit} from '@angular/core';
import {IComment} from "../../interfaces";
import {CommentsService} from "../../services/comments.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  comment: IComment;

  constructor(private commentsService: CommentsService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=>{
      const state = this.router.getCurrentNavigation()?.extras?.state?.['comment']

      if (state){
        this.comment = state;
      } else {
        this.commentsService.getById(id).subscribe(value => this.comment = value)
      }
    })
  }

}
