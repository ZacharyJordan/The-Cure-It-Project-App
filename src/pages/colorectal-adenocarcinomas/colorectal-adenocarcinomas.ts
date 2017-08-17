import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateColorectalTwoPage} from '../donate-colorectal-two/donate-colorectal-two';
/*
  Generated class for the ColorectalAdenocarcinomas page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-colorectal-adenocarcinomas',
  templateUrl: 'colorectal-adenocarcinomas.html'
})
export class ColorectalAdenocarcinomasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ColorectalAdenocarcinomasPage');
  }

  donateBladder()
  {
    this.navCtrl.push(DonateColorectalTwoPage);
  }

}
