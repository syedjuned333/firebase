import { CrudService } from './../service/crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.scss']
})
export class EmployeedetailsComponent implements OnInit {
empDetails:any;

  constructor(private CrudService:CrudService) {
    // this.getEmployeeDetails();
   }

  ngOnInit(): void {
   this.empDetails = this.CrudService.getEmployeeDetail();
  }
  
getEmployeeDetails(){
  this.CrudService.get_AllEmployee().subscribe((res=>{

    console.log(res)
  }),
  (err)=>{
console.log(err)  
  }
  
  )
}
// deleteEmployee(){
//   this.CrudService.deleteemployee().subscribe(((res: any) =>{
//     console.log(res)
//   }))
// }
}
