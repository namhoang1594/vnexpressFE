import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPostComponent } from './post/details-post/details-post.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [

  {path:'', component:PostComponent},
  {path:'post/:id', component:DetailsPostComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
