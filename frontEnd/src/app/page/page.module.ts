import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { NavbarComponent } from './components/navbar/navbar.component';

//Modules
import { HeaderModule } from './header/header.module';
import { MainModule } from './main/main.module';
import { PageComponent } from './components/page/page.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';




@NgModule({
  declarations: [
    NavbarComponent,
    PageComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    MainModule,
    RouterModule,
    TranslateModule
  ],
  exports:[
    PageComponent
  ]
})
export class PageModule { }
