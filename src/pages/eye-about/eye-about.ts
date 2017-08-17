import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateEyeOnePage} from '../donate-eye-one/donate-eye-one';
/*
  Generated class for the EyeAbout page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-eye-about',
  templateUrl: 'eye-about.html'
})
export class EyeAboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EyeAboutPage');
  }

  donateBladder()
  {
    this.navCtrl.push(DonateEyeOnePage);
  }

}
