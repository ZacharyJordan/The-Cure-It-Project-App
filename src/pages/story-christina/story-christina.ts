import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LungPage} from '../lung/lung';
import {DonateLungOnePage} from '../donate-lung-one/donate-lung-one';
/*
  Generated class for the StoryChristina page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-story-christina',
  templateUrl: 'story-christina.html'
})
export class StoryChristinaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoryChristinaPage');
  }

  expandLung()
  {
    this.navCtrl.push(LungPage);
  }

  donateLung()
  {
    this.navCtrl.push(DonateLungOnePage);
  }

}
