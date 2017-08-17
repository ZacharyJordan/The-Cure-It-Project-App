import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateEyeTwoPage} from '../donate-eye-two/donate-eye-two';
/*
  Generated class for the EyeOcular page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-eye-ocular',
  templateUrl: 'eye-ocular.html'
})
export class EyeOcularPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EyeOcularPage');
  }

  donateThroat()
  {
    this.navCtrl.push(DonateEyeTwoPage);
  }

}
