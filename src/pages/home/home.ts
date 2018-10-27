import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ListPage } from '../list/list';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userData: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    // constructor(private iab: InAppBrowser) {
    this.storage.get('name').then((val) => {
      console.log('Your name is', val);
      this.userData = val;
    });

  }

  changePage() {
    window.open('http://www.vinodbeloshe.com', '_system');
    // this.iab.create('www.vinodbeloshe.com');
  }

  search(id) {
    this.navCtrl.push(ListPage, {
      id: id
    });
  }

}
