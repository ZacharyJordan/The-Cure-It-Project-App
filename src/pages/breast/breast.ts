import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Chart} from 'ng2-chartjs2';
import {BreastAboutPage} from '../breast-about/breast-about';
import {BreastInvasivePage} from '../breast-invasive/breast-invasive';
import {BreastRecurrentPage} from '../breast-recurrent/breast-recurrent';
import {BreastMetastaticPage} from '../breast-metastatic/breast-metastatic';
import {BreastProteinPage} from '../breast-protein/breast-protein';
import {BreastLifestylePage} from '../breast-lifestyle/breast-lifestyle';
import {Slides} from 'ionic-angular';
import { ViewChild } from '@angular/core';
import {DonateBreastOnePage} from '../donate-breast-one/donate-breast-one';
import {DonateBreastTwoPage} from '../donate-breast-two/donate-breast-two';


/*
  Generated class for the Breast page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-breast',
  templateUrl: 'breast.html'
})
export class BreastPage {
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
    this.navCtrl.push(BreastAboutPage);
  }

  expandFirstDisease()
  {
    this.navCtrl.push(BreastInvasivePage);
  }

  expandSecondDisease()
  {
    this.navCtrl.push(BreastRecurrentPage);
  }

  expandThirdDisease()
  {
    this.navCtrl.push(BreastMetastaticPage);
  }

  expandFirstTreatment()
  {
    this.navCtrl.push(BreastLifestylePage);
  }

  expandSecondTreatment()
  {
    this.navCtrl.push(BreastProteinPage);
  }

  expandFirstDonation()
  {
    this.navCtrl.push(DonateBreastOnePage);
  }

  expandSecondDonation()
  {
    this.navCtrl.push(DonateBreastTwoPage);
  }
}
