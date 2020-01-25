import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.module';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;

  constructor(private http: HttpClient,
              private postsService: PostsService) {}

  ngOnInit() {
    this.onFetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.postsService.createAndPost(postData);
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(
      posts => {
        this.loadedPosts = posts;
        this.isFetching = false;
      },
      error => {console.log(error);
        this.error = error}
    );
  }

  onClearPosts() {
    // Send Http request
    this.postsService.deleteAllPosts().subscribe(
      () => this.loadedPosts = [],
      error => {console.log(error);
        this.error = error}
    );
  }
}
