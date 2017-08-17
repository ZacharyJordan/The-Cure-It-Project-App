import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateOvarianOnePage} from '../donate-ovarian-one/donate-ovarian-one';
/*
  Generated class for the OvarianUnderstanding page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ovarian-understanding',
  templateUrl: 'ovarian-understanding.html'
})
export class OvarianUnderstandingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad OvarianUnderstandingPage');
  }

  donateThroat()
  {
    this.navCtrl.push(DonateOvarianOnePage);
  }

}
