import { List } from '../../list/list';
import { List2 } from '../../list2/list2';
import { Component } from '@angular/core';
import { Employees } from '../../employees/employees';
import {
  Employee,
  EmployeeCreate,
} from '../../employee-create/employee-create';
import { FormsModule } from '@angular/forms';
import { Products } from "../../products/products";

@Component({
  selector: 'app-tutorial',
  imports: [FormsModule, List, List2, Employees, EmployeeCreate, Products],
  templateUrl: './tutorial.html',
})
export class Tutorial {
  employee = new Employee();
  employees: Employee[] = [];

  save(event: any) {
    this.employee = event;
    this.employees.push({ ...event });
  }
}
