import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Chart} from 'ng2-chartjs2';
import {OvarianAboutPage} from '../ovarian-about/ovarian-about';
import {OvarianCetPage} from '../ovarian-cet/ovarian-cet';
import {OvariamStromalPage} from '../ovariam-stromal/ovariam-stromal';
import {OvarianGermPage} from '../ovarian-germ/ovarian-germ';
import {OvarianUnderstandingPage} from '../ovarian-understanding/ovarian-understanding';
import {OvarianDrugsPage} from '../ovarian-drugs/ovarian-drugs';
import {ViewChild} from '@angular/core';
import {Slides} from 'ionic-angular';
import {DonateOvarianOnePage} from '../donate-ovarian-one/donate-ovarian-one';
import {DonateOvarianTwoPage} from '../donate-ovarian-two/donate-ovarian-two';

/*
  Generated class for the Breast page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ovarian',
  templateUrl: 'ovarian.html'
})
export class OvarianPage {

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
    this.navCtrl.push(OvarianAboutPage);
  }

  expandFirstDisease()
  {
    this.navCtrl.push(OvarianCetPage);
  }

  expandSecondDisease()
  {
    this.navCtrl.push(OvarianGermPage);
  }
  
  expandThirdDisease()
  {
    this.navCtrl.push(OvariamStromalPage);
  }

  expandFirstTreatment()
  {
    this.navCtrl.push(OvariamStromalPage);
  }

  expandSecondTreatment()
  {
    this.navCtrl.push(OvariamStromalPage);
  }

  expandFirstDonation()
  {
    this.navCtrl.push(DonateOvarianOnePage);
  }

  expandSecondDonation()
  {
    this.navCtrl.push(DonateOvarianTwoPage);
  }
}
