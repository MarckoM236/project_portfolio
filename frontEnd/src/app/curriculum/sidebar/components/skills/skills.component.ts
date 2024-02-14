import { Component } from '@angular/core';
import { CurriculumService } from 'src/app/curriculum/services/curriculum.service';
import { LanguageService } from 'src/app/page/main/services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills:any[]=[];
  Subscription:Subscription;

  constructor(private _curriculum:CurriculumService, private language:LanguageService){
    this.skills = this._curriculum.getSkills();

    //check selected language
    this.Subscription = this.language.data$.subscribe(lang => {
      this.skillLanguage(lang);
    });
  }

  //response according to language.
  skillLanguage(lang:String){
    if(lang == 'es'){
      for(let i = 0; i < this.skills.length; i++){
        this.skills[i].technology = this.skills[i].technology.es;
      }
    }
    else{
      for(let i = 0; i < this.skills.length; i++){
        this.skills[i].technology = this.skills[i].technology.en;
      }
    }
  }

}
