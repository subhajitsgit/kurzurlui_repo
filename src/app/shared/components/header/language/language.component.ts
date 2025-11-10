import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavService } from '../../../../shared/services/nav.service';

interface languageList {
  language: string;
  code: string;
  type?: string;
  icon: string;
}

@Component({
  selector: 'app-language',
  standalone: true,
  imports: [],
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})

export class LanguageComponent {

  public language: boolean = false;

  public selectedLanguage: languageList = {
    language: 'English',
    code: 'en',
    icon: 'us'
  }

  public languages: languageList[] = [{
    language: 'English',
    code: 'en',
    type: 'US',
    icon: 'us'
  },
  {
    language: 'Español',
    code: 'es',
    icon: 'es'
  },
  {
    language: 'Français',
    code: 'fr',
    icon: 'fr'
  },
  {
    language: 'Português',
    code: 'pt',
    type: 'BR',
    icon: 'pt'
  }]

  constructor(public navServices: NavService, public translateService: TranslateService) { }

  ngOnInit() {
    this.changeLanguage(this.selectedLanguage);
  }

  changeLanguage(lang: languageList) {
    this.translateService.use(lang.code);
    this.selectedLanguage = lang;
  }

}
