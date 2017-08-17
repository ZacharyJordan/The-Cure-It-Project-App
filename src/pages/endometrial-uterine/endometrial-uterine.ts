import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateEndometrialOnePage} from '../donate-endometrial-one/donate-endometrial-one';
/*
  Generated class for the EndometrialUterine page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-endometrial-uterine',
  templateUrl: 'endometrial-uterine.html'
})
export class EndometrialUterinePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EndometrialUterinePage');
  }

  donateTesticular()
  {
    this.navCtrl.push(DonateEndometrialOnePage);
  }

}
