import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateBreastTwoPage} from '../donate-breast-two/donate-breast-two';
/*
  Generated class for the BreastInvasive page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-breast-invasive',
  templateUrl: 'breast-invasive.html'
})
export class BreastInvasivePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BreastInvasivePage');
  }

  donateBladder()
  {
    this.navCtrl.push(DonateBreastTwoPage)
  }

}
