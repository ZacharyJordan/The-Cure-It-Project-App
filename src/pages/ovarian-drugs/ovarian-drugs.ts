import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateOvarianTwoPage} from '../donate-ovarian-two/donate-ovarian-two';
/*
  Generated class for the OvarianDrugs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ovarian-drugs',
  templateUrl: 'ovarian-drugs.html'
})
export class OvarianDrugsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad OvarianDrugsPage');
  }

  donateSkin()
  {
    this.navCtrl.push(DonateOvarianTwoPage);
  }

}
