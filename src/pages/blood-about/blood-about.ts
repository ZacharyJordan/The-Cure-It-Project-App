import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateBloodOnePage} from '../donate-blood-one/donate-blood-one';


/*
  Generated class for the BloodAbout page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-blood-about',
  templateUrl: 'blood-about.html'
})
export class BloodAboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BloodAboutPage');
  }

  donateBladder()
  {
    this.navCtrl.push(DonateBloodOnePage);
  }

}
