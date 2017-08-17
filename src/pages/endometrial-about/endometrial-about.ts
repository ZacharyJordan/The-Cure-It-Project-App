import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateEndometrialOnePage} from '../donate-endometrial-one/donate-endometrial-one';
/*
  Generated class for the EndometrialAbout page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-endometrial-about',
  templateUrl: 'endometrial-about.html'
})
export class EndometrialAboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EndometrialAboutPage');
  }

  donateBladder()
  {
    this.navCtrl.push(DonateEndometrialOnePage);
  }

}
