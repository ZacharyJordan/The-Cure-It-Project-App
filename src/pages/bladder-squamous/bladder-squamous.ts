import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateBladderTwoPage} from '../donate-bladder-two/donate-bladder-two';
/*
  Generated class for the BladderSquamous page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bladder-squamous',
  templateUrl: 'bladder-squamous.html'
})
export class BladderSquamousPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BladderSquamousPage');
  }

  donateBladder()
  {
    this.navCtrl.push(DonateBladderTwoPage);
  }
}
