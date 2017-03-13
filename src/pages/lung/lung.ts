import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Slides} from 'ionic-angular';
import { ViewChild } from '@angular/core';
import {BladderAboutPage} from '../bladder-about/bladder-about';
import {Chart} from 'ng2-chartjs2';
import {LungAboutPage} from '../lung-about/lung-about';
import {LungCarcinoidsPage} from '../lung-carcinoids/lung-carcinoids';
import {LungLobectomyPage} from '../lung-lobectomy/lung-lobectomy';
import {LungNscPage} from '../lung-nsc/lung-nsc';
import {LungRfaPage} from '../lung-rfa/lung-rfa';
import {LungScPage} from '../lung-sc/lung-sc';
import {DonateLungOnePage} from '../donate-lung-one/donate-lung-one';
import {DonateLungTwoPage} from '../donate-lung-two/donate-lung-two';

/*
  Generated class for the Bladder page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/


@Component({
  selector: 'page-lung',
  templateUrl: 'lung.html'
})
export class LungPage {

@ViewChild(Slides) slides: Slides;

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

  goToType()
  {
    this.slides.slideTo(3, 600);
  }

  goToTreatment()
  {
    this.slides.slideTo(6, 600);
  }

  goToHelp()
  {
    this.slides.slideTo(8, 600);
  }

  expandAbout()
  {
    this.navCtrl.push(LungAboutPage);
  }

  expandFirstDisease()
  {
    this.navCtrl.push(LungNscPage);
  }  

  expandSecondDisease()
  {
    this.navCtrl.push(LungScPage);
  }

  expandThirdDisease()
  {
    this.navCtrl.push(LungCarcinoidsPage);
  }

  expandFirstTreatment()
  {
    this.navCtrl.push(LungLobectomyPage);
  }

  expandSecondTreatment()
  {
    this.navCtrl.push(LungRfaPage);
  }

  expandFirstDonation()
  {
    this.navCtrl.push(DonateLungTwoPage);
  }
  
  expandSecondDonation()
  {
    this.navCtrl.push(DonateLungOnePage);
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


