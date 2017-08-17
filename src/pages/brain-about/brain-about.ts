import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateBrainOnePage} from '../donate-brain-one/donate-brain-one';
/*
  Generated class for the BrainAbout page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-brain-about',
  templateUrl: 'brain-about.html'
})
export class BrainAboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrainAboutPage');
  }

  donateBladder()
  {
    this.navCtrl.push(DonateBrainOnePage);
  }

}
