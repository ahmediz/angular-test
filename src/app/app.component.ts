import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { BoardsService } from 'src/app/boards.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-test';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAhCMLyGRvxBi-LB4pLd-mtwANgTKANDVM',
      authDomain: 'angular-test-290e5.firebaseapp.com'
    });
  }
}
