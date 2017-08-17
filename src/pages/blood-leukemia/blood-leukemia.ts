import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateBloodTwoPage} from '../donate-blood-two/donate-blood-two';
/*
  Generated class for the BloodLeukemia page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-blood-leukemia',
  templateUrl: 'blood-leukemia.html'
})
export class BloodLeukemiaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BloodLeukemiaPage');
  }

  donateBlood()
  {
    this.navCtrl.push(DonateBloodTwoPage);
  }

}
