import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  constructor(public router: Router) {

   }

  RedirectToHistoryage()
  {
    this.router.navigateByUrl('/history');

  }

  RedirectToRecordsPage()
  {
    this.router.navigateByUrl('/records');
  }

  RedirectToInvoicePage()
  {
    this.router.navigateByUrl('/invoice');
  }

  back(){
    
    this.router.navigateByUrl('/patient-list');
  }
   

  ngOnInit() {
  }

}
