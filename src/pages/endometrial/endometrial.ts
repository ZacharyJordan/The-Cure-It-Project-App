import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Chart} from 'ng2-chartjs2';
import {EndometrialCarcinomaPage} from '../endometrial-carcinoma/endometrial-carcinoma';
import {EndometrialUterinePage} from '../endometrial-uterine/endometrial-uterine';
import {EndometrialAboutPage} from '../endometrial-about/endometrial-about';
import {HormonePage} from '../hormone/hormone';
import {EndometrialHysterPage} from '../endometrial-hyster/endometrial-hyster';
import {DonateEndometrialOnePage} from '../donate-endometrial-one/donate-endometrial-one';
import {DonateEndometrialTwoPage} from '../donate-endometrial-two/donate-endometrial-two';
import {Slides} from 'ionic-angular';
import { ViewChild } from '@angular/core';



/*
  Generated class for the Breast page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-endometrial',
  templateUrl: 'endometrial.html'
})
export class EndometrialPage {
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
    this.navCtrl.push(EndometrialAboutPage);
  }

  expandFirstDisease()
  {
    this.navCtrl.push(EndometrialCarcinomaPage)
  }

  expandSecondDisease()
  {
    this.navCtrl.push(EndometrialUterinePage);
  }

  expandFirstTreatment()
  {
    this.navCtrl.push(EndometrialHysterPage);
  }
  
  expandSecondTreatment()
  {
    this.navCtrl.push(HormonePage);
  }

  expandFirstDonation()
  {
     this.navCtrl.push(DonateEndometrialOnePage);
  }

  expandSecondDonation()
  {
     this.navCtrl.push(DonateEndometrialTwoPage);
  }

}
