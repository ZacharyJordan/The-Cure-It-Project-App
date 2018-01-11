import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {BonePage} from '../bone/bone';
import {DonateBoneOnePage} from '../donate-bone-one/donate-bone-one';
/*
  Generated class for the StoryShobi page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-story-shobi',
  templateUrl: 'story-shobi.html'
})
export class StoryShobiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoryShobiPage');
  }

  expandBone()
  {
    this.navCtrl.push(BonePage);
  }

  donateBone()
  {
    this.navCtrl.push(DonateBoneOnePage);
  }

}
