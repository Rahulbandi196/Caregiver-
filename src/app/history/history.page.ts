import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  constructor(public router: Router) {

   }
   RedirectToBackPage()
   {
     this.router.navigateByUrl('/view');
   }
   
  

  ngOnInit() {
  }

}
