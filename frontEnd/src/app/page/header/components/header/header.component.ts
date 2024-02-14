import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { User_Info } from 'src/app/page/main/interfaces/user_info';
import { LanguageService } from 'src/app/page/main/services/language.service';
import { UserService } from 'src/app/page/main/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  user_info:any;
  profession!:String;
  data!: User_Info;
  Subscription: Subscription;

  constructor(private _user:UserService, public translate: TranslateService, private language:LanguageService){ 
    this.data = this._user.getUserInfo();
    this.Subscription = this.language.data$.subscribe(profession => {
      this.profession = profession == 'es' ? this.data.profession.es : this.data.profession.en})
   }

  ngOnInit(){
    return this.user_info = {
      "first_name" : this.data.first_name,
      "first_lastname" : this.data.first_lastname,
      "social_networks" : this.data.social_networks
    }
    
  }

  LanguageChange(lang: string) {
    this.translate.use(lang);
    this.language.setLanguage(lang);
  }
}
