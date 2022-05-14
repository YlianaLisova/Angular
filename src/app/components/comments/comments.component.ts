import {Component, OnInit} from '@angular/core';
import {IComment} from "../../models/IComment";
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: IComment[];

  constructor(private commentsService: CommentService) {
  }

  ngOnInit(): void {
    this.commentsService.getComments().subscribe(value => this.comments = value)
  }

}
