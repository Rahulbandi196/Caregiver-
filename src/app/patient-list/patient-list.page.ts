import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.page.html',
  styleUrls: ['./patient-list.page.scss'],
})
export class PatientListPage  {

  constructor(public router:Router) { 

  }
  RedirecttoAddPage(){
    this.router.navigateByUrl('/add-patient')
    
  }
  RedirecttoViewPage(){
    this.router.navigateByUrl('/view')
  }
  RedirectToBackPage()
  {
    this.router.navigateByUrl('/home');
  }
  
   ngOnInit() {
    }
  
  }
  
  

