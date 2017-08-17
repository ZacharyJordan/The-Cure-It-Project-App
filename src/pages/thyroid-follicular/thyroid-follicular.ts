import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateThyroidOnePage} from '../donate-thyroid-one/donate-thyroid-one';
/*
  Generated class for the ThyroidFollicular page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-thyroid-follicular',
  templateUrl: 'thyroid-follicular.html'
})
export class ThyroidFollicularPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThyroidFollicularPage');
  }

  donateThyroid()
  {
    this.navCtrl.push(DonateThyroidOnePage);
  }

}
