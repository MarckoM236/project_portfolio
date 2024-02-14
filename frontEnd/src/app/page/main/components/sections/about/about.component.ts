import { Component } from '@angular/core';
import { User_Info } from '../../../interfaces/user_info';
import { UserService } from '../../../services/user.service';
import { ResumeService } from '../../../services/-resume.service';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  user_info! : User_Info;
  Subscription!: Subscription;
  interest:String = "";
  lang!:string;

  constructor(private _user:UserService, private _resume:ResumeService, private language:LanguageService){}

  ngOnInit(){
    this.user_info = this._user.getUserInfo();
    this.Subscription = this.language.data$.subscribe(lang => {
      this.lang = lang;
      this.interest = lang == 'es' ? this.user_info.interests.es : this.user_info.interests.en;
    });
  }



  downloadFile(){
    // const url = window.URL.createObjectURL(this._curriculum.getPdfFile());
    const url = this.lang == 'es' ? this._resume.getPdfFile().es :this._resume.getPdfFile().en;
     
     const a = document.createElement('a');
     a.href = url;
 
     a.download = 'MiCV.pdf';
     
     a.click();
     
     //window.URL.revokeObjectURL(url);
   }
}
