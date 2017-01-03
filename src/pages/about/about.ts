import { Component } from '@angular/core';
import {InformationPage} from '../information/information';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  
  informationOpen()
  {
    this.navCtrl.push(InformationPage);
  }

  constructor(public navCtrl: NavController) {

  }

}
