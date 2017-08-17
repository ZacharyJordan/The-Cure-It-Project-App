import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateBladderTwoPage} from '../donate-bladder-two/donate-bladder-two';
/*
  Generated class for the BladderIntravesical page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bladder-intravesical',
  templateUrl: 'bladder-intravesical.html'
})
export class BladderIntravesicalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BladderIntravesicalPage');
  }

  donateBladder()
  {
    this.navCtrl.push(DonateBladderTwoPage);
  }

}
