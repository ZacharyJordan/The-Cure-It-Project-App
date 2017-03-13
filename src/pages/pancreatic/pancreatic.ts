import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Chart} from 'ng2-chartjs2';
import {PancreaticAboutPage} from '../pancreatic-about/pancreatic-about';
import {PancreaticEndocrinePage} from '../pancreatic-endocrine/pancreatic-endocrine';
import {PancreaticExocrinePage} from '../pancreatic-exocrine/pancreatic-exocrine';
import {PancreaticExternalPage} from '../pancreatic-external/pancreatic-external';
import {PancreaticPallativePage} from '../pancreatic-pallative/pancreatic-pallative';
import {DonatePancreaticOnePage} from '../donate-pancreatic-one/donate-pancreatic-one';
import {DonatePancreaticTwoPage} from '../donate-pancreatic-two/donate-pancreatic-two';
import {ViewChild} from '@angular/core';
import {Slides} from 'ionic-angular';
/*
  Generated class for the Breast page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pancreatic',
  templateUrl: 'pancreatic.html'
})
export class PancreaticPage {

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
    this.navCtrl.push(PancreaticAboutPage);
  }

  expandFirstDisease()
  {
    this.navCtrl.push(PancreaticExocrinePage);
  }

  expandSecondDisease()
  {
    this.navCtrl.push(PancreaticEndocrinePage);
  }

  expandFirstTreatment()
  {
    this.navCtrl.push(PancreaticPallativePage);
  }

  expandSecondTreatment()
  {
    this.navCtrl.push(PancreaticExternalPage);
  }

  expandFirstDonation()
  {
    this.navCtrl.push(DonatePancreaticOnePage);
  }

  expandSecondDonation()
  {
    this.navCtrl.push(DonatePancreaticTwoPage);
  }
}
