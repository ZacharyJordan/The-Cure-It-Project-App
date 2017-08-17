import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateLymphaticOnePage} from '../donate-lymphatic-one/donate-lymphatic-one';
/*
  Generated class for the LymphaticAbout page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lymphatic-about',
  templateUrl: 'lymphatic-about.html'
})
export class LymphaticAboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LymphaticAboutPage');
  }

  donateBladder()
  {
    this.navCtrl.push(DonateLymphaticOnePage);
  }

}
