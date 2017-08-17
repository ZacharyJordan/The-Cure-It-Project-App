import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonatePancreaticOnePage} from '../donate-pancreatic-one/donate-pancreatic-one';
/*
  Generated class for the PancreaticExternal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pancreatic-external',
  templateUrl: 'pancreatic-external.html'
})
export class PancreaticExternalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PancreaticExternalPage');
  }

  donateThroat()
  {
    this.navCtrl.push(DonatePancreaticOnePage);
  }

}
