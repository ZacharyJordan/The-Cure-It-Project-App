import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateBrainOnePage} from '../donate-brain-one/donate-brain-one';

/*
  Generated class for the BrainMeningiomas page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-brain-meningiomas',
  templateUrl: 'brain-meningiomas.html'
})
export class BrainMeningiomasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrainMeningiomasPage');
  }

  donateBladder()
  {
    this.navCtrl.push(DonateBrainOnePage);
  }

}
