import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Chart} from 'ng2-chartjs2';
import {ColorectalAboutPage} from '../colorectal-about/colorectal-about';
import {ColorectalAdenocarcinomasPage} from '../colorectal-adenocarcinomas/colorectal-adenocarcinomas';
import {ColorectalSarcomasPage} from '../colorectal-sarcomas/colorectal-sarcomas';
import {ColorectalCarcinoidsPage} from '../colorectal-carcinoids/colorectal-carcinoids';
import {ColorectalUnderstandingPage} from '../colorectal-understanding/colorectal-understanding';
import {ColorectalDrugPage} from '../colorectal-drug/colorectal-drug';
import {Slides} from 'ionic-angular';
import { ViewChild } from '@angular/core';
import {DonateColorectalOnePage} from '../donate-colorectal-one/donate-colorectal-one';
import {DonateColorectalTwoPage} from '../donate-colorectal-two/donate-colorectal-two';
/*
  Generated class for the Colorectal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-colorectal',
  templateUrl: 'colorectal.html'
})
export class ColorectalPage {

  @ViewChild(Slides) slides: Slides;

labels: string[] = ["Adenocarcinomas ", "Other Forms"];
  defaultFontColor:'#fff';
  

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
    this.navCtrl.push(ColorectalAboutPage);
  }

  expandFirstDisease()
  {
    this.navCtrl.push(ColorectalAdenocarcinomasPage);
  }

  expandSecondDisease()
  {
    this.navCtrl.push(ColorectalSarcomasPage);
  }

  expandThirdDisease()
  {
    this.navCtrl.push(ColorectalCarcinoidsPage);
  }

  expandFirstTreatment()
  {
    this.navCtrl.push(ColorectalUnderstandingPage);
  }

  expandSecondTreatment()
  {
    this.navCtrl.push(ColorectalDrugPage);
  }

  expandFirstDonation()
  {
    this.navCtrl.push(DonateColorectalOnePage);
  }

  expandSecondDonation()
  {
    this.navCtrl.push(DonateColorectalTwoPage);
  }

  data: Chart.Dataset[] = [
    {
      label: 'Bladder Cancer',
      
      data: [95,5],
      backgroundColor: [
        '#ff6384',
        '#36a2eb'
        
  
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
    console.log('ionViewDidLoad ColorectalPage');
  }

}
