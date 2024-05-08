import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit{

  employees: Employee[] = [];

  constructor(private employeeService : EmployeeServiceService){

  }
  ngOnInit(): void {
    this.getAll();
  }
 private getAll() {
  this.employeeService.getEmployee().subscribe(data => {
    this.employees = data;
  });
 }
}
