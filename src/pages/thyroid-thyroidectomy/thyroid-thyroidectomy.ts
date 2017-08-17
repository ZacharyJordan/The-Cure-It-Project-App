import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateThyroidTwoPage} from '../donate-thyroid-two/donate-thyroid-two';
/*
  Generated class for the ThyroidThyroidectomy page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-thyroid-thyroidectomy',
  templateUrl: 'thyroid-thyroidectomy.html'
})
export class ThyroidThyroidectomyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThyroidThyroidectomyPage');
  }
  
  donateBladder()
  {
    this.navCtrl.push(DonateThyroidTwoPage);
  }

}
