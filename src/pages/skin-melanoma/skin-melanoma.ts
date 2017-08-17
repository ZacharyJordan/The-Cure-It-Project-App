import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateSkinTwoPage} from '../donate-skin-two/donate-skin-two';
/*
  Generated class for the SkinMelanoma page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-skin-melanoma',
  templateUrl: 'skin-melanoma.html'
})
export class SkinMelanomaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkinMelanomaPage');
  }

  donateTesticular()
  {
    this.navCtrl.push(DonateSkinTwoPage);
  }

}
