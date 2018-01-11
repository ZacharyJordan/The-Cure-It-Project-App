import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LymphaticPage} from '../lymphatic/lymphatic';
import {DonateLymphaticOnePage} from '../donate-lymphatic-one/donate-lymphatic-one';
/*
  Generated class for the StoryLisa page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-story-lisa',
  templateUrl: 'story-lisa.html'
})
export class StoryLisaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoryLisaPage');
  }

  expandLymphatic()
  {
    this.navCtrl.push(LymphaticPage);
  }

  donateLymphatic()
  {
    this.navCtrl.push(DonateLymphaticOnePage);
  }

}
