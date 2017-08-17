import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonatePancreaticTwoPage} from '../donate-pancreatic-two/donate-pancreatic-two';
/*
  Generated class for the PancreaticExocrine page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pancreatic-exocrine',
  templateUrl: 'pancreatic-exocrine.html'
})
export class PancreaticExocrinePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PancreaticExocrinePage');
  }

  donateTesticular()
  {
    this.navCtrl.push(DonatePancreaticTwoPage);
  }

}
