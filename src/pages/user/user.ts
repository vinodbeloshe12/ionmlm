import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'user',
  templateUrl: 'user.html'
})
export class UserPage {
  adduser: any;
  user = {
    userId: Math.floor(Math.random() * 899999 + 100000),
    name: ''
  }
  constructor(private http: HttpClient) { }



  createUserSubmit(data) {
    console.log("dddd", data);
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    // this.adduser = this.http.get('http://localhost/faback/index.php/json/getallcategory');
    this.http.post("http://admin.findacross.com/index.php/json/addUser", JSON.stringify(data), { headers: headers }).subscribe(data => {
      console.log('user created: ', data);
      this.user = {
        userId: Math.floor(Math.random() * 899999 + 100000),
        name: ''
      }
    })
  }
}
