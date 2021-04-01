import { Component, OnInit } from '@angular/core';
declare const changeHeaderLanguageENG: any;
declare const changeHeaderLanguageFIN: any;
declare const changeBodyLanguageENG: any;
declare const changeBodyLanguageFIN: any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changeLanguageENG() {
    changeHeaderLanguageENG();
    changeBodyLanguageENG();
  }
  changeLanguageFIN() {
    changeHeaderLanguageFIN();
    changeBodyLanguageFIN();
  }
}
