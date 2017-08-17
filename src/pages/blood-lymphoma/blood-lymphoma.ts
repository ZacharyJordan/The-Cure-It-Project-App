import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateBloodTwoPage} from '../donate-blood-two/donate-blood-two';
/*
  Generated class for the BloodLymphoma page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-blood-lymphoma',
  templateUrl: 'blood-lymphoma.html'
})
export class BloodLymphomaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BloodLymphomaPage');
  }

  donateBlood()
  {
    this.navCtrl.push(DonateBloodTwoPage);
  }

}
