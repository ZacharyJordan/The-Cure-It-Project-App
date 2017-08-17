import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateLymphaticTwoPage} from '../donate-lymphatic-two/donate-lymphatic-two';
/*
  Generated class for the LymphaticNonhod page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lymphatic-nonhod',
  templateUrl: 'lymphatic-nonhod.html'
})
export class LymphaticNonhodPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LymphaticNonhodPage');
  }

  donateTesticular()
  {
    this.navCtrl.push(DonateLymphaticTwoPage);
  } 

}
