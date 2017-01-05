import { Component } from '@angular/core';
import {InformationPage} from '../information/information';
import { NavController } from 'ionic-angular';
import {StoryChristinaPage} from '../story-christina/story-christina';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  
  expandChristina()
  {
    this.navCtrl.push(StoryChristinaPage);
  }

  informationOpen()
  {
    this.navCtrl.push(InformationPage);
  }

  constructor(public navCtrl: NavController) {

  }

}
