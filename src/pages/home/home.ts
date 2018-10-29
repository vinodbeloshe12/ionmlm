import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { InAppBrowser, InAppBrowserEvent } from '@ionic-native/in-app-browser';
import { ListPage } from '../list/list';
import { Storage } from '@ionic/storage';
import { WebviewPage } from '../webview/webview';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  userData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private iab: InAppBrowser, private platform: Platform) {
    this.storage.get('name').then((val) => {
      console.log('Your name is', val);
      this.userData = val;
    });


  }

  openPage(url) {
    // this.platform.ready().then(() => {
    //   let browser = this.iab.create(url, '_blank', 'location=yes');
    //   browser.show();
    // })
    this.navCtrl.push(WebviewPage, {
      url: url
    });

  }

  search(id) {
    this.navCtrl.push(ListPage, {
      id: id
    });
  }

}
