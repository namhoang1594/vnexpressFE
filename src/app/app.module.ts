import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { CategoriesComponent } from './categories/categories.component';
import { HttpClientModule } from '@angular/common/http';
import { VnexpressService } from './vnexpress.service';
import { DetailsPostComponent } from './post/details-post/details-post.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    CategoriesComponent,
    DetailsPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [VnexpressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
