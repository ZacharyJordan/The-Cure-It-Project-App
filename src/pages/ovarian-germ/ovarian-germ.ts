import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateOvarianOnePage} from '../donate-ovarian-one/donate-ovarian-one';
/*
  Generated class for the OvarianGerm page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ovarian-germ',
  templateUrl: 'ovarian-germ.html'
})
export class OvarianGermPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad OvarianGermPage');
  }

  donateTesticular()
  {
    this.navCtrl.push(DonateOvarianOnePage);
  }
}
