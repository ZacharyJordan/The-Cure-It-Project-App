import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateOralTwoPage} from '../donate-oral-two/donate-oral-two';
/*
  Generated class for the OralSquamous page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-oral-squamous',
  templateUrl: 'oral-squamous.html'
})
export class OralSquamousPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad OralSquamousPage');
  }

  donateTesticular()
  {
    this.navCtrl.push(DonateOralTwoPage);
  }

}
