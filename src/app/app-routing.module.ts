import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user/user.component';
import {AboutComponent} from './about/about.component';
import { ClassComponent } from './class/class.component'
import { SubjectComponent } from './subject/subject.component'
import { TopicComponent } from './topic/topic.component'
import { NotesComponent } from './notes/notes.component'

const routes: Routes = [
  {
      path:'',
      component: UserComponent    
  },
  {
      path:'about',
      component: AboutComponent
  },
  {
    path:'classes',
    component: ClassComponent
},
{
    path:'subjects',
    component: SubjectComponent
},
{
    path:'topics',
    component: TopicComponent
},{
    path:'notes',
    component: NotesComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
