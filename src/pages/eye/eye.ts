import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Chart} from 'ng2-chartjs2';
import {EyeAboutPage} from '../eye-about/eye-about';
import {EyeLymphomaPage} from '../eye-lymphoma/eye-lymphoma';
import {EyeMelanomaPage} from '../eye-melanoma/eye-melanoma';
import {EyeOcularPage} from '../eye-ocular/eye-ocular';
import {EyeRadiationPage} from '../eye-radiation/eye-radiation';
import {EyeRetinoPage} from '../eye-retino/eye-retino';
import {DonateEyeOnePage} from '../donate-eye-one/donate-eye-one';
import {DonateEyeTwoPage} from '../donate-eye-two/donate-eye-two';
import {Slides} from 'ionic-angular';
import { ViewChild } from '@angular/core';
/*
import {EndometrialCarcinomaPage} from '../endometrial-carcinoma/endometrial-carcinoma';
import {EndometrialUterinePage} from '../endometrial-uterine/endometrial-uterine';
import {EndometrialAboutPage} from '../endometrial-about/endometrial-about';
import {HormonePage} from '../hormone/hormone';
import {EndometrialHysterPage} from '../endometrial-hyster/endometrial-hyster';
import {DonateEndometrialOnePage} from '../donate-endometrial-one/donate-endometrial-one';
import {DonateEndometrialTwoPage} from '../donate-endometrial-two/donate-endometrial-two';
*/
/*
  Generated class for the Breast page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-eye',
  templateUrl: 'eye.html'
})

export class EyePage {
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BreastPage');
  }

  expandAbout()
  {
    this.navCtrl.push(EyeAboutPage);
  }

  expandFirstDisease()
  {
    this.navCtrl.push(EyeRetinoPage);
  }

  expandSecondDisease()
  {
    this.navCtrl.push(EyeMelanomaPage);
  }

  expandThirdDisease()
  {
    this.navCtrl.push(EyeLymphomaPage);
  }

  expandFirstTreatment()
  {
    this.navCtrl.push(EyeRadiationPage);
  }

  expandSecondTreatment()
  {
    this.navCtrl.push(EyeOcularPage);
  }

  expandFirstDonation()
  {
    this.navCtrl.push(DonateEyeOnePage);
  }

  expandSecondDonation()
  {
    this.navCtrl.push(DonateEyeTwoPage);
  }

}
