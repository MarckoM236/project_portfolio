import { Component } from '@angular/core';
import { CurriculumService } from 'src/app/curriculum/services/curriculum.service';
import { LanguageService } from 'src/app/page/main/services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.css']
})
export class ExpertiseComponent {

  expertises:any[] = [];
  Subscription:Subscription;

  constructor(private _curriculum:CurriculumService, private language:LanguageService){
    this.expertises = this._curriculum.getExpertise();
    this.Subscription = this.language.data$.subscribe(lang => {
      this.expertiseLanguage(lang);
    });
  }

  expertiseLanguage(lang:String){
    if(lang == 'es'){
      for(let i =0; i < this.expertises.length; i++){
        this.expertises[i].data.position = this.expertises[i].data.position.es;
        this.expertises[i].data.functions = this.expertises[i].data.functions.es;
        this.expertises[i].data.start_date = this.expertises[i].data.start_date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
        this.expertises[i].data.end_date = this.expertises[i].data.end_date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
      }
    }
    else{
      for(let i =0; i < this.expertises.length; i++){
        this.expertises[i].data.position = this.expertises[i].data.position.en;
        this.expertises[i].data.functions = this.expertises[i].data.functions.en;
        this.expertises[i].data.start_date = this.expertises[i].data.start_date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        this.expertises[i].data.end_date = this.expertises[i].data.end_date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
      }
    }
    console.log(this.expertises);
  }
  
}
