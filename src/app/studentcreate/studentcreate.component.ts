import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { EmployeeService } from '../service/employee.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-studentcreate',
  templateUrl: './studentcreate.component.html',
  styleUrls: ['./studentcreate.component.css']
})
export class StudentcreateComponent {
constructor(private service:EmployeeService,private router:Router){

}

  studentForm=new FormGroup({
    name:new FormControl("",Validators.required),
    course:new FormControl("",Validators.required),
    email:new FormControl("",Validators.required),
    address:new FormControl("",Validators.required),
    contact:new FormControl("",Validators.required),
    gender:new FormControl("",Validators.required),
  })

  createStudent(){
    
    let formData=this.studentForm.value;
    if(this.studentForm.valid){
      this.service.CreateStudent(formData).subscribe(res=>this.router.navigateByUrl("students"))
    }
    else{
      alert("form is invalid")
    }
    
    
  }
}
