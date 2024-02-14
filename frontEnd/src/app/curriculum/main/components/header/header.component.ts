import { Component } from '@angular/core';
import { CurriculumService } from 'src/app/curriculum/services/curriculum.service';
import { LanguageService } from 'src/app/page/main/services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  user_info:any;
  Subscription:Subscription;

  constructor (private _curriculum:CurriculumService,private language:LanguageService){
    this.user_info = this._curriculum.getUserInfo();
    this.Subscription = this.language.data$.subscribe(lang => {
      this.user_info.profession = lang == 'es' ? this.user_info.profession.es : this.user_info.profession.en;
    });
  }
}
