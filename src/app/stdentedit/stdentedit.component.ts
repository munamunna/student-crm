import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from'@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../service/employee.service';
@Component({
  selector: 'app-stdentedit',
  templateUrl: './stdentedit.component.html',
  styleUrls: ['./stdentedit.component.css']
})
export class StdenteditComponent {
  studentForm=new FormGroup({
    name:new FormControl("",Validators.required),
    course:new FormControl("",Validators.required),
    email:new FormControl("",Validators.required),
    address:new FormControl("",Validators.required),
    contact:new FormControl("",Validators.required),
    gender:new FormControl("",Validators.required),
  })
  id:any
  constructor(private route:ActivatedRoute, private service:EmployeeService){
    this.id=this.route.snapshot.params["id"]
    this.service.getStudentDetail(this.id).subscribe(res=>this.studentForm.patchValue(res))
  }
  
}
