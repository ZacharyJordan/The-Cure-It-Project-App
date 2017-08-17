import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateBloodOnePage} from '../donate-blood-one/donate-blood-one';

/*
  Generated class for the BloodCell page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-blood-cell',
  templateUrl: 'blood-cell.html'
})
export class BloodCellPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BloodCellPage');
  }

  donateBlood()
  {
    this.navCtrl.push(DonateBloodOnePage);
  }

}
