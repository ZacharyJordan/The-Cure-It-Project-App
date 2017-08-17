import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateBoneTwoPage} from '../donate-bone-two/donate-bone-two';
/*
  Generated class for the BoneOsteosarcomas page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bone-osteosarcomas',
  templateUrl: 'bone-osteosarcomas.html'
})
export class BoneOsteosarcomasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BoneOsteosarcomasPage');
  }

  donateBlood()
  {
    this.navCtrl.push(DonateBoneTwoPage);
  }
}
