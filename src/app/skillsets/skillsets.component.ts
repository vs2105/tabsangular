import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skillsets',
  templateUrl: './skillsets.component.html',
  styleUrls: ['./skillsets.component.scss']
})
export class SkillsetsComponent implements OnInit {

  skillsarray:Array<string>=["html","css","javascript","ts","sass"]

  constructor() { }

  ngOnInit(): void {
  }

}
