import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {BladderPage} from '../bladder/bladder';
import {DonateBladderOnePage} from '../donate-bladder-one/donate-bladder-one';
/*
  Generated class for the BladderAbout page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bladder-about',
  templateUrl: 'bladder-about.html'
})
export class BladderAboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BladderAboutPage');
  }

  donateBladder()
  {
    this.navCtrl.push(DonateBladderOnePage);
  }

}
