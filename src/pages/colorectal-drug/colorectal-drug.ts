import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateColorectalTwoPage} from '../donate-colorectal-two/donate-colorectal-two';
/*
  Generated class for the ColorectalDrug page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-colorectal-drug',
  templateUrl: 'colorectal-drug.html'
})
export class ColorectalDrugPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ColorectalDrugPage');
  }

  donateBladder()
  {
    this.navCtrl.push(DonateColorectalTwoPage);
  }

}
