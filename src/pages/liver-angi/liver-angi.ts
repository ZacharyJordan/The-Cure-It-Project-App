import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateLiverTwoPage} from '../donate-liver-two/donate-liver-two';
/*
  Generated class for the LiverAngi page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-liver-angi',
  templateUrl: 'liver-angi.html'
})
export class LiverAngiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LiverAngiPage');
  }

  donateTesticular()
  {
    this.navCtrl.push(DonateLiverTwoPage);
  }

}
