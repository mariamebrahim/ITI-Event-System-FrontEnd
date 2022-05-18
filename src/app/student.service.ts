import { HttpClient } from '@angular/common/http';
//import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Student } from './_models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
    baseurl="http://localhost:8081/student/";
  
    getAllDepartments(){
      return this.http.get<Student[]>(this.baseurl)
    }
    LoginStudent(stud:Student){
      return this.http.post<Student>(this.baseurl+'login',stud);

    }
    registerStudent(dept:Student){
      return this.http.post<Student>(this.baseurl,dept)
      // return this.http.put<Student>(this.baseurl+dept._id,dept);
    
    }
    getStudent(id:number){
     return this.http.get<Student>(this.baseurl+id);
    }
  
    constructor(public http:HttpClient) { }
}
