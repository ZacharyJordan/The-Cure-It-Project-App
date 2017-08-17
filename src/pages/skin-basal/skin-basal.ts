import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateSkinOnePage} from '../donate-skin-one/donate-skin-one';
/*
  Generated class for the SkinBasal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-skin-basal',
  templateUrl: 'skin-basal.html'
})
export class SkinBasalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkinBasalPage');
  }

  donateTesticular()
  {
    this.navCtrl.push(DonateSkinOnePage);
  }

}
