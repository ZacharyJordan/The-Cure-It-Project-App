import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateSkinTwoPage} from '../donate-skin-two/donate-skin-two';
/*
  Generated class for the SkinPrevention page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-skin-prevention',
  templateUrl: 'skin-prevention.html'
})
export class SkinPreventionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkinPreventionPage');
  }

  donateThroat()
  {
    this.navCtrl.push(DonateSkinTwoPage);
  }

}
