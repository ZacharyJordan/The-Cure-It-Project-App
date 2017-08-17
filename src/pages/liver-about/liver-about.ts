import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateLiverOnePage} from '../donate-liver-one/donate-liver-one';
/*
  Generated class for the LiverAbout page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-liver-about',
  templateUrl: 'liver-about.html'
})
export class LiverAboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LiverAboutPage');
  }

  donateBladder()
  {
    this.navCtrl.push(DonateLiverOnePage);
  }

}
