import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private lang: BehaviorSubject<string> = new BehaviorSubject<string>('null');
  data$: Observable<string> = this.lang.asObservable();

  constructor() { }

  setLanguage(lang:string):void{
     this.lang.next(lang);
  }

}
