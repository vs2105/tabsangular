import { Component, OnInit } from '@angular/core';
import { posts } from '../shared/modal/const/post';
import { Ipost } from '../shared/modal/student';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
    postArray ! : Array<Ipost>
  constructor() { }

  ngOnInit(): void {
    this.postArray=posts
    console.log(this.postArray)
  }

}
