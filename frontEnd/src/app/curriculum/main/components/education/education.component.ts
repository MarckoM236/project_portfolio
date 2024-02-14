import { Component } from '@angular/core';
import { CurriculumService } from 'src/app/curriculum/services/curriculum.service';
import { LanguageService } from 'src/app/page/main/services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  courses:any[] = [];
  Subscription:Subscription;

  constructor(private _curriculum:CurriculumService, private language:LanguageService){
    this.courses = this._curriculum.getEducation();

    this.Subscription = this.language.data$.subscribe(lang => {
      this.courseLanguage(lang);
    });
  }

  courseLanguage(lang:String):void{
    if(lang == 'es'){
      for(let i = 0; i < this.courses.length; i++){
        this.courses[i].data.course = this.courses[i].data.course.es;
        this.courses[i].data.date = this.courses[i].data.date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
      }
    }
    else{
      for(let i = 0; i < this.courses.length; i++){
        this.courses[i].data.course = this.courses[i].data.course.en;
        this.courses[i].data.date = this.courses[i].data.date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
      }
    }
    console.log(this.courses);
  }

}
