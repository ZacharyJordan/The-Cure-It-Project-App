import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Chart} from 'ng2-chartjs2';
import {LiverAboutPage} from '../liver-about/liver-about';
import {LiverAngiPage} from '../liver-angi/liver-angi';
import {LiverBilePage} from '../liver-bile/liver-bile';
import {LiverHeptaPage} from '../liver-hepta/liver-hepta';
import {LiverSurgeryPage} from '../liver-surgery/liver-surgery';
import {LiverUnderstandingPage} from '../liver-understanding/liver-understanding';
import {DonateLiverOnePage} from '../donate-liver-one/donate-liver-one';
import {DonateLiverTwoPage} from '../donate-liver-two/donate-liver-two';
import {Slides} from 'ionic-angular';
import { ViewChild } from '@angular/core';

/*
  Generated class for the Breast page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-liver',
  templateUrl: 'liver.html'
})
export class LiverPage {

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
    this.navCtrl.push(LiverAboutPage);
  }

  expandFirstDisease()
  {
    this.navCtrl.push(LiverHeptaPage);
  }

  expandSecondDisease()
  {
    this.navCtrl.push(LiverBilePage);
  }
  
  expandThirdDisease()
  {
    this.navCtrl.push(LiverAngiPage);
  }

  expandFirstTreatment()
  {
    this.navCtrl.push(LiverUnderstandingPage);
  }

  expandSecondTreatment()
  {
    this.navCtrl.push(LiverSurgeryPage);
  }

  expandFirstDonation()
  {
    this.navCtrl.push(DonateLiverOnePage);
  }

  expandSecondDonation()
  {
    this.navCtrl.push(DonateLiverTwoPage);
  }
  
}
