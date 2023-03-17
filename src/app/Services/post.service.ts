import { Injectable } from '@angular/core';
import {Post} from "../Models/Post";
import {FileHandle} from "../Models/FileHandle";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Post[] = [];
  constructor() { }
  getPosts(): Post[] {
    return this.posts;
  }
  addPost(post: Post): void {
    this.posts.push(post);
  }
  removePost(index: number) {
    this.posts.splice(index, 1);
  }
}
