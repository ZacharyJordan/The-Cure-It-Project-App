import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateEndometrialTwoPage} from '../donate-endometrial-two/donate-endometrial-two';
/*
  Generated class for the EndometrialHyster page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-endometrial-hyster',
  templateUrl: 'endometrial-hyster.html'
})
export class EndometrialHysterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EndometrialHysterPage');
  }

  donateSkin()
  {
    this.navCtrl.push(DonateEndometrialTwoPage);
  }

}
