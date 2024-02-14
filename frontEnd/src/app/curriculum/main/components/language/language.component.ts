import { Component } from '@angular/core';
import { CurriculumService } from 'src/app/curriculum/services/curriculum.service';
import { LanguageService } from 'src/app/page/main/services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent {

  languages:any[] = [];
  Subscription:Subscription;

  constructor(private _curriculum:CurriculumService, private language:LanguageService){
    this.languages = this._curriculum.getLanguages();
    this.Subscription = this.language.data$.subscribe(lang => {
      this.langLang(lang);
    });
  }

  langLang(lang:String){
    if(lang == 'es'){
      for(let i = 0; i < this.languages.length; i++){
        this.languages[i].technology = this.languages[i].technology.es;
      }
    }
    else{
      for(let i = 0; i < this.languages.length; i++){
        this.languages[i].technology = this.languages[i].technology.en;
      }
    }
  }


}
