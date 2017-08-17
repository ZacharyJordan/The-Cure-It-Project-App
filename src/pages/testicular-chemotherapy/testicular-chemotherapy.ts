import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateTesticularOnePage} from '../donate-testicular-one/donate-testicular-one';
/*
  Generated class for the TesticularChemotherapy page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-testicular-chemotherapy',
  templateUrl: 'testicular-chemotherapy.html'
})
export class TesticularChemotherapyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TesticularChemotherapyPage');
  }

  donateTesticular()
  {
    this.navCtrl.push(DonateTesticularOnePage);
  }

}
