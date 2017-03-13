import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Chart} from 'ng2-chartjs2';
import {LymphaticAboutPage} from '../lymphatic-about/lymphatic-about';
import {LymphaticChemotherapyPage} from '../lymphatic-chemotherapy/lymphatic-chemotherapy';
import {LymphaticHodPage} from '../lymphatic-hod/lymphatic-hod';
import {LymphaticImmunotherapyPage} from '../lymphatic-immunotherapy/lymphatic-immunotherapy';
import {LymphaticNonhodPage} from '../lymphatic-nonhod/lymphatic-nonhod';
import {DonateLymphaticOnePage} from '../donate-lymphatic-one/donate-lymphatic-one';
import {DonateLymphaticTwoPage} from '../donate-lymphatic-two/donate-lymphatic-two';
import {Slides} from 'ionic-angular';
import { ViewChild } from '@angular/core';

/*
  Generated class for the Breast page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lymphatic',
  templateUrl: 'lymphatic.html'
})
export class LymphaticPage {

@ViewChild(Slides) slides: Slides;
labels: string[] = ["Less than 40", "Less than 50", "Between 50 and 60", "Above 65"];
  defaultFontColor:'#fff';
  
  data: Chart.Dataset[] = [
    {
      label: 'Bladder Cancer',
      
      data: [0.5,22,35.5,42],
      backgroundColor: [
        '#36a2eb',
        '#ff6384',
        "#ffc970",
        "#5ad3d2"
      ],
      borderColor: [
        '#ECF0F1',
        '#ECF0F1',
        '#ECF0F1',
        '#ECF0F1'
      ],
      borderWidth: 0
    }
  ];

  mySlideOptions = {
    direction: "vertical",
    pager:"true"
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BreastPage');
  }

  goToType()
  {
    this.slides.slideTo(3, 600);
  }

  goToTreatment()
  {
    this.slides.slideTo(5, 600);
  }

  goToHelp()
  {
    this.slides.slideTo(7, 600);
  }

  expandAbout()
  {
    this.navCtrl.push(LymphaticAboutPage);
  }

  expandFirstDisease()
  {
    this.navCtrl.push(LymphaticNonhodPage);
  }

  expandSecondDisease()
  {
    this.navCtrl.push(LymphaticHodPage);
  }

  expandFirstTreatment()
  {
    this.navCtrl.push(LymphaticImmunotherapyPage);
  }

  expandSecondTreatment()
  {
    this.navCtrl.push(LymphaticChemotherapyPage);
  }

  expandFirstDonation()
  {
    this.navCtrl.push(DonateLymphaticOnePage);
  }

  expandSecondDonation()
  {
    this.navCtrl.push(DonateLymphaticTwoPage);
  }

}
