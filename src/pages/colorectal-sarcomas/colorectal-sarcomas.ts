import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateColorectalOnePage} from '../donate-colorectal-one/donate-colorectal-one';
/*
  Generated class for the ColorectalSarcomas page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-colorectal-sarcomas',
  templateUrl: 'colorectal-sarcomas.html'
})
export class ColorectalSarcomasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ColorectalSarcomasPage');
  }

  donateBladder()
  {
    this.navCtrl.push(DonateColorectalOnePage);
  }

}
