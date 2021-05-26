import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './categories/categories.model';
import { Post } from './post/post.model';




const httpOptions = {
  headers: new HttpHeaders({ 
    "Content-Type": "Application/json"
  }),
};
const apiPostUrl = 'https://localhost:44350/api/Posts';
const apiCateUrl = 'https://localhost:44350/api/Categories';
const apiGet1 = 'https://localhost:44350/GetFeaturedPosts';
const apiGet3 = 'https://localhost:44350/GetLatestPosts';
const apiGet4 = 'https://localhost:44350/GetNewPosts';

@Injectable({
  providedIn: 'root'
})
export class VnexpressService {

  constructor(private httpClient:HttpClient) { }

  getAllPost():Observable<Post[]>{
    return this.httpClient.get<Post[]>(apiPostUrl).pipe(
    )
  }
  getPostById(id: number): Observable<Post> {
    const url = `${apiPostUrl}/${id}`;
    return this.httpClient.get<Post>(url).pipe();
  }
}




@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpClient:HttpClient) { }

  getAllCate():Observable<Category[]>{
    return this.httpClient.get<Category[]>(apiCateUrl).pipe(
    )
  }
}


@Injectable({
  providedIn: 'root'
})
export class Get1Service {

  constructor(private httpClient:HttpClient) { }

  get1Post():Observable<Post[]>{
    return this.httpClient.get<Post[]>(apiGet1).pipe(
    )
  }
}


@Injectable({
  providedIn: 'root'
})
export class Get3Service {

  constructor(private httpClient:HttpClient) { }

  get3Post():Observable<Post[]>{
    return this.httpClient.get<Post[]>(apiGet3).pipe(
    )
  }
}


@Injectable({
  providedIn: 'root'
})
export class Get4Service {

  constructor(private httpClient:HttpClient) { }

  get4Post():Observable<Post[]>{
    return this.httpClient.get<Post[]>(apiGet4).pipe(
    )
  }
}
