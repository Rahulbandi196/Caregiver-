import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.page.html',
  styleUrls: ['./add-patient.page.scss'],
})
export class AddPatientPage implements OnInit {
  user:any = {};

  constructor() { }

  submit(){
    console.log(this.user);
  }

  ngOnInit() {
  }

}
