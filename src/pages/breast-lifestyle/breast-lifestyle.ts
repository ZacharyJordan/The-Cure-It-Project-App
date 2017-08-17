import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateBreastOnePage} from '../donate-breast-one/donate-breast-one';
/*
  Generated class for the BreastLifestyle page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-breast-lifestyle',
  templateUrl: 'breast-lifestyle.html'
})
export class BreastLifestylePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BreastLifestylePage');
  }

  donateBladder()
  {
    this.navCtrl.push(DonateBreastOnePage);
  }

}
