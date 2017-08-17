import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateThyroidOnePage} from '../donate-thyroid-one/donate-thyroid-one';
/*
  Generated class for the ThyroidRadioactive page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-thyroid-radioactive',
  templateUrl: 'thyroid-radioactive.html'
})
export class ThyroidRadioactivePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThyroidRadioactivePage');
  }

  donateBladder()
  {
    this.navCtrl.push(DonateThyroidOnePage);
  }

}
