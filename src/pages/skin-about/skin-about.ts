import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateSkinOnePage} from '../donate-skin-one/donate-skin-one';
/*
  Generated class for the SkinAbout page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-skin-about',
  templateUrl: 'skin-about.html'
})
export class SkinAboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkinAboutPage');
  }

  donateBladder()
  {
    this.navCtrl.push(DonateSkinOnePage);
  }

}
