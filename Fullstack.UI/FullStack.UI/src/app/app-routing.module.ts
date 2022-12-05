import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';

const routes: Routes = [
  {
    path: '', //this path would display the employees to the home page
    component: EmployeesListComponent
  },
  {
    path: 'employees',
    component: EmployeesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
