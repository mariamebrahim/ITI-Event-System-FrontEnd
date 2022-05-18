import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  stud:Student=new Student("","",[]);
  constructor(public studSer:StudentService,public router:Router) { }
save(){
  this.studSer.registerStudent(this.stud).subscribe(a=>{
    console.log(a);
    this.router.navigate(['/student'])
  })
}
  ngOnInit(): void {
  }

}

