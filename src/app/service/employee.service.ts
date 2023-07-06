import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getAllStudent(){
  return this.http.get("http://127.0.0.1:8000/api/students/")
}

getStudentDetail(id:any){
  return this.http.get(`http://127.0.0.1:8000/api/students/${id}`)
  
}
CreateStudent(data:any){
  return this.http.post("http://127.0.0.1:8000/api/students/",data)
}
UpdateStudent(id:any,data:any){
  return this.http.put(`http://127.0.0.1:8000/api/students/${id}/`,data)
}
deleteStudent(id:any){
  return this.http.delete(`http://127.0.0.1:8000/api/students/${id}`)
}

}
