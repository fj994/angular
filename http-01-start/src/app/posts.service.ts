import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.module';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  

  fetchPosts() {
    return this.http.get<{ [key: string]: Post }>('https://udemy-http-9a7dc.firebaseio.com/posts.json')
      .pipe(map(responseData => {
        const postsArray: Post[] = [];
        for (const key in responseData) {
          postsArray.push({...responseData[key], id: key});
        };
        return postsArray;
      }));    
  }

  createAndPost(newPost: {title: string, content: string}) {
    this.http
      .post<{ name: string }>(
        'https://udemy-http-9a7dc.firebaseio.com/posts.json',
        newPost
      )
      .subscribe(
        responseData => console.log(responseData)
      ,
        error => console.log(error)
      );
  }

  deleteAllPosts() {
    return this.http.delete('https://udemy-http-9a7dc.firebaseio.com/posts.json');
  }
}
