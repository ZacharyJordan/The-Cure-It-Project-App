import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LymphaticPage} from '../lymphatic/lymphatic';
import {DonateLymphaticOnePage} from '../donate-lymphatic-one/donate-lymphatic-one';


/*
  Generated class for the StoryKomi page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-story-komi',
  templateUrl: 'story-komi.html'
})
export class StoryKomiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoryKomiPage');
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
