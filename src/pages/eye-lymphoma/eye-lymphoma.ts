import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateEyeTwoPage} from '../donate-eye-two/donate-eye-two';
/*
  Generated class for the EyeLymphoma page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-eye-lymphoma',
  templateUrl: 'eye-lymphoma.html'
})
export class EyeLymphomaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EyeLymphomaPage');
  }

  donateTesticular()
  {
    this.navCtrl.push(DonateEyeTwoPage);
  }

}
