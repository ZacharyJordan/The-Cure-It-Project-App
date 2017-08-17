import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateColorectalTwoPage} from '../donate-colorectal-two/donate-colorectal-two';
/*
  Generated class for the ColorectalCarcinoids page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-colorectal-carcinoids',
  templateUrl: 'colorectal-carcinoids.html'
})
export class ColorectalCarcinoidsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ColorectalCarcinoidsPage');
  }

  donateBladder()
  {
    this.navCtrl.push(DonateColorectalTwoPage);
  }

}
