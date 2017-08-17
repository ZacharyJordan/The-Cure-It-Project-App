import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateThroatOnePage} from '../donate-throat-one/donate-throat-one';
/*
  Generated class for the ThroatRadiation page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-throat-radiation',
  templateUrl: 'throat-radiation.html'
})
export class ThroatRadiationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThroatRadiationPage');
  }

  donateThroat()
  {
    this.navCtrl.push(DonateThroatOnePage);
  }

}
