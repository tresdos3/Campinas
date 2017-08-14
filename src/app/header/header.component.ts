import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { SettingsService } from '../service/settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  current_language: string = 'es';
  default_language: string = 'es';
  available_languages: Array<string> = ['es', 'en', 'pt'];
  private Language: string;
  constructor(private translate: TranslateService, private settings: SettingsService) {
    console.log(settings);
    settings.controlLanguage();
    // translate.setDefaultLang(this.default_language);
    // let storage_language = localStorage.getItem('language');
    // if (storage_language == null) {
    //   localStorage.setItem('language', this.default_language);
    // }
    // storage_language = localStorage.getItem('language');
    // if (!this.checkLanguageAvailability(storage_language)) {
    //   localStorage.setItem('language', this.default_language);
    // }
    // storage_language = localStorage.getItem('language');
    // translate.use(storage_language);
    // this.current_language = storage_language;
  }
  // checkLanguageAvailability(language_evaluate) {
  //   let check: boolean = false;
  //   this.available_languages.forEach(language => {
  //     if (language == language_evaluate) {
  //       check = true;
  //       return;
  //     }
  //   });
  //   return check;
  // }

  // changeLanguage(language_change) {
  //   if (this.checkLanguageAvailability(language_change)) {
  //     this.translate.use(language_change);
  //     this.current_language = language_change;
  //     localStorage.setItem('language', language_change);
  //   }
  // }
  ngOnInit() {
        this.MenuBurger();
  }
  MenuBurger() {
    (function () {
      var bur = document.querySelector('.burger');
      var menu = document.querySelector('.nav-menu');
      bur.addEventListener('click', function () {
        bur.classList.toggle('is-active');
        menu.classList.toggle('is-active');
      });
    })();
  }
}
