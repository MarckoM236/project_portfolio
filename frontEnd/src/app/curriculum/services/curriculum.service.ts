import { Injectable } from '@angular/core';
import { Education } from 'src/app/page/main/interfaces/education';
import { Expertise } from 'src/app/page/main/interfaces/expertise';
import { Skill } from 'src/app/page/main/interfaces/skill';
import { Language, User_Info } from 'src/app/page/main/interfaces/user_info';
import { ResumeService } from 'src/app/page/main/services/-resume.service';
import { UserService } from 'src/app/page/main/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {
  about! : Language;
  contact : any;
  skills : Skill[] = [];
  photo : String = "";
  user_info : any;
  expertises : Expertise[] = [];
  educations : Education[] = [];
  languages : Skill[] = [];
  file : any;

  constructor(private _user:UserService,  private _resume:ResumeService) { }

  getAbout(){
    return this.about = this._user.getUserInfo().professional_profile;
  }

  getContact(){
    let data:User_Info = this._user.getUserInfo();
    return this.contact = {
      "phone":data.phone,
      "city":data.city,
      "departament":data.department,
      "email":data.email,
      "linkedin":data.social_networks.linkedin,
      "gitHub":data.social_networks.gitHub
    }
  }

  getSkills(){
    return this.skills = this._resume.getSkills();
  }

  getPhotoCV(){
    return this.photo = this._user.getUserInfo().photo;
  }

  getUserInfo(){
    let data:User_Info = this._user.getUserInfo();
    return this.user_info = {
      "complete_name" : data.first_name + " " + data.second_name + " " + data.first_lastname + " " + data.second_lastname,
      "profession" : data.profession
    }
  }

  getExpertise(){
    return this.expertises = this._resume.getExpertises();
  }

  getEducation(){
    return this.educations = this._resume.getEducations();
  }

  getLanguages(){
    return this.languages = this._resume.getLanguages();
  }

  getPdfFile(){
    return this.file = this._resume.getPdfFile();
  }
}


