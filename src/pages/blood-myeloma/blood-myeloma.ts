import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateBloodOnePage} from '../donate-blood-one/donate-blood-one';

/*
  Generated class for the BloodMyeloma page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-blood-myeloma',
  templateUrl: 'blood-myeloma.html'
})
export class BloodMyelomaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BloodMyelomaPage');
  }

  donateBlood()
  {
    this.navCtrl.push(DonateBloodOnePage);
  }

}
