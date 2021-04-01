import { Component, OnInit } from '@angular/core';
declare const changeLanguageENG: any;
declare const changeLanguageFIN: any;

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
    changeLanguageENG();
  }
  changeLanguageFIN() {
    changeLanguageFIN();
  }
}
