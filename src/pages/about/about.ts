import { Component } from '@angular/core';
import {InformationPage} from '../information/information';
import { NavController } from 'ionic-angular';
import {StoryChristinaPage} from '../story-christina/story-christina';
import {StoryLisaPage} from '../story-lisa/story-lisa';
import {StoryAlliePage} from '../story-allie/story-allie';
import {StoryJayPage} from '../story-jay/story-jay';
import {StoryKomiPage} from '../story-komi/story-komi';
import {StoryShobiPage} from '../story-shobi/story-shobi';
import {StoryJakePage} from '../story-jake/story-jake';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  
  expandLisa()
  {
    this.navCtrl.push(StoryLisaPage);
  }

  expandChristina()
  {
    this.navCtrl.push(StoryChristinaPage);
  }

  expandAllie()
  {
    this.navCtrl.push(StoryAlliePage);
  }

  expandJay()
  {
    this.navCtrl.push(StoryJayPage);
  }

  expandKomi()
  {
    this.navCtrl.push(StoryKomiPage);
  }

  expandShobi()
  {
    this.navCtrl.push(StoryShobiPage);
  }

  expandJake()
  {
    this.navCtrl.push(StoryJakePage);
  }

  informationOpen()
  {
    this.navCtrl.push(InformationPage);
  }

  constructor(public navCtrl: NavController) {

  }

}
