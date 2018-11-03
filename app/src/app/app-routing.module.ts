import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import {OverheighteenComponent} from "./overheighteen/overheighteen.component";
const routes: Routes = [{
  path: "",
  component: OverheighteenComponent
},
  {
    path: "posts",
    component: PostsComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
