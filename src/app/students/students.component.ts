import { Component, OnInit } from '@angular/core';
import { Istudent } from '../shared/modal/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  studentlist: Istudent[] =[
    {
      fname:"tony",
      lname:"stark",
      nickname:"ironman",
      email:"tonystark@gmail.com",
      contact:1234567890
    },
    {
      fname:"peter",
      lname:"parker",
      nickname:"spiderman",
      email:"peterparker@gmail",
      contact:1234567890
    },
    {
      fname:"harry",
      lname:"potter",
      nickname:"harry",
      email:"harry@gmail.com",
      contact:1234567890
    },
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
