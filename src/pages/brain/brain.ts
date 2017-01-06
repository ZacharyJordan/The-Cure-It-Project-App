import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Chart} from 'ng2-chartjs2';
import {BrainAboutPage} from '../brain-about/brain-about';
import {BrainPrimaryPage} from '../brain-primary/brain-primary';
import {BrainMeningiomasPage} from '../brain-meningiomas/brain-meningiomas';
import {BrainGlioblastomasPage} from '../brain-glioblastomas/brain-glioblastomas';
import {BrainLasersPage} from '../brain-lasers/brain-lasers';
import {BrainVirusesPage} from '../brain-viruses/brain-viruses';


/*
  Generated class for the Brain page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-brain',
  templateUrl: 'brain.html'
})

export class BrainPage {

labels: string[] = ["5 year Survivors", "5 Year Fatalities"];
  defaultFontColor:'#fff';
  
  data: Chart.Dataset[] = [
    {
      label: 'Bladder Cancer',
      
      data: [40.1, 59.9],
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
    console.log('ionViewDidLoad BrainPage');
  }

  expandAbout()
  {
    this.navCtrl.push(BrainAboutPage);
  }

  expandFirstDisease()
  {
    this.navCtrl.push(BrainPrimaryPage);
  }

  expandSecondDisease()
  {
    this.navCtrl.push(BrainMeningiomasPage);
  }

  expandThirdDisease()
  {
    this.navCtrl.push(BrainGlioblastomasPage);
  }

  expandFirstTreatment()
  {
    this.navCtrl.push(BrainVirusesPage);
  }

  expandSecondTreatment()
  {
    this.navCtrl.push(BrainLasersPage);
  }

}
