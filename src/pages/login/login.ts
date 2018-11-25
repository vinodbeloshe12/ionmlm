import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public allContacts: any
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient, public toastCtrl: ToastController, private storage: Storage) {

  }

  login(val) {
    console.log("val", val)
    if (val) {
      let headers = new HttpHeaders();
      let data = { userId: val }
      headers.append('Content-Type', 'application/json');
      // this.adduser = this.http.get('http://localhost/faback/index.php/json/getallcategory');
      this.http.post("http://admin.findacross.com/index.php/json/mlmLogin", JSON.stringify(data), { headers: headers }).subscribe(data => {
        console.log('user logged in: ', data);
        this.storage.set('userData', data);
        this.showToast("User Logged In successfully", 'top');
        this.navCtrl.push(HomePage);
      })

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
