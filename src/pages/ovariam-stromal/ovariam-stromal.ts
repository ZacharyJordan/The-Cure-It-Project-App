import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateOvarianTwoPage} from '../donate-ovarian-two/donate-ovarian-two';
/*
  Generated class for the OvariamStromal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ovariam-stromal',
  templateUrl: 'ovariam-stromal.html'
})
export class OvariamStromalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad OvariamStromalPage');
  }
  
  donateTesticular()
  {
    this.navCtrl.push(DonateOvarianTwoPage);
  }

}
