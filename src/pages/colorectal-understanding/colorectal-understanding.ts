import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateColorectalOnePage} from '../donate-colorectal-one/donate-colorectal-one';
/*
  Generated class for the ColorectalUnderstanding page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-colorectal-understanding',
  templateUrl: 'colorectal-understanding.html'
})
export class ColorectalUnderstandingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ColorectalUnderstandingPage');
  }
  
  donateBladder()
  {
    this.navCtrl.push(DonateColorectalOnePage);
  }

}
