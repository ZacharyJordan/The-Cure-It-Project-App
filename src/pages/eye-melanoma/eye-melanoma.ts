import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateEyeOnePage} from '../donate-eye-one/donate-eye-one';
/*
  Generated class for the EyeMelanoma page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-eye-melanoma',
  templateUrl: 'eye-melanoma.html'
})
export class EyeMelanomaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EyeMelanomaPage');
  }

  donateTesticular()
  {
    this.navCtrl.push(DonateEyeOnePage);
  }
}
