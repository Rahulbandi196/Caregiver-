import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username:string;
  password:string;

  constructor(public router:Router) {

  }
  

  login(){
    console.log("Username: "+ this.username);

    console.log("Password: "+ this.password);
    this.router.navigateByUrl('/patient-list');
  }

  goRegister(){
  
  }

}

