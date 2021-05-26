import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Get1Service, Get3Service, Get4Service, VnexpressService } from '../vnexpress.service';
import { Post } from './post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: Post[] = [];
  posts1: Post[] = [];
  posts3: Post[] = [];
  posts4: Post[] = [];


  constructor(
    private route: ActivatedRoute,
    private vnexpressService: VnexpressService,
    private get1Service: Get1Service,
    private get3Service: Get3Service,
    private get4Service: Get4Service,

  ) { }

  ngOnInit(): void {
    this.getAllPost();
    this.get1Post();
    this.get3Post();
    this.get4Post();

  }

  getAllPost(): void {
    this.vnexpressService.getAllPost().subscribe((post:any) => {this.posts = post})
  }

  get1Post(): void {
    this.get1Service.get1Post().subscribe((post:any) => {this.posts1 = post})
  }

  get3Post(): void {
    this.get3Service.get3Post().subscribe((post:any) => {this.posts3 = post})
  }

  get4Post(): void {
    this.get4Service.get4Post().subscribe((post:any) => {this.posts4 = post})
  }
}
