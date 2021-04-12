import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username:string;
  password:string;
  repassword:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

   }

   ionViewDidLoad() {
     console.log('ionViewLoad RegisterPage')
   }

   register(){
     if(this.username.length==0 || this.password.length==0 || this.repassword.length){
       alert("Please fill all fields");
     }
   }

  ngOnInit() {
  }

}
