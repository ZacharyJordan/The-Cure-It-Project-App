import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateThyroidOnePage} from '../donate-thyroid-one/donate-thyroid-one';
/*
  Generated class for the ThyroidAbout page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-thyroid-about',
  templateUrl: 'thyroid-about.html'
})
export class ThyroidAboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThyroidAboutPage');
  }

  donateBladder()
  {
    this.navCtrl.push(DonateThyroidOnePage);
  }

}
