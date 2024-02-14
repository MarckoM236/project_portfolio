import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Gallery, Project } from 'src/app/page/main/interfaces/project';

@Component({
  selector: 'app-modal-portfolio',
  templateUrl: './modal-portfolio.component.html',
  styleUrls: ['./modal-portfolio.component.css']
})
export class ModalPortfolioComponent {

  @Input() project:Gallery[]=[];
  @Input() front_page:string="";
  @Input() description:string="";
  @Output() dataEvent = new EventEmitter<boolean>();
  reset:boolean=false;

  //destroy and create the component, to clean the bootstrap carousel.
  resetModal(){
    this.reset=true;
    this.dataEvent.emit(this.reset);
  }


}
