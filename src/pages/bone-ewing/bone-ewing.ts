import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateBoneOnePage} from '../donate-bone-one/donate-bone-one';

/*
  Generated class for the BoneEwing page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bone-ewing',
  templateUrl: 'bone-ewing.html'
})
export class BoneEwingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BoneEwingPage');
  }

  donateBlood()
  {
    this.navCtrl.push(DonateBoneOnePage);
  }

}
