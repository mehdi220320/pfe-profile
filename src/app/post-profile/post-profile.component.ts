import { Component, OnInit } from '@angular/core';
import {PostService} from "../Services/post.service";
import {Post} from "../Models/Post";
import {Comment} from "../Models/Comment";
import {SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-post-profile',
  templateUrl: './post-profile.component.html',
  styleUrls: ['./post-profile.component.css']
})
export class PostProfileComponent implements OnInit {
  posts:Post[]=this.servicepost.getPosts();
  comment!:string;
  comments: Comment[] = [];

  onComment(event: Event) {
    this.comment = (event.target as HTMLInputElement).value;
  }
  create(id:number){
    this.comments.push(new Comment(this.comment,new Date(),id));
    this.comment='';
  }
  constructor(private servicepost:PostService) { }

  ngOnInit(): void {
  }


}
