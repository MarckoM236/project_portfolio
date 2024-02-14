import { Component } from '@angular/core';
import { CurriculumService } from 'src/app/curriculum/services/curriculum.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
contacts:any;

constructor(private _curriculum:CurriculumService){}

ngOnInit(){
  this.contacts = this._curriculum.getContact();
}
}
