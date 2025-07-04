import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  constructor(private translate:TranslateService){
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');
    translate.use('en');
  }


}
