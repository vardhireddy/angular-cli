import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/posts.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[PostService]
})
export class UserComponent implements OnInit {

  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];

  constructor(private postService: PostService) { 
    this.name = "Celeste D'Costa";
    this.email = "celeste.dcosta@gmail.com";
    this.address = {
      street: "784 street",
      city: "AB city",
      state: "XY state"
    }
    this.hobbies = ["movies","coding","playing"];
    this.showHobbies = true;
    this.postService.getPosts().subscribe( posts =>{
      this.posts = posts;
    });
  }

  ngOnInit() {
  }

  toggleHobbies(){
    this.showHobbies = !this.showHobbies;
  }
  addHobby(hobby){
    this.hobbies.push(hobby);
  }
  deleteHobby(i){
    this.hobbies.splice(i,1);
  }
}
interface address{
  street: string,
  city: string,
  state: string
}
interface Post{
  id: number
  title: string;
  body: string;
}