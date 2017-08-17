import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateLiverTwoPage} from '../donate-liver-two/donate-liver-two';
/*
  Generated class for the LiverSurgery page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-liver-surgery',
  templateUrl: 'liver-surgery.html'
})
export class LiverSurgeryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LiverSurgeryPage');
  }

  donateThroat()
  {
    this.navCtrl.push(DonateLiverTwoPage);
  }

}
