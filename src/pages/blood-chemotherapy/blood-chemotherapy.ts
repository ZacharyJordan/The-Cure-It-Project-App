import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateBloodTwoPage} from '../donate-blood-two/donate-blood-two';
/*
  Generated class for the BloodChemotherapy page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-blood-chemotherapy',
  templateUrl: 'blood-chemotherapy.html'
})
export class BloodChemotherapyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BloodChemotherapyPage');
  }

  donateBlood()
  {
    this.navCtrl.push(DonateBloodTwoPage);
  }

}
