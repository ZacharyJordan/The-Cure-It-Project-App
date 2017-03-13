import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {BladderPage} from '../pages/bladder/bladder';
import {AccountCreationPage} from '../pages/account-creation/account-creation';
import {BladderAboutPage} from '../pages/bladder-about/bladder-about';
import {ChartModule} from 'ng2-chartjs2';
import {BladderPhotodynamicPage} from '../pages/bladder-photodynamic/bladder-photodynamic';
import {BladderIntravesicalPage} from '../pages/bladder-intravesical/bladder-intravesical';
import {BladderTransitionalPage} from '../pages/bladder-transitional/bladder-transitional';
import {BladderSquamousPage} from '../pages/bladder-squamous/bladder-squamous';
import {BloodPage} from '../pages/blood/blood';
import {BloodLeukemiaPage} from '../pages/blood-leukemia/blood-leukemia';
import {BloodMyelomaPage} from '../pages/blood-myeloma/blood-myeloma';
import {BloodLymphomaPage} from '../pages/blood-lymphoma/blood-lymphoma';
import {BloodCellPage} from '../pages/blood-cell/blood-cell';
import {BloodChemotherapyPage} from '../pages/blood-chemotherapy/blood-chemotherapy';
import {BonePage} from '../pages/bone/bone';
import {BloodAboutPage} from '../pages/blood-about/blood-about';
import {BoneAboutPage} from '../pages/bone-about/bone-about';
import {BoneOsteosarcomasPage} from '../pages/bone-osteosarcomas/bone-osteosarcomas';
import {BoneEwingPage} from '../pages/bone-ewing/bone-ewing';
import {BoneChondrosarcomasPage} from '../pages/bone-chondrosarcomas/bone-chondrosarcomas';
import {BoneProtonPage} from '../pages/bone-proton/bone-proton';
import {BoneMyeloablativePage} from '../pages/bone-myeloablative/bone-myeloablative';
import {BrainPage} from '../pages/brain/brain';
import {BrainAboutPage} from '../pages/brain-about/brain-about';
import {BrainPrimaryPage} from '../pages/brain-primary/brain-primary';
import {BrainMeningiomasPage} from '../pages/brain-meningiomas/brain-meningiomas';
import {BrainGlioblastomasPage} from '../pages/brain-glioblastomas/brain-glioblastomas';
import {BrainVirusesPage} from '../pages/brain-viruses/brain-viruses';
import {BrainLasersPage} from '../pages/brain-lasers/brain-lasers';
import {BreastPage} from '../pages/breast/breast';
import {BreastAboutPage} from '../pages/breast-about/breast-about';
import {BreastInvasivePage} from '../pages/breast-invasive/breast-invasive';
import {BreastRecurrentPage} from '../pages/breast-recurrent/breast-recurrent';
import {BreastMetastaticPage} from '../pages/breast-metastatic/breast-metastatic';
import {BreastProteinPage} from '../pages/breast-protein/breast-protein';
import {BreastLifestylePage} from '../pages/breast-lifestyle/breast-lifestyle';
import {InformationPage} from '../pages/information/information';
import {ColorectalPage} from '../pages/colorectal/colorectal';
import {ColorectalAboutPage} from '../pages/colorectal-about/colorectal-about';
import {ColorectalAdenocarcinomasPage} from '../pages/colorectal-adenocarcinomas/colorectal-adenocarcinomas';
import {ColorectalSarcomasPage} from '../pages/colorectal-sarcomas/colorectal-sarcomas';
import {ColorectalCarcinoidsPage} from '../pages/colorectal-carcinoids/colorectal-carcinoids';
import {ColorectalUnderstandingPage} from '../pages/colorectal-understanding/colorectal-understanding';
import {ColorectalDrugPage} from '../pages/colorectal-drug/colorectal-drug';
import {StoryChristinaPage} from '../pages/story-christina/story-christina';
import {StoryLisaPage} from '../pages/story-lisa/story-lisa';
import {StoryAlliePage} from '../pages/story-allie/story-allie';
import {StoryJayPage} from '../pages/story-jay/story-jay';
import {StoryKomiPage} from '../pages/story-komi/story-komi';
import {StoryShobiPage} from '../pages/story-shobi/story-shobi';
import {StoryJakePage} from '../pages/story-jake/story-jake';
import {DonationPage} from '../pages/donation/donation';
import {DonateBladderOnePage} from '../pages/donate-bladder-one/donate-bladder-one';
import {DonateBladderTwoPage} from '../pages/donate-bladder-two/donate-bladder-two';
import {DonateBloodOnePage} from '../pages/donate-blood-one/donate-blood-one';
import {DonateBloodTwoPage} from '../pages/donate-blood-two/donate-blood-two';
import {DonateBrainOnePage} from '../pages/donate-brain-one/donate-brain-one';
import {DonateBrainTwoPage} from '../pages/donate-brain-two/donate-brain-two';
import {DonateBoneOnePage} from '../pages/donate-bone-one/donate-bone-one';
import {DonateBoneTwoPage} from '../pages/donate-bone-two/donate-bone-two';
import {DonateBreastOnePage} from '../pages/donate-breast-one/donate-breast-one';
import {DonateBreastTwoPage} from '../pages/donate-breast-two/donate-breast-two';
import {DonateColorectalOnePage} from '../pages/donate-colorectal-one/donate-colorectal-one';
import {DonateColorectalTwoPage} from '../pages/donate-colorectal-two/donate-colorectal-two';
import {DonateEndometrialOnePage} from '../pages/donate-endometrial-one/donate-endometrial-one';
import {DonateEndometrialTwoPage} from '../pages/donate-endometrial-two/donate-endometrial-two';
import {DonateEyeOnePage} from '../pages/donate-eye-one/donate-eye-one';
import {DonateEyeTwoPage} from '../pages/donate-eye-two/donate-eye-two';
import {DonateLiverOnePage} from '../pages/donate-liver-one/donate-liver-one';
import {DonateLiverTwoPage} from '../pages/donate-liver-two/donate-liver-two';
import {DonateLungOnePage} from '../pages/donate-lung-one/donate-lung-one';
import {DonateLungTwoPage} from '../pages/donate-lung-two/donate-lung-two';
import {DonateLymphaticOnePage} from '../pages/donate-lymphatic-one/donate-lymphatic-one';
import {DonateLymphaticTwoPage} from '../pages/donate-lymphatic-two/donate-lymphatic-two';
import {DonateOralOnePage} from '../pages/donate-oral-one/donate-oral-one';
import {DonateOralTwoPage} from '../pages/donate-oral-two/donate-oral-two';
import {DonateOvarianOnePage} from '../pages/donate-ovarian-one/donate-ovarian-one';
import {DonateOvarianTwoPage} from '../pages/donate-ovarian-two/donate-ovarian-two';
import {DonatePancreaticOnePage} from '../pages/donate-pancreatic-one/donate-pancreatic-one';
import {DonatePancreaticTwoPage} from '../pages/donate-pancreatic-two/donate-pancreatic-two';
import {DonateSkinOnePage} from '../pages/donate-skin-one/donate-skin-one';
import {DonateSkinTwoPage} from '../pages/donate-skin-two/donate-skin-two';
import {DonateTesticularOnePage} from '../pages/donate-testicular-one/donate-testicular-one';
import {DonateTesticularTwoPage} from '../pages/donate-testicular-two/donate-testicular-two';
import {DonateThroatOnePage} from '../pages/donate-throat-one/donate-throat-one';
import {DonateThroatTwoPage} from '../pages/donate-throat-two/donate-throat-two';
import {DonateThyroidOnePage} from '../pages/donate-thyroid-one/donate-thyroid-one';
import {DonateThyroidTwoPage} from '../pages/donate-thyroid-two/donate-thyroid-two';
import {SplashScreenPage} from '../pages/splash-screen/splash-screen';
import {EndometrialPage} from '../pages/endometrial/endometrial';
import {EndometrialAboutPage} from '../pages/endometrial-about/endometrial-about';
import {EndometrialCarcinomaPage} from '../pages/endometrial-carcinoma/endometrial-carcinoma';
import {EndometrialUterinePage} from '../pages/endometrial-uterine/endometrial-uterine';
import {HormonePage} from '../pages/hormone/hormone';
import {EndometrialHysterPage} from '../pages/endometrial-hyster/endometrial-hyster';
import {EyePage} from '../pages/eye/eye';
import {EyeAboutPage} from '../pages/eye-about/eye-about';
import {EyeLymphomaPage} from '../pages/eye-lymphoma/eye-lymphoma';
import {EyeMelanomaPage} from '../pages/eye-melanoma/eye-melanoma';
import {EyeOcularPage} from '../pages/eye-ocular/eye-ocular';
import {EyeRadiationPage} from '../pages/eye-radiation/eye-radiation';
import {EyeRetinoPage} from '../pages/eye-retino/eye-retino';
import {LiverPage} from '../pages/liver/liver';
import {LiverAboutPage} from '../pages/liver-about/liver-about';
import {LiverAngiPage} from '../pages/liver-angi/liver-angi';
import {LiverBilePage} from '../pages/liver-bile/liver-bile';
import {LiverHeptaPage} from '../pages/liver-hepta/liver-hepta';
import {LiverSurgeryPage} from '../pages/liver-surgery/liver-surgery';
import {LiverUnderstandingPage} from '../pages/liver-understanding/liver-understanding';
import {LymphaticPage} from '../pages/lymphatic/lymphatic';
import {LymphaticAboutPage} from '../pages/lymphatic-about/lymphatic-about';
import {LymphaticChemotherapyPage} from '../pages/lymphatic-chemotherapy/lymphatic-chemotherapy';
import {LymphaticImmunotherapyPage} from '../pages/lymphatic-immunotherapy/lymphatic-immunotherapy';
import {LymphaticNonhodPage} from '../pages/lymphatic-nonhod/lymphatic-nonhod';
import {LymphaticHodPage} from '../pages/lymphatic-hod/lymphatic-hod';
import {OralPage} from '../pages/oral/oral';
import {OralChemotherapyPage} from '../pages/oral-chemotherapy/oral-chemotherapy';
import {OralLifestylePage} from '../pages/oral-lifestyle/oral-lifestyle';
import {OralSalivaryPage} from '../pages/oral-salivary/oral-salivary';
import {OralVerrucousPage} from '../pages/oral-verrucous/oral-verrucous';
import {OralAboutPage} from '../pages/oral-about/oral-about';
import {OralSquamousPage} from '../pages/oral-squamous/oral-squamous';
import {OvarianPage} from '../pages/ovarian/ovarian';
import {OvarianAboutPage} from '../pages/ovarian-about/ovarian-about';
import {OvarianCetPage} from '../pages/ovarian-cet/ovarian-cet';
import {OvariamStromalPage} from '../pages/ovariam-stromal/ovariam-stromal';
import {OvarianGermPage} from '../pages/ovarian-germ/ovarian-germ';
import {OvarianUnderstandingPage} from '../pages/ovarian-understanding/ovarian-understanding';
import {OvarianDrugsPage} from '../pages/ovarian-drugs/ovarian-drugs';
import {LungPage} from '../pages/lung/lung';
import {LungAboutPage} from '../pages/lung-about/lung-about';
import {LungCarcinoidsPage} from '../pages/lung-carcinoids/lung-carcinoids';
import {LungLobectomyPage} from '../pages/lung-lobectomy/lung-lobectomy';
import {LungNscPage} from '../pages/lung-nsc/lung-nsc';
import {LungRfaPage} from '../pages/lung-rfa/lung-rfa';
import {LungScPage} from '../pages/lung-sc/lung-sc';
import {PancreaticPage} from '../pages/pancreatic/pancreatic';
import {PancreaticAboutPage} from '../pages/pancreatic-about/pancreatic-about';
import {PancreaticEndocrinePage} from '../pages/pancreatic-endocrine/pancreatic-endocrine';
import {PancreaticExocrinePage} from '../pages/pancreatic-exocrine/pancreatic-exocrine';
import {PancreaticExternalPage} from '../pages/pancreatic-external/pancreatic-external';
import {PancreaticPallativePage} from '../pages/pancreatic-pallative/pancreatic-pallative';
import {SkinAboutPage} from '../pages/skin-about/skin-about';
import {SkinBasalPage} from '../pages/skin-basal/skin-basal';
import {SkinDrugsPage} from '../pages/skin-drugs/skin-drugs';
import {SkinMelanomaPage} from '../pages/skin-melanoma/skin-melanoma';
import {SkinPreventionPage} from '../pages/skin-prevention/skin-prevention';
import {SkinSquamousPage} from '../pages/skin-squamous/skin-squamous';
import {SkinPage} from '../pages/skin/skin';
import {TesticularPage} from '../pages/testicular/testicular';
import {TesticularAboutPage} from '../pages/testicular-about/testicular-about';
import {TesticularNonseminomaPage} from '../pages/testicular-nonseminoma/testicular-nonseminoma';
import {TesticularSeminomaPage} from '../pages/testicular-seminoma/testicular-seminoma';
import {TesticularSelfPage} from '../pages/testicular-self/testicular-self';
import {TesticularChemotherapyPage} from '../pages/testicular-chemotherapy/testicular-chemotherapy';
import {ThroatPage} from '../pages/throat/throat';
import {ThroatAboutPage} from '../pages/throat-about/throat-about';
import {ThroatHypoPage} from '../pages/throat-hypo/throat-hypo';
import {ThroatLarynPage} from '../pages/throat-laryn/throat-laryn';
import {ThroatLaryngealPage} from '../pages/throat-laryngeal/throat-laryngeal';
import {ThroatRadiationPage} from '../pages/throat-radiation/throat-radiation';
import {ThyroidPage} from '../pages/thyroid/thyroid';
import {ThyroidAboutPage} from '../pages/thyroid-about/thyroid-about';
import {ThyroidFollicularPage} from '../pages/thyroid-follicular/thyroid-follicular';
import {ThyroidHurthlePage} from '../pages/thyroid-hurthle/thyroid-hurthle';
import {ThyroidPapillaryPage} from '../pages/thyroid-papillary/thyroid-papillary';
import {ThyroidRadioactivePage} from '../pages/thyroid-radioactive/thyroid-radioactive';
import {ThyroidThyroidectomyPage} from '../pages/thyroid-thyroidectomy/thyroid-thyroidectomy';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BladderPage,
    AccountCreationPage,
    BladderPhotodynamicPage,
    BladderIntravesicalPage,
    BladderTransitionalPage,
    BladderSquamousPage,
    BladderAboutPage,
    BloodPage,
    BloodLeukemiaPage,
    BloodMyelomaPage,
    BloodLymphomaPage,
    BloodCellPage,
    BloodChemotherapyPage,
    BonePage,
    BloodAboutPage,
    BoneAboutPage,
    BoneOsteosarcomasPage,
    BoneEwingPage,
    BoneChondrosarcomasPage,
    BoneProtonPage,
    BoneMyeloablativePage,
    BrainPage,
    BrainAboutPage,
    BrainPrimaryPage,
    BrainMeningiomasPage,
    BrainGlioblastomasPage,
    BrainLasersPage,
    BrainVirusesPage,
    BreastPage,
    BreastAboutPage,
    BreastInvasivePage,
    BreastRecurrentPage,
    BreastMetastaticPage,
    BreastProteinPage,
    BreastLifestylePage,
    InformationPage,
    ColorectalPage,
    ColorectalAboutPage,
    ColorectalAdenocarcinomasPage,
    ColorectalSarcomasPage,
    ColorectalCarcinoidsPage,
    ColorectalUnderstandingPage,
    ColorectalDrugPage,
    StoryChristinaPage,
    StoryLisaPage,
    StoryAlliePage,
    StoryJayPage,
    StoryKomiPage,
    StoryShobiPage,
    StoryJakePage,
    DonationPage,
    DonateBladderOnePage,
    DonateBladderTwoPage,
    DonateBloodOnePage,
    DonateBloodTwoPage,
    DonateBrainOnePage,
    DonateBrainTwoPage,
    DonateBoneOnePage,
    DonateBoneTwoPage,
    DonateBreastOnePage,
    DonateBreastTwoPage,
    DonateColorectalOnePage,
    DonateColorectalTwoPage,
    DonateEndometrialOnePage,
    DonateEndometrialTwoPage,
    DonateEyeOnePage,
    DonateEyeTwoPage,
    DonateLiverOnePage,
    DonateLiverTwoPage,
    DonateLungOnePage,
    DonateLungTwoPage,
    DonateLymphaticOnePage,
    DonateLymphaticTwoPage,
    DonateOralOnePage,
    DonateOralTwoPage,
    DonateOvarianOnePage,
    DonateOvarianTwoPage,
    DonatePancreaticOnePage,
    DonatePancreaticTwoPage,
    DonateSkinOnePage,
    DonateSkinTwoPage,
    DonateTesticularOnePage,
    DonateTesticularTwoPage,
    DonateThroatOnePage,
    DonateThroatTwoPage,
    DonateThyroidOnePage,
    DonateThyroidTwoPage,
    SplashScreenPage,
    EndometrialPage,
    EndometrialCarcinomaPage,
    EndometrialUterinePage,
    EndometrialAboutPage,
    HormonePage,
    EndometrialHysterPage,
    EyePage,
    EyeAboutPage,
    EyeLymphomaPage,
    EyeMelanomaPage,
    EyeRadiationPage,
    EyeRetinoPage,
    EyeOcularPage,
    LiverAboutPage,
    LiverBilePage,
    LiverAngiPage,
    LiverHeptaPage,
    LiverPage, 
    LiverSurgeryPage,
    LiverUnderstandingPage,
    LymphaticPage,
    LymphaticAboutPage,
    LymphaticChemotherapyPage,
    LymphaticHodPage,
    LymphaticImmunotherapyPage,
    LymphaticNonhodPage,
    OralPage,
    OralAboutPage,
    OralChemotherapyPage,
    OralLifestylePage,
    OralSalivaryPage,
    OralSquamousPage,
    OralVerrucousPage,
    OvarianPage,
    OvarianAboutPage,
    OvarianCetPage,
    OvarianGermPage,
    OvariamStromalPage,
    OvarianDrugsPage,
    LungPage,
    LungAboutPage,
    LungCarcinoidsPage,
    LungLobectomyPage,
    LungNscPage,
    LungRfaPage,
    LungScPage,
    PancreaticPage,
    PancreaticAboutPage,
    PancreaticEndocrinePage,
    PancreaticExocrinePage,
    PancreaticExternalPage,
    PancreaticPallativePage,
    SkinAboutPage,
    SkinBasalPage,
    SkinDrugsPage,
    SkinMelanomaPage,
    SkinPage,
    SkinPreventionPage,
    SkinSquamousPage,
    TesticularPage,
    TesticularAboutPage,
    TesticularNonseminomaPage,
    TesticularSelfPage,
    TesticularSeminomaPage,
    TesticularChemotherapyPage,
    ThroatPage,
    ThroatAboutPage,
    ThroatHypoPage,
    ThroatLarynPage,
    ThroatLaryngealPage,
    ThroatRadiationPage,
    ThyroidPage,
    ThyroidAboutPage,
    ThyroidFollicularPage,
    ThyroidHurthlePage,
    ThyroidPapillaryPage,
    ThyroidRadioactivePage,
    ThyroidThyroidectomyPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    ChartModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BladderPage,
    AccountCreationPage,
    BladderPhotodynamicPage,
    BladderIntravesicalPage,
    BladderTransitionalPage,
    BladderSquamousPage,
    BladderAboutPage,
    BloodPage,
    BloodLeukemiaPage,
    BloodMyelomaPage,
    BloodLymphomaPage,
    BloodCellPage,
    BloodChemotherapyPage,
    BonePage,
    BloodAboutPage,
    BoneAboutPage,
    BoneOsteosarcomasPage,
    BoneEwingPage,
    BoneChondrosarcomasPage,
    BoneProtonPage,
    BoneMyeloablativePage,
    BrainPage,
    BrainAboutPage,
    BrainPrimaryPage,
    BrainMeningiomasPage,
    BrainGlioblastomasPage,
    BrainLasersPage,
    BrainVirusesPage,
    BreastPage,
    BreastAboutPage,
    BreastInvasivePage,
    BreastRecurrentPage,
    BreastMetastaticPage,
    BreastProteinPage,
    BreastLifestylePage,
    InformationPage,
    ColorectalPage,
    ColorectalAboutPage,
    ColorectalAdenocarcinomasPage,
    ColorectalSarcomasPage,
    ColorectalCarcinoidsPage,
    ColorectalUnderstandingPage,
    ColorectalDrugPage,
    StoryChristinaPage,
    StoryLisaPage,
    StoryAlliePage,
    StoryJayPage,
    StoryKomiPage,
    StoryShobiPage,
    StoryJakePage,
    DonationPage,
    DonateBladderOnePage,
    DonateBladderTwoPage,
    DonateBloodOnePage,
    DonateBloodTwoPage,
    DonateBrainOnePage,
    DonateBrainTwoPage,
    DonateBoneOnePage,
    DonateBoneTwoPage,
    DonateBreastOnePage,
    DonateBreastTwoPage,
    DonateColorectalOnePage,
    DonateColorectalTwoPage,
    DonateEndometrialOnePage,
    DonateEndometrialTwoPage,
    DonateEyeOnePage,
    DonateEyeTwoPage,
    DonateLiverOnePage,
    DonateLiverTwoPage,
    DonateLungOnePage,
    DonateLungTwoPage,
    DonateLymphaticOnePage,
    DonateLymphaticTwoPage,
    DonateOralOnePage,
    DonateOralTwoPage,
    DonateOvarianOnePage,
    DonateOvarianTwoPage,
    DonatePancreaticOnePage,
    DonatePancreaticTwoPage,
    DonateSkinOnePage,
    DonateSkinTwoPage,
    DonateTesticularOnePage,
    DonateTesticularTwoPage,
    DonateThroatOnePage,
    DonateThroatTwoPage,
    DonateThyroidOnePage,
    DonateThyroidTwoPage,
    SplashScreenPage,
    EndometrialPage,
    EndometrialCarcinomaPage,
    EndometrialUterinePage,
    EndometrialAboutPage,
    HormonePage,
    EndometrialHysterPage,
    EyePage,
    EyeAboutPage,
    EyeLymphomaPage,
    EyeMelanomaPage,
    EyeRadiationPage,
    EyeRetinoPage,
    EyeOcularPage,
    LiverAboutPage,
    LiverBilePage,
    LiverAngiPage,
    LiverHeptaPage,
    LiverPage, 
    LiverSurgeryPage,
    LiverUnderstandingPage,
    LymphaticPage,
    LymphaticAboutPage,
    LymphaticChemotherapyPage,
    LymphaticHodPage,
    LymphaticImmunotherapyPage,
    LymphaticNonhodPage,
    OralPage,
    OralAboutPage,
    OralChemotherapyPage,
    OralLifestylePage,
    OralSalivaryPage,
    OralSquamousPage,
    OralVerrucousPage,
    OvarianPage,
    OvarianAboutPage,
    OvarianCetPage,
    OvarianGermPage,
    OvariamStromalPage,
    OvarianDrugsPage,
    LungPage,
    LungAboutPage,
    LungCarcinoidsPage,
    LungLobectomyPage,
    LungNscPage,
    LungRfaPage,
    LungScPage,
    PancreaticPage,
    PancreaticAboutPage,
    PancreaticEndocrinePage,
    PancreaticExocrinePage,
    PancreaticExternalPage,
    PancreaticPallativePage,
    SkinAboutPage,
    SkinBasalPage,
    SkinDrugsPage,
    SkinMelanomaPage,
    SkinPage,
    SkinPreventionPage,
    SkinSquamousPage,
    TesticularPage,
    TesticularAboutPage,
    TesticularNonseminomaPage,
    TesticularSelfPage,
    TesticularSeminomaPage,
    TesticularChemotherapyPage,
    ThroatPage,
    ThroatAboutPage,
    ThroatHypoPage,
    ThroatLarynPage,
    ThroatLaryngealPage,
    ThroatRadiationPage,
    ThyroidPage,
    ThyroidAboutPage,
    ThyroidFollicularPage,
    ThyroidHurthlePage,
    ThyroidPapillaryPage,
    ThyroidRadioactivePage,
    ThyroidThyroidectomyPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
