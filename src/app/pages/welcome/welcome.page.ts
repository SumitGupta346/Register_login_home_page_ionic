import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotoLoginpage(){
    this.router.navigate(['login']);

  }
  gotopage(){
    this.router.navigate(['newpage']);
  }
}
