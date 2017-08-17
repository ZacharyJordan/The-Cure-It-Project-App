import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateColorectalOnePage} from '../donate-colorectal-one/donate-colorectal-one';
/*
  Generated class for the ColorectalAbout page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-colorectal-about',
  templateUrl: 'colorectal-about.html'
})
export class ColorectalAboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ColorectalAboutPage');
  }

  donateBladder()
  {
    this.navCtrl.push(DonateColorectalOnePage);
  }
}
