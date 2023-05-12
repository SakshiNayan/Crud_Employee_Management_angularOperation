import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{
  addEmployee = new FormGroup({
    name : new FormControl(''),
    email : new FormControl('')
  }
  );
  constructor(private employee: EmployeeService){}

  ngOnInit(): void {
    
  }
  onAddSave(){
    //console.log(this.addEmployee.value);
    this.employee.saveEmployeeData(this.addEmployee.value)
  }
}
