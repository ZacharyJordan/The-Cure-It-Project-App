import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Chart} from 'ng2-chartjs2';
import {BloodLeukemiaPage} from '../blood-leukemia/blood-leukemia';
import {BloodMyelomaPage} from '../blood-myeloma/blood-myeloma';
import {BloodLymphomaPage} from '../blood-lymphoma/blood-lymphoma';
import {BloodCellPage} from '../blood-cell/blood-cell';
import {BloodChemotherapyPage} from '../blood-chemotherapy/blood-chemotherapy';
import {BloodAboutPage} from '../blood-about/blood-about';

/*
  Generated class for the Blood page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-blood',
  templateUrl: 'blood.html'
})
export class BloodPage {

 labels: string[] = ["Leukemia", "Myeloma", "Lymphoma"];
  defaultFontColor:'#fff';
  
  data: Chart.Dataset[] = [
    {
      label: 'Blood Cancer',
      
      data: [33, 16, 51],
      backgroundColor: [
        '#36a2eb',
        '#ff6384',
        '#ffc970'
      ],
      borderColor: [
        '#ECF0F1',
        '#ECF0F1',
        '#ECF0F1'
      ],
      borderWidth: 0
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BloodPage');
  }

  expandAbout()
  {
    this.navCtrl.push(BloodAboutPage);
  }

  expandFirstDisease()
  {
    this.navCtrl.push(BloodLeukemiaPage);
  }

  expandSecondDisease()
  {
    this.navCtrl.push(BloodMyelomaPage);
  }

  expandThirdDisease()
  {
    this.navCtrl.push(BloodLymphomaPage);
  }

  expandFirstTreatment()
  {
    this.navCtrl.push(BloodCellPage);
  }

  expandSecondTreatment()
  {
    this.navCtrl.push(BloodChemotherapyPage);
  }

  mySlideOptions = {
    direction: "vertical",
    pager:"true"
  };

}
