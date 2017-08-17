import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateThroatOnePage} from '../donate-throat-one/donate-throat-one';
/*
  Generated class for the ThroatHypo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-throat-hypo',
  templateUrl: 'throat-hypo.html'
})
export class ThroatHypoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThroatHypoPage');
  }

  donateThyroid()
  {
    this.navCtrl.push(DonateThroatOnePage);
  }

}
