import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatMenuModule} from '@angular/material';
import { MatVideoModule } from 'mat-video';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { MangolModule } from 'mangol';
import {MatCardModule} from '@angular/material/card';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatVideoModule,
    MangolModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }



