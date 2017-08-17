import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateEyeTwoPage} from '../donate-eye-two/donate-eye-two';
/*
  Generated class for the EyeRetino page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-eye-retino',
  templateUrl: 'eye-retino.html'
})
export class EyeRetinoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EyeRetinoPage');
  }

  donateTesticular()
  {
    this.navCtrl.push(DonateEyeTwoPage);
  }

}
