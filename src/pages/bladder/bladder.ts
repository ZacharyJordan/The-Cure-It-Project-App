import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Slides} from 'ionic-angular';
import { ViewChild } from '@angular/core';
import {BladderAboutPage} from '../bladder-about/bladder-about';
import {Chart} from 'ng2-chartjs2';
/*
  Generated class for the Bladder page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/


@Component({
  selector: 'page-bladder',
  templateUrl: 'bladder.html'
})
export class BladderPage {

  labels: string[] = ["Females", "Males"];
  defaultFontColor:'#fff';
  
  data: Chart.Dataset[] = [
    {
      label: 'Bladder Cancer',
      
      data: [24, 76],
      backgroundColor: [
        '#36a2eb',
        '#ff6384'
      ],
      borderColor: [
        '#ECF0F1',
        '#ECF0F1'
      ],
      borderWidth: 0
    }
  ];
  @ViewChild('mySlider') slider: Slides;

  aboutDisease()
  {
    console.log("t");
    this.slider.slideTo(1);
  }

  expandAbout()
  {
    this.navCtrl.push(BladderAboutPage);
  }

   mySlideOptions = {
    direction: "vertical",
    pager:"true"
  };

    constructor(public navCtrl: NavController, public navParams: NavParams) {}

    ionViewDidLoad() {
      console.log('ionViewDidLoad BladderPage');
    }

}


