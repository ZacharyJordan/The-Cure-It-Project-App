import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateEndometrialOnePage} from '../donate-endometrial-one/donate-endometrial-one';
/*
  Generated class for the Hormone page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-hormone',
  templateUrl: 'hormone.html'
})
export class HormonePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HormonePage');
  }

  donateThroat()
  {
    this.navCtrl.push(DonateEndometrialOnePage);
  }

}
