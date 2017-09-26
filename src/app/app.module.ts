import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import {AppRoutingModule} from './app-routing.module';
import { ClassComponent } from './class/class.component';
import { SubjectComponent } from './subject/subject.component';
import { TopicComponent } from './topic/topic.component';
import { NotesComponent } from './notes/notes.component'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    ClassComponent,
    SubjectComponent,
    TopicComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
