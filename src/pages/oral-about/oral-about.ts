import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateOralOnePage} from '../donate-oral-one/donate-oral-one';
/*
  Generated class for the OralAbout page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-oral-about',
  templateUrl: 'oral-about.html'
})
export class OralAboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad OralAboutPage');
  }

  donateBladder()
  {
    this.navCtrl.push(DonateOralOnePage);
  }

}
