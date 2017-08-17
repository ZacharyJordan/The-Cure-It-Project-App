import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateBrainTwoPage} from '../donate-brain-two/donate-brain-two';

/*
  Generated class for the BrainPrimary page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-brain-primary',
  templateUrl: 'brain-primary.html'
})
export class BrainPrimaryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrainPrimaryPage');
  }

  donateBladder()
  {
    this.navCtrl.push(DonateBrainTwoPage);
  }

}
