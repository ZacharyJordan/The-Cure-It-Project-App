import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateThyroidTwoPage} from '../donate-thyroid-two/donate-thyroid-two';
/*
  Generated class for the ThyroidHurthle page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-thyroid-hurthle',
  templateUrl: 'thyroid-hurthle.html'
})
export class ThyroidHurthlePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThyroidHurthlePage');
  }

  donateThyroid()
  {
    this.navCtrl.push(DonateThyroidTwoPage);
  }

}
