import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateLungTwoPage} from '../donate-lung-two/donate-lung-two';
/*
  Generated class for the LungNsc page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lung-nsc',
  templateUrl: 'lung-nsc.html'
})
export class LungNscPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LungNscPage');
  }

  donateTesticular()
  {
    this.navCtrl.push(DonateLungTwoPage);
  }

}
