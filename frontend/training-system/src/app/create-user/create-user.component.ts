import { Component } from '@angular/core';
import { CreateUserService } from './create-user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent {
  employee_id: number;
  employee_firstname: string = '';
  employee_lastname: string = '';
  employee_email: string = '';
  employee_department: string = '';
  employee_designation: string = '';
  employee_dob: Date;
  employee_doj: Date;

  constructor(private createUserService: CreateUserService) {}

  onSubmit(): void {
    const employeeData = {
      employee_id: this.employee_id,
      employee_firstname: this.employee_firstname,
      employee_lastname: this.employee_lastname,
      employee_email: this.employee_email,
      employee_department: this.employee_department,
      employee_designation: this.employee_designation,
      employee_dob: this.employee_dob,
      employee_doj: this.employee_doj,
    };

    this.createUserService.createEmployee(employeeData).subscribe(
      (response: any) => {
        console.log(response);

        if (response && response.status === 'success') {
          console.log('Employee created successfully');
          // Optionally, you can navigate to a different page or perform other actions on success
        } else {
          console.log('Employee creation failed');
          // Handle failed employee creation
        }
      },
      (error) => {
        console.error('HTTP error:', error);
        console.error('Employee creation failed');
      }
    );
  }
}