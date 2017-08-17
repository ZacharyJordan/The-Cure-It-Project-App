import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateLymphaticOnePage} from '../donate-lymphatic-one/donate-lymphatic-one';
/*
  Generated class for the LymphaticChemotherapy page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lymphatic-chemotherapy',
  templateUrl: 'lymphatic-chemotherapy.html'
})
export class LymphaticChemotherapyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LymphaticChemotherapyPage');
  }

  donateThroat()
  {
    this.navCtrl.push(DonateLymphaticOnePage);
  }

}
