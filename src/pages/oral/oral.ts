import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Chart} from 'ng2-chartjs2';
import {OralAboutPage} from '../oral-about/oral-about';
import {OralChemotherapyPage} from '../oral-chemotherapy/oral-chemotherapy';
import {OralLifestylePage} from '../oral-lifestyle/oral-lifestyle';
import {OralSalivaryPage} from '../oral-salivary/oral-salivary';
import {OralSquamousPage} from '../oral-squamous/oral-squamous';
import {OralVerrucousPage} from '../oral-verrucous/oral-verrucous';
import {DonateOralOnePage} from '../donate-oral-one/donate-oral-one';
import {DonateOralTwoPage} from '../donate-oral-two/donate-oral-two';
import {ViewChild} from '@angular/core';
import {Slides} from 'ionic-angular';
/*
  Generated class for the Breast page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-oral',
  templateUrl: 'oral.html'
})
export class OralPage {

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
    this.slides.slideTo(6, 600);
  }

  goToHelp()
  {
    this.slides.slideTo(8, 600);
  }

  expandAbout()
  {
    this.navCtrl.push(OralAboutPage);
  }

  expandFirstDisease()
  {
    this.navCtrl.push(OralSquamousPage);
  }

  expandSecondDisease()
  {
    this.navCtrl.push(OralVerrucousPage);
  }
  
  expandThirdDisease()
  {
    this.navCtrl.push(OralSalivaryPage);
  }

  expandFirstTreatment()
  {
    this.navCtrl.push(OralChemotherapyPage);
  }

  expandSecondTreatment()
  {
    this.navCtrl.push(OralLifestylePage);
  }

  expandFirstDonation()
  {
    this.navCtrl.push(DonateOralOnePage);
  }

  expandSecondDonation()
  {
    this.navCtrl.push(DonateOralTwoPage);
  }
}
