import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateTesticularOnePage} from '../donate-testicular-one/donate-testicular-one';
/*
  Generated class for the TesticularNonseminoma page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-testicular-nonseminoma',
  templateUrl: 'testicular-nonseminoma.html'
})
export class TesticularNonseminomaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TesticularNonseminomaPage');
  }

  donateThyroid()
  {
    this.navCtrl.push(DonateTesticularOnePage);
  }

}
