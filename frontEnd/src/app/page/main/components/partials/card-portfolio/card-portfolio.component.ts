import { Component, ElementRef, Input, ViewChild } from '@angular/core';

//Interfaces
import { Gallery, Project } from 'src/app/page/main/interfaces/project';

@Component({
  selector: 'app-card-portfolio',
  templateUrl: './card-portfolio.component.html',
  styleUrls: ['./card-portfolio.component.css']
})
export class CardPortfolioComponent {

  @Input() projects:any[] = [];
  project:any[]=[];
  description:String="";
  url_image:String="";
  reset:boolean=false;

  openModal(project:any[],description:String, url_image:String): void {
    this.project = project;
    this.description = description;
    this.url_image = url_image;
  }

  resetModal(data:boolean){
    this.reset = !this.reset;
  }

}
