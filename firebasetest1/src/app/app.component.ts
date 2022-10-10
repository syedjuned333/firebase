import { Router } from '@angular/router';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { CrudService } from './service/crud.service';
import { Component } from '@angular/core';
// RouterModule
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'firebasetest1';
  employee!: string
  employeeName!: string
  employeeAge!: number
  employeeAddress!: string
  message!: string

  constructor(private _crudService: CrudService,private router:Router) {
  }

  getEmployeeDetails(){
    this._crudService.get_AllEmployee().subscribe((res=>{
  
      console.log(res)
      this.getEmployeeDetails;
    }),
    (err)=>{
  console.log(err)  
    }
    
    )
  }

  }

