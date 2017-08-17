import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateEyeOnePage} from '../donate-eye-one/donate-eye-one';
/*
  Generated class for the EyeRadiation page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-eye-radiation',
  templateUrl: 'eye-radiation.html'
})
export class EyeRadiationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EyeRadiationPage');
  }

  donateSkin()
  {
    this.navCtrl.push(DonateEyeOnePage);
  }

}
