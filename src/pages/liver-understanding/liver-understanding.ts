import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateLiverOnePage} from '../donate-liver-one/donate-liver-one';
/*
  Generated class for the LiverUnderstanding page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-liver-understanding',
  templateUrl: 'liver-understanding.html'
})
export class LiverUnderstandingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LiverUnderstandingPage');
  }

  donateSkin()
  {
    this.navCtrl.push(DonateLiverOnePage);
  }

}
