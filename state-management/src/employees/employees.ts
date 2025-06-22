import { Component, Input } from '@angular/core';
import { Employee } from '../employee-create/employee-create';

@Component({
  selector: 'app-employees',
  imports: [],
  templateUrl: './employees.html',
})
export class Employees {
  @Input() employees: Employee[] = [];
}
