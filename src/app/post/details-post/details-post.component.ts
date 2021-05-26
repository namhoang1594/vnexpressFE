import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VnexpressService } from 'src/app/vnexpress.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-details-post',
  templateUrl: './details-post.component.html',
  styleUrls: ['./details-post.component.css']
})
export class DetailsPostComponent implements OnInit {
  posts = new Post;
  id: number;

  constructor(
    private vnexpressService: VnexpressService, 
    private route: ActivatedRoute
  ) { 
    const idParam = 'id';
    if (this.route.snapshot.params[idParam]) {
      this.id = this.route.snapshot.params[idParam];
    }
  }

  ngOnInit(): void {
    this.getPostById();
  }
  getPostById(): void {
    this.vnexpressService.getPostById(this.id).subscribe(post => this.posts = post);
  }
}
