import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateTesticularTwoPage} from '../donate-testicular-two/donate-testicular-two';
/*
  Generated class for the TesticularSelf page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-testicular-self',
  templateUrl: 'testicular-self.html'
})
export class TesticularSelfPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TesticularSelfPage');
  }

  donateThroat()
  {
    this.navCtrl.push(DonateTesticularTwoPage);
  }

}
