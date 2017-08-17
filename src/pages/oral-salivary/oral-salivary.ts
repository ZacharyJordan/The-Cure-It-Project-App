import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateOralTwoPage} from '../donate-oral-two/donate-oral-two';
/*
  Generated class for the OralSalivary page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-oral-salivary',
  templateUrl: 'oral-salivary.html'
})
export class OralSalivaryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad OralSalivaryPage');
  }

  donateTesticular()
  {
    this.navCtrl.push(DonateOralTwoPage);
  }

}
