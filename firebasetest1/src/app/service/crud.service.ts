import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  // Employeedetails: any;
  employeeDetails:any;
  deleteemployee:any;

  constructor( public fireservices:AngularFirestore) { }

  create_New_Employee(Record: any){
   return this.fireservices.collection('Employee').add(Record) 
  }
  get_AllEmployee(){
    return this.fireservices.collection('Employee').snapshotChanges();
  }
  
  setEmployeeDetails(record:any){
    this.employeeDetails = record;
  }

  getEmployeeDetail(){
    return this.employeeDetails;
  }
  deleteEmployee(){
  return this.deleteemployee;
  }


}
