import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateLungOnePage} from '../donate-lung-one/donate-lung-one';
/*
  Generated class for the LungAbout page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lung-about',
  templateUrl: 'lung-about.html'
})
export class LungAboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LungAboutPage');
  }

  donateBladder()
  {
    this.navCtrl.push(DonateLungOnePage);
  }

}
