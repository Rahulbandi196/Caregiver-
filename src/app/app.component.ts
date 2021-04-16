import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public router: Router) {

  }

  back(){
    
    this.router.navigateByUrl('/view');
  }

  home(){

    this.router.navigateByUrl('/patient-list')
  }

 ngOnInit() {
  }

}

