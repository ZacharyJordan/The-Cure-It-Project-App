import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonatePancreaticOnePage} from '../donate-pancreatic-one/donate-pancreatic-one';
/*
  Generated class for the PancreaticAbout page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pancreatic-about',
  templateUrl: 'pancreatic-about.html'
})
export class PancreaticAboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PancreaticAboutPage');
  }

  donateBladder()
  {
    this.navCtrl.push(DonatePancreaticOnePage);
  }

}
