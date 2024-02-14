import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from './sidebar/sidebar.module';
import { PageComponent } from './components/page/page.component';
import { MainModule } from './main/main.module';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    SidebarModule,
    MainModule,
    RouterModule,
    TranslateModule
  ],
  exports:[
    PageComponent
  ]
})
export class CurriculumModule { }
