import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[] = [
    {
      id: '123',
      name: 'John Doe',
      email: 'jd@gmail.com',
      phone: 4145555555,
      salary: 100000,
      department: 'IT'
    },
    {
      id: '1234',
      name: 'Jane Doe',
      email: 'janed@gmail.com',
      phone: 4141111111,
      salary: 200000,
      department: 'Human Resources'
    },
    {
      id: '12345',
      name: 'Darth Vader',
      email: 'thedarkside@gmail.com',
      phone: 2036329651,
      salary: 1000000,
      department: 'Jedi High Council'
    }
  ];

  constructor() {}

  ngOnInit(): void {
    //when the component loads we want to show a list of the employees
    
    
  }
}
