import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, ) {
    // constructor(private iab: InAppBrowser) {

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
