import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LymphaticPage} from '../lymphatic/lymphatic';
import {DonateLymphaticOnePage} from '../donate-lymphatic-one/donate-lymphatic-one';

/*
  Generated class for the StoryAllie page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-story-allie',
  templateUrl: 'story-allie.html'
})
export class StoryAlliePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoryAlliePage');
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
