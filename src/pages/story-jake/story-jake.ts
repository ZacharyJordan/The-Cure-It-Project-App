import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {TesticularPage} from '../testicular/testicular';
import {DonateTesticularOnePage} from '../donate-testicular-one/donate-testicular-one';


/*
  Generated class for the StoryJake page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-story-jake',
  templateUrl: 'story-jake.html'
})
export class StoryJakePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoryJakePage');
  }

  expandTesticular()
  {
    this.navCtrl.push(TesticularPage);
  }

  donateTesticular()
  {
    this.navCtrl.push(DonateTesticularOnePage);
  }

}
