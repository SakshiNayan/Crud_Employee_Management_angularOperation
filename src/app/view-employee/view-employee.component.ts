import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service'; 

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit{
  constructor(private  employee: EmployeeService){}
  empData : any =[];
  
  ngOnInit(): void {
    this.employee.getAllEmployee().subscribe((alldata)=>{
      console.log(alldata);
      this.empData = alldata;
    });
  }
}
