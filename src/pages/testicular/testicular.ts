import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Chart} from 'ng2-chartjs2';
import {ViewChild} from '@angular/core';
import {Slides} from 'ionic-angular';
import {TesticularAboutPage} from '../testicular-about/testicular-about';
import {TesticularChemotherapyPage} from '../testicular-chemotherapy/testicular-chemotherapy';
import {TesticularNonseminomaPage} from '../testicular-nonseminoma/testicular-nonseminoma';
import {TesticularSeminomaPage} from '../testicular-seminoma/testicular-seminoma';
import {TesticularSelfPage} from '../testicular-self/testicular-self';
import {DonateTesticularOnePage} from '../donate-testicular-one/donate-testicular-one';
import {DonateTesticularTwoPage} from '../donate-testicular-two/donate-testicular-two';


/*
  Generated class for the Breast page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-testicular',
  templateUrl: 'testicular.html'
})
export class TesticularPage {

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
    this.navCtrl.push(TesticularAboutPage);
  }

  expandFirstDisease()
  {
    this.navCtrl.push(TesticularSeminomaPage);
  }

  expandSecondDisease()
  {
    this.navCtrl.push(TesticularNonseminomaPage);
  }

  expandFirstTreatment()
  {
    this.navCtrl.push(TesticularSelfPage);
  }

  expandSecondTreatment()
  {
    this.navCtrl.push(TesticularChemotherapyPage);
  }

  expandFirstDonation()
  {
    this.navCtrl.push(DonateTesticularOnePage);
  }

  expandSecondDonation()
  {
    this.navCtrl.push(DonateTesticularTwoPage);
  }

  
}
