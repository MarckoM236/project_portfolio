import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';

//Components
import { MainComponent } from './components/main/main.component';
import { CardComponent } from './components/partials/card/card.component';
import { CardSkillComponent } from './components/partials/card-skill/card-skill.component';
import { ResumeComponent } from './components/sections/resume/resume.component';
import { PortfolioComponent } from './components/sections/portfolio/portfolio.component';
import { AboutComponent } from './components/sections/about/about.component';
import { CardPortfolioComponent } from './components/partials/card-portfolio/card-portfolio.component';
import { ModalPortfolioComponent } from './components/partials/modal-portfolio/modal-portfolio.component';
import { ContactComponent } from './components/sections/contact/contact.component';

//Directives
import { ShowDirective } from './directives/show.directive';


@NgModule({
  declarations: [
    MainComponent,
    CardComponent,
    CardSkillComponent,
    ResumeComponent,
    PortfolioComponent,
    AboutComponent,
    CardPortfolioComponent,
    ModalPortfolioComponent,
    ShowDirective,
    ContactComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule
  ],
  exports:[
    MainComponent
  ]
})
export class MainModule { }
