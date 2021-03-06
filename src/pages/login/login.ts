import { FrontPage } from './../front/front';
import { Http } from '@angular/http';
import { Login } from './../../providers/login';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  private url: string = 'http://media.mw.metropolia.fi/wbma';
  
  private user: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public loginService: Login, private http: Http) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    if (localStorage.getItem("user") !== null) {
      this.loginService.setUser(JSON.parse(localStorage.getItem("user")));
      this.loginService.logged = true;
      //this.router.navigate(['front']);
    } else if (this.loginService.getUser().password !== undefined) {
      this.loginService.login();
    }
  }

  login = (value: any) => {
    //console.log(value);
    this.loginService.setUser(value);
    this.loginService.login();
    this.navCtrl.setRoot(FrontPage);
    
    // this.http.post(this.url, this.user,.....)
  


  }
}
