//Modules
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

//services
import { PortfolioService } from 'src/app/page/main/services/portfolio.service';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  projects:any[]=[];
  Subscription:Subscription;

  constructor (private _portfolio:PortfolioService, private language:LanguageService){
    this.Subscription = this.language.data$.subscribe(lang => {
      this.projects = this._portfolio.getProjects();
      this.ProjectsLang(lang);
      
    });
  }

  //projects according to language.
  ProjectsLang(lang:String){
    if(lang == 'es'){
      for (let i = 0; i < this.projects.length; i++) {
        this.projects[i].title=this.projects[i].title.es;
        this.projects[i].description=this.projects[i].description.es;
        for(let j = 0; j< this.projects[i].gallery.length; j++){
          this.projects[i].gallery[j].description = this.projects[i].gallery[j].description.es;
        }
      }    
    }
    else{
      for (let i = 0; i < this.projects.length; i++) {
        this.projects[i].title=this.projects[i].title.en;
        this.projects[i].description=this.projects[i].description.en;
        for(let j = 0; j< this.projects[i].gallery.length; j++){
          this.projects[i].gallery[j].description = this.projects[i].gallery[j].description.en;
        }
      }
    }
  }

}
