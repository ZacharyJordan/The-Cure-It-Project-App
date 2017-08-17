import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateEndometrialTwoPage} from '../donate-endometrial-two/donate-endometrial-two';
/*
  Generated class for the EndometrialCarcinoma page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-endometrial-carcinoma',
  templateUrl: 'endometrial-carcinoma.html'
})
export class EndometrialCarcinomaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EndometrialCarcinomaPage');
  }

  donateTesticular()
  {
    this.navCtrl.push(DonateEndometrialTwoPage);
  }

}
