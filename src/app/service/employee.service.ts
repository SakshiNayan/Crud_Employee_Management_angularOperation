import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = 'http://localhost:3000/users'

  constructor(private http: HttpClient) { }

  getAllEmployee(){
    return this.http.get(this.url);
  }
  saveEmployeeData(data : any){
    console.group(data);                                    //data will appear from addEmployee and passing
    return this.http.post(this.url, data).subscribe((result)=>{
      console.log(result);
    })
  }
}
