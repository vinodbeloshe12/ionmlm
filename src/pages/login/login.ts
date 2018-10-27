import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private storage: Storage) {
  }

  login(val) {
    console.log("val", val)
    if (val == 'rajesh') {
      this.storage.set('name', val);
      this.showToast("User Logged In successfully", 'top');
      this.navCtrl.push(HomePage);
    } else {
      !val ? this.showToast("Please Enter User Id", 'top') : this.showToast("Invalid User Id", 'top');
    }
  }

  showToast(msg: string, position: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }

}
