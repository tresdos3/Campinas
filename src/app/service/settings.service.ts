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
  setCurrentLanguage(current_language: string) {
    this.current_language = current_language;
  }
  getDefaultLanguage() {
    return this.default_language;
  }
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
  checkLanguageAvailability(language_evaluate) {
    let check: boolean = false;
    this.available_languages.forEach(language => {
      if (language == language_evaluate) {
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
