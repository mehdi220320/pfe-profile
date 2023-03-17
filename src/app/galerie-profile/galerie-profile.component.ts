import { Component, OnInit } from '@angular/core';
import {PostService} from "../Services/post.service";
import {Post} from "../Models/Post";
import {SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-galerie-profile',
  templateUrl: './galerie-profile.component.html',
  styleUrls: ['./galerie-profile.component.css']
})

export class GalerieProfileComponent implements OnInit {
  n!:number;
  posts:Post[]=this.servicepost.getPosts();
  constructor(private servicepost:PostService) { }
  ngOnInit(): void {
    for(let i=0;i<this.posts.length;i++){
      this.n+=this.posts[i].imagesUploads.length ;
    }
  }
  imgpost(post:Post):SafeUrl{
    return post.imagesUploads[0].url;
  }




}
