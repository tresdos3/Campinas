import { Injectable } from '@angular/core';
import { TranslateService } from "ng2-translate";

@Injectable()
export class SettingsService {

  private current_language: string = 'es';
  private default_language: string = 'es';
  private available_languages: Array<string> = ['es', 'en', 'pt'];
  constructor(private translate: TranslateService) { }

  getCurrentLanguage() {
    return this.current_language;
  }
<<<<<<< HEAD
  getStoredLanguage() {
    return localStorage.getItem('language');
=======
  setCurrentLanguage(current_language: string) {
    this.current_language = current_language;
>>>>>>> 9f714dc4a339608272edb07e476a195e21d4a859
  }
  getDefaultLanguage() {
    return this.default_language;
  }
<<<<<<< HEAD
  getAvailable_Languages(){
    return this.available_languages;
  }
=======
>>>>>>> 9f714dc4a339608272edb07e476a195e21d4a859
  controlLanguage() {
    this.translate.setDefaultLang(this.default_language);
    let storage_language = localStorage.getItem('language');
    if (storage_language == null) {
      localStorage.setItem('language', this.default_language);
    }
    storage_language = localStorage.getItem('language');
    if (!this.checkLanguageAvailability(storage_language)) {
      localStorage.setItem('language', this.default_language);
    }
    storage_language = localStorage.getItem('language');
    this.translate.use(storage_language);
    this.current_language = storage_language;
  }
<<<<<<< HEAD
  checkLanguageAvailability(language_evaluate: string) {

    let check: boolean = false;
    this.available_languages.forEach(language => {
      if (language == language_evaluate) {
        // console.log('encontrado');
=======
  checkLanguageAvailability(language_evaluate) {
    let check: boolean = false;
    this.available_languages.forEach(language => {
      if (language == language_evaluate) {
>>>>>>> 9f714dc4a339608272edb07e476a195e21d4a859
        check = true;
        return;
      }
    });
    return check;
  }

  useLanguage(language_change) {
    if (this.checkLanguageAvailability(language_change)) {
      this.translate.use(language_change);
      this.current_language = language_change;
      localStorage.setItem('language', language_change);
    }
  }
}
