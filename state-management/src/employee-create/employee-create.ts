import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Output, output } from '@angular/core';

export class Employee {
  firstName: string = '';
  lastName: string = '';
  dateOfBirth: string = '';
}

@Component({
  selector: 'app-employee-create',
  imports: [FormsModule],
  templateUrl: './employee-create.html',
})
export class EmployeeCreate {
  employee = new Employee();

  @Output() myEvent = new EventEmitter<Employee>();

  saveEmployee() {
    //console.log(this.employee);
    this.myEvent.emit(this.employee);
    this.employee = new Employee();
  }
}
