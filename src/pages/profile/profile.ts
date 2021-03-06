import { Component,ViewChild } from '@angular/core';
// import { MenuController } from 'ionic-angular';
import { Nav,IonicPage, NavController, NavParams } from 'ionic-angular';
import { pro_class } from '../profile/pro_class';
import { ProfileProvider } from '../../providers/profile/profile';
import { UpdatePage } from '../update/update';
import { updt_user } from '../update/update_class';
import { LoginPage } from '../login/login';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
@ViewChild(Nav) nav: Nav;
  p1: pro_class[] = [];
  email: string;

  constructor(public _pr: ProfileProvider, public navCtrl: NavController,
   public navParams: NavParams,
    // public menucttl:MenuController
  ) {
  }

  ionViewDidLoad() {
    this.email = localStorage.getItem("user_email");
    console.log("ionViewDidLoad MyProfilePage");
    this._pr.getProfile(this.email).subscribe(
      (data: pro_class[]) => {
        this.p1 = data;
        console.log(this.p1);
      });
  }
  logout() {
    this.navCtrl.push(LoginPage);
  }

  update_user(email){
    this.navCtrl.push(UpdatePage,{email:email}); 
  }

}
