import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateThroatTwoPage} from '../donate-throat-two/donate-throat-two';
/*
  Generated class for the ThroatLaryngeal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-throat-laryngeal',
  templateUrl: 'throat-laryngeal.html'
})
export class ThroatLaryngealPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThroatLaryngealPage');
  }

  donateThroat()
  {
    this.navCtrl.push(DonateThroatTwoPage);
  }

}
