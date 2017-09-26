import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'classes',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  showSubjects: boolean;
  showTopics: boolean;
  constructor() { 
    this.showSubjects = false;
    this.showTopics = false;
  }

  ngOnInit() {
  }
  toggleSubjects(){
    this.showSubjects = !this.showSubjects;
  }

  toggleTopics(){
    this.showTopics = !this.showTopics;
  }
}
