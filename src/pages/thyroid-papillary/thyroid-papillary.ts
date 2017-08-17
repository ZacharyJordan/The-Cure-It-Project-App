import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateThyroidTwoPage} from '../donate-thyroid-two/donate-thyroid-two';
/*
  Generated class for the ThyroidPapillary page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-thyroid-papillary',
  templateUrl: 'thyroid-papillary.html'
})
export class ThyroidPapillaryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThyroidPapillaryPage');
  }

  donateThyroid()
  {
    this.navCtrl.push(DonateThyroidTwoPage);
  }

}
