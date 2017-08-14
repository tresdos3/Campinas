import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { SettingsService } from "../../service/settings.service";
import { TranslateService } from "ng2-translate";
=======
>>>>>>> 9f714dc4a339608272edb07e476a195e21d4a859

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

<<<<<<< HEAD
  private current_language: string;
  available_languages: Array<string>;

  constructor(private translate: TranslateService, private settings: SettingsService) { 
    settings.controlLanguage;
    // console.log(settings.getCurrentLanguage());
    
    this.current_language = settings.getStoredLanguage();
    this.available_languages = settings.getAvailable_Languages();
  }

  ngOnInit() {
  }
  changeLanguage(change_language: string){
    this.settings.useLanguage(change_language);
  }
=======
  constructor() { }

  ngOnInit() {
  }
>>>>>>> 9f714dc4a339608272edb07e476a195e21d4a859

}
