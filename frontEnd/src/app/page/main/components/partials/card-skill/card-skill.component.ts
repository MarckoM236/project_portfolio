import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/page/main/interfaces/skill';

@Component({
  selector: 'app-card-skill',
  templateUrl: './card-skill.component.html',
  styleUrls: ['./card-skill.component.css']
})
export class CardSkillComponent {

  @Input() title:string="";
  @Input() skills:Skill[]=[];
  @Input() icon:string="";


}
