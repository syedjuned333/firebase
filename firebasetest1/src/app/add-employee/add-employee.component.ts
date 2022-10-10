import { CrudService } from './../service/crud.service';
import { EmployeedetailsComponent } from './../employeedetails/employeedetails.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  employee!: string
  employeeName!: string
  employeeAge!: number
  employeeAddress!: string
  message!: string
  constructor(private _crudService: CrudService,private router:Router) { }

  ngOnInit(): void {
  }

  
  createrecord() {
    // this.getEmployeeDetails();
    let Record: any = {};
    Record['name'] = this.employeeName
    Record['age'] = this.employeeAge
    Record['address'] = this.employeeAddress
    this._crudService.setEmployeeDetails([Record]);
    this.router.navigate(['employeedetails'])
    // this._crudService.create_New_Employee(Record).then((res: any) => {
    //   this.employeeName = res.employeeName;
    //   this.employeeAddress = res.employeeAddress;
    //   this.employeeAge = res.employeeAge;
    //   console.log(res);
    //   this.message = "employee data save done--"

    // }).catch((error: any) => {
    //   console.log(error)
    // });
    

  }

}
