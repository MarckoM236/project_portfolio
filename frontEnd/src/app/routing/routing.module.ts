import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { PageModule } from '../page/page.module';
import { ErrorsModule } from '../errors/errors.module';
import { PageComponent } from '../page/components/page/page.component';
import { UnavailableComponent } from '../errors/components/unavailable/unavailable.component';
import { NotFoundComponent } from '../errors/components/not-found/not-found.component';
import { CurriculumModule } from '../curriculum/curriculum.module';
import { PageComponent as PageCurriculum } from '../curriculum/components/page/page.component';

//Routes
const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  { path: 'home', component: PageComponent },
  { path: 'blog', component: UnavailableComponent },
  { path: 'curriculum', component: PageCurriculum },
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    PageModule,
    CurriculumModule,
    ErrorsModule
  ],
  exports:[RouterModule],
})
export class RoutingModule { }
