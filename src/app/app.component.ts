import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(['fi', 'en']);
    translate.setDefaultLang('fi');
  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }

  title = 'Padel-Projekti';
}
