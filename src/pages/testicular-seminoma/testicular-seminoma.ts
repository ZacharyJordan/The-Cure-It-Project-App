import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateTesticularTwoPage} from '../donate-testicular-two/donate-testicular-two';
/*
  Generated class for the TesticularSeminoma page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-testicular-seminoma',
  templateUrl: 'testicular-seminoma.html'
})
export class TesticularSeminomaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TesticularSeminomaPage');
  }

  donateTesticular()
  {
    this.navCtrl.push(DonateTesticularTwoPage);
  }

}
