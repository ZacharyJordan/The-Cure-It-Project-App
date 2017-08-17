import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateLungTwoPage} from '../donate-lung-two/donate-lung-two';
/*
  Generated class for the LungRfa page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lung-rfa',
  templateUrl: 'lung-rfa.html'
})
export class LungRfaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LungRfaPage');
  }

  donateSkin()
  {
    this.navCtrl.push(DonateLungTwoPage);
  }

}
