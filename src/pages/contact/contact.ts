import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {InformationPage} from '../information/information';
import {InAppBrowser} from 'ionic-native';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {


  facts()
  {
    window.open('http://google.com','_system', "location=true"); 
  }

  informationOpen()
  {
    this.navCtrl.push(InformationPage);
  }
  constructor(public navCtrl: NavController) {

  }

}
