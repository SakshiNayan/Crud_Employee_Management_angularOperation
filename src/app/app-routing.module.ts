import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { HomeComponent } from './home/home.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';


const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full'},
  // { path: 'Home', component: HomeComponent },
  {path: 'addEmp', component : AddEmployeeComponent},
  {path: 'editEmp', component: EditEmployeeComponent},
  {path: 'viewEmp', component: ViewEmployeeComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
