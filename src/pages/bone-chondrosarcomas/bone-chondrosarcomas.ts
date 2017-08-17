import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateBoneTwoPage} from '../donate-bone-two/donate-bone-two';
/*
  Generated class for the BoneChondrosarcomas page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bone-chondrosarcomas',
  templateUrl: 'bone-chondrosarcomas.html'
})
export class BoneChondrosarcomasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BoneChondrosarcomasPage');
  }

  donateBladder()
  {
    this.navCtrl.push(DonateBoneTwoPage);
  }

}
