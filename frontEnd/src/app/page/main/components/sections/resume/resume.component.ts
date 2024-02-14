import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

//services
import { ResumeService } from 'src/app/page/main/services/-resume.service';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  lang!:String;
  expertises:any[]=[];
  educations:any[]=[];
  skills:any[]=[];
  languages:any[]=[];
  Subscription!:Subscription;

  constructor(private resume:ResumeService, public translate:TranslateService, private language:LanguageService){
    this.Subscription = this.language.data$.subscribe(lang => {
      this.expertises= this.resume.getExpertises();
      this.expertisesLang(lang);
      this.educations=this.resume.getEducations();
      this.educationsLang(lang);
      this.skills=this.resume.getSkills();
      this.skillsLang('skills',lang);
      this.languages=this.resume.getLanguages();
      this.skillsLang('langs',lang);
    });
  }

  expertisesLang(lang:String){
    if(lang == 'es'){
      for (let i = 0; i < this.expertises.length; i++) {
        this.expertises[i].data.position=this.expertises[i].data.position.es;
        this.expertises[i].data.functions=this.expertises[i].data.functions.es;
        this.expertises[i].data.start_date = this.expertises[i].data.start_date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
        this.expertises[i].data.end_date = this.expertises[i].data.end_date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
      }    
    }
    else{
      for (let i = 0; i < this.expertises.length; i++) {
        this.expertises[i].data.position = this.expertises[i].data.position.en;
        this.expertises[i].data.functions = this.expertises[i].data.functions.en;
        this.expertises[i].data.start_date = this.expertises[i].data.start_date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        this.expertises[i].data.end_date = this.expertises[i].data.end_date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
      }
    }
  }

  educationsLang(lang:String){
    if(lang == 'es'){
      for (let i = 0; i < this.educations.length; i++) {
        this.educations[i].data.course=this.educations[i].data.course.es;
        this.educations[i].data.date = this.educations[i].data.date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
      }    
    }
    else{
      for (let i = 0; i < this.educations.length; i++) {
        this.educations[i].data.course=this.educations[i].data.course.en;
        this.educations[i].data.date = this.educations[i].data.date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
      }
    }
  }

  skillsLang(skill:string,lang:String){
    if(lang == 'es'){
      if(skill == 'skills')  {
        for (let i = 0; i < this.skills.length; i++) {
          this.skills[i].technology=this.skills[i].technology.es;
        }  
      }
      if(skill == 'langs'){
        for (let i = 0; i < this.languages.length; i++) {
          this.languages[i].technology=this.languages[i].technology.es;
        }
      }
    }
    else{
      if(skill == 'skills')  {
        for (let i = 0; i < this.skills.length; i++) {
          this.skills[i].technology=this.skills[i].technology.en;
        }  
      }
      if(skill == 'langs'){
        for (let i = 0; i < this.languages.length; i++) {
          this.languages[i].technology=this.languages[i].technology.en;
        }
      }
    }
  }


}
