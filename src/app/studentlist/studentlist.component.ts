import { Component } from '@angular/core';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent {
  students:any
  constructor(private service:EmployeeService){
    this.service.getAllStudent().subscribe(res=>this.students=res)

  }

}
