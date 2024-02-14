//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

//Components
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SkillsComponent } from './components/skills/skills.component';


@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports:[
    AboutComponent,
    ContactComponent,
    SkillsComponent
  ]
})
export class SidebarModule { }
