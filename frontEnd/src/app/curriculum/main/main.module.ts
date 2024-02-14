//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

//Components
import { HeaderComponent } from './components/header/header.component';
import { ExpertiseComponent } from './components/expertise/expertise.component';
import { EducationComponent } from './components/education/education.component';
import { LanguageComponent } from './components/language/language.component';


@NgModule({
  declarations: [
    HeaderComponent,
    ExpertiseComponent,
    EducationComponent,
    LanguageComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports:[
    HeaderComponent,
    ExpertiseComponent,
    EducationComponent,
    LanguageComponent
  ]
})
export class MainModule { }
