import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {InformationPage} from '../information/information';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  informationOpen()
  {
    this.navCtrl.push(InformationPage);
  }
  constructor(public navCtrl: NavController) {

  }

}
