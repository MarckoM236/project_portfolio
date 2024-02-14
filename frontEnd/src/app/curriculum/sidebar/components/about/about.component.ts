import { Component } from '@angular/core';
import { CurriculumService } from 'src/app/curriculum/services/curriculum.service';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/page/main/services/language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  about!:String;
  photo:String = "";
  Subscription:Subscription;

  constructor(private _curriculum:CurriculumService, private language:LanguageService){
    //If there is no image, set avatar as default
    this.photo = this._curriculum.getPhotoCV() !== "" ? this._curriculum.getPhotoCV() : "../../../../../assets/images/fotoCV_secondary.jpg";

    //check selected language
    this.Subscription = this.language.data$.subscribe(lang => {
      this.about = lang == 'es' ? this._curriculum.getAbout().es : this._curriculum.getAbout().en;
    });}

}
