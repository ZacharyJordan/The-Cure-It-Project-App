import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateSkinTwoPage} from '../donate-skin-two/donate-skin-two';
/*
  Generated class for the SkinSquamous page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-skin-squamous',
  templateUrl: 'skin-squamous.html'
})
export class SkinSquamousPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkinSquamousPage');
  }

  donateTesticular()
  {
    this.navCtrl.push(DonateSkinTwoPage);
  }

}
