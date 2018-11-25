import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { InAppBrowser, InAppBrowserEvent } from '@ionic-native/in-app-browser';
import { ListPage } from '../list/list';
import { Storage } from '@ionic/storage';
import { WebviewPage } from '../webview/webview';
// import { Contacts, ContactFieldType, ContactFindOptions } from '@ionic-native/contacts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  allContacts: any;
  userData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private iab: InAppBrowser, private platform: Platform) {
    // constructor(private contacts: Contacts, public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private iab: InAppBrowser, private platform: Platform) {
    this.storage.get('userData').then((val) => {
      console.log('Your name is', val);
      this.userData = val;
    });



    this.platform.ready().then(() => {
      // this.contacts.find(['displayName', 'name', 'phoneNumbers', 'emails'], { filter: "", multiple: true })
      //   .then(data => {
      //     this.allContacts = data;

      //   });
    })
  }



  openPage(url) {
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
