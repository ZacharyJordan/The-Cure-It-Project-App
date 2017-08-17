import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonatePancreaticOnePage} from '../donate-pancreatic-one/donate-pancreatic-one';
/*
  Generated class for the PancreaticEndocrine page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pancreatic-endocrine',
  templateUrl: 'pancreatic-endocrine.html'
})
export class PancreaticEndocrinePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PancreaticEndocrinePage');
  }

  donateTesticular()
  {
    this.navCtrl.push(DonatePancreaticOnePage);
  }

}
