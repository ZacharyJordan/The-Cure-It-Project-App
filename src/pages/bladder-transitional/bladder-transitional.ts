import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateBladderOnePage} from '../donate-bladder-one/donate-bladder-one';

/*
  Generated class for the BladderTransitional page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bladder-transitional',
  templateUrl: 'bladder-transitional.html'
})
export class BladderTransitionalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BladderTransitionalPage');
  }
  
  donateBladder()
  {
    this.navCtrl.push(DonateBladderOnePage);
  }

}
